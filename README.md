# mngo-project-tools
This library is available at [mngo-project-tools](https://www.npmjs.com/package/mngo-project-tools)


## Brief:

A JavaScript Library (npm package) where I keep all my javscript utils/components/apis/encryptionUtils which is usable in many of mngo projects


## Usage


## Installation

1. npm install
2. npm start


## Available Scripts

In the project directory, you can run


### `npm start`

Runs the app in the development mode
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run build`

it is for final package build which create `dist` folder.


### `npm publish`

to publish the project on npm

`Note`: do `npm run babel-build` before `npm publish` because it publishes dist folder as defined as key main, module, files in package.json, and do not forget to login in npm using `npm login`


### `npm run build-publish`

this command make build of the project and publishes it, basically it is combination of `npm run babel-build` and `npm publish`


## License

All rights reserved under MNgo.