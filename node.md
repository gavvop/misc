
## Node

**Show NPM global links**

```
npm ls -g --depth=0 --link=true
```

### Link a local library

**unlink the old version**

```
cd <library-path> && npm unlink .
```

**library build**

```
npm run build
```

**go into the dist**

```
cd dist/<company>/<project>/
```

**link the library globally**

```
npm link .
```

**link the library in the main project**

```
npm link <company>/<project>
```

Make sure that your main project is linking the local library checking the node_modules/ dep
