# PostgreSQL

## Run a query with psql

Become the `postgres` user:

```bash
sudo su - postgres
```

Open psql:

```bash
psql
```

Connect to a database and run a query:

```sql
\c <database>
SELECT * FROM <table>;
```

## Connect to a remote database

```bash
psql -h <host> -p <port> -U <username> <database>
```

## Import / export

Export a table as JSON (one object per line):

```sql
COPY (SELECT row_to_json(t) FROM (SELECT * FROM <table>) t) TO '/tmp/<table>.json';
```

Import a binary dump (`.arc`):

```sql
COPY <table> FROM '/tmp/<table>.arc' WITH BINARY;
```

> `COPY` reads/writes files on the **database server**. To use files on the client machine, use `\copy` with the same syntax.
