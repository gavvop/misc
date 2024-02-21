# PostgreSQL

## Run a query using psql

Become user postgres

```
$ sudo su
# su postgres
```

Open psql
```
$psql
```


Connect to db
```
postgres=# \c <database>
```

Then run the query
```
postgres=# select * from <table>;
```


## Import/export

Export a table data as json

```
copy (select row_to_json(t) from (select * from my_table) t) to '/tmp/table.json'
```

Import a .arc
```
copy my_table from '/tmp/my_table.arc' with binary;
```

## Misc

Connect to remote db
```
psql -h <host> -p <port> -U <username> <dbname>
```
