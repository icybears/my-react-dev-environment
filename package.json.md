*// add this:*
```
 "scripts": {
    "start": "webpack-dev-server --open",
     "build": "cross-env NODE_ENV=production webpack -p"
  }
```
  
  and now to start your dev environment: `npm run start`
  `webpack-dev-server` will open up in the browser (it also reloads at every change in the files automatically)
  
  to build everything and eject your bundled file: `npm run build`
 
  note that I'm using `cross-env` that allows to execute that build script in windows, I think linux users can execute it without cross-env.
  `cross-env` should be installed with the dev dependencies as well. i.e `npm install --save-dev cross-env`
 
