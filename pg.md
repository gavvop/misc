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


## Misc

Export a table data as json

```
copy (select row_to_json(t) from (select * from my_table) t) to '/tmp/table.json'
```

Connect to remote db
```
psql -h <host> -p <port> -U <username> <dbname>
```
