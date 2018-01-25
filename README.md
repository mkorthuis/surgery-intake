#Surgery Intake Application

##Commands to create application:  

```
create-react-app surgery-intake

# UI functionality
yarn add react-bootstrap node-sass-chokidar bootstrap react-router-bootstrap create-react-class react-16-bootstrap-date-picker bootswatch@3.3.7

# Redux and Router
yarn add redux react-redux react-router-dom react-router-redux@next redux-thunk

#For Running multiple commands
yarn add npm-run-all

yarn add lodash moment-es6

#Updates to package.json. Keep test and eject
  "build-css": "node-sass-chokidar src/ -o src/",
  "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
  "start-js": "react-scripts start",
  "start": "npm-run-all -p watch-css start-js",
  "build-js": "react-scripts build",
  "build": "npm-run-all build-css build-js",
```