*// add this:*
```
 "scripts": {
    "start": "webpack-dev-server --open"
  }
```
  
 // and now to start everything: `npm run start`
 // `webpack-dev-serer` will open up in the browser (it also reloads at every change in the files automatically)
  
 // (don't forget to add `"babel"` property with the other `"presets"` in the *package.json*)