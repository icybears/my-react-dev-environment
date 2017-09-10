*// add this:*
```
 "scripts": {
    "start": "webpack-dev-server --open",
     "build": "cross-env NODE_ENV=production webpack -p"
  }
```
  
  and now to start everything: `npm run start`
 
 `webpack-dev-server` will open up in the browser (it also reloads at every change in the files automatically)
  
  note that I'm using cross-env that allows to execute that script in windows, I think linux users can execute it without cross-env.
 
