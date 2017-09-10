
this is the minimal required install:

`npm install --save react react-dom`

and 

`npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react css-loader style-loader html-webpack-plugin webpack webpack-dev-server`

I also add to that list: `babel-plugin-transform-class-properties` which lets me use javascript property initializers. this one is optional though.

Once you install these presets, you have to add the property "babel" in your `package.json`:
```
"babel": {
	"presets": ["env", "react"]
}
```
and if you installed the babel plugin as well, you'll need to add it too as `"transform-class-properties"` inside the array like this:
```
"babel": {
    "presets": [
      "env",
      "react"
    ],
    "plugins": [
      "transform-class-properties"
    ]
  },
```
