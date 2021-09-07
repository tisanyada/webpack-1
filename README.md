# webpack_test


## How to use the application
    - clone or download the repository to your system then 
        - cd to the project directory
        - npm install (for dependencies)
        - npm run webpack-dev (this creates a new [dist] folder)
        - cd into new [dist] folder and launch index.html

## About the webpack config
    - Using latest version of webpack webpack-cli
    - The configuration is in the webpack.common.js file
    - In the webpack.common.js file with reference to the entry point the main key points to our main.js file. The main.js file which is located in the [src] folder contains the logic for our script.js file and also imports our css file with require.
    - the module config has to deal with our styles which have been configured with style-loader to load our styles into the style tag of index.html file(in dist folder) and css-loader which compiles our styles into our main.js file as required. the html-loader is responsible for loading our html content as is in our template and the last config for our module extracts our images with a config to output them in a separate folder with their corresponding names into our [dist] folder upon build.