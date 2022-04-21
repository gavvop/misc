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
