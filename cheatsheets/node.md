# Node.js

## Show globally linked npm packages

```bash
npm ls -g --depth=0 --link=true
```

## Link a local library into a project

1. Unlink the old version:

   ```bash
   cd <library-path> && npm unlink .
   ```

2. Build the library:

   ```bash
   npm run build
   ```

3. Go into the build output:

   ```bash
   cd dist/<company>/<project>/
   ```

4. Link the library globally:

   ```bash
   npm link .
   ```

5. Link the library into the main project (run from the main project folder):

   ```bash
   npm link <company>/<project>
   ```

Check `node_modules/` in the main project to make sure it points to the local library.
