
this is the minimal required install:
`npm install --save react react-dom`
and 
`npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react css-loader style-loader html-webpack-plugin webpack webpack-dev-server`

I also add to that list: `babel-preset-stage-2` which lets me use javascript property initializers. this one is optional though.

Once you install these presets, you have to add the property "babel" in your `package.json`:
```
"babel": {
	"presets": ["env", "react"]
}
```
and if you installed babel-preset-stage-2 as well, you'll need to add it too as `"stage-2"` inside the array.
