## Image Processing API
* There are 4 main folders, src folder which includes typescript files, build folder which includes compiled js files, assets folder which includes the original and thumbnail images and spec folder that contains some jasmine configurations.

* in package.json, there are 7 scripts for the dependencies:
  - **prettier:** to format the code by the rules configured in the .prettierrc file.
  - **lint:** to run eslint dependency.
  - **dev:** to run typescript code with nodemon.
  - **build:** to compile typscript code.
  - **test:** to run tests on compiled code.
  - **start:** to run the compiled code.
 
 * The src folder contains:
   - **index.ts:** the entry point of the app.
   - **routes folder:** contains the endpoint.
     - The endpoint used to resize an existing image: 'http://localhost:3000/api/images?filename=fjord&width=200&height=200'
   - **utilities folder:** contains readFile function and resize function.
     - **readFile function:** it reads **any file format** from certain directory and if the file exists, it will return its **name and extension**.
     - **resize function:** it takes the full and thumbnail directories, the image and its desired size and rescale the image by sharp module, and finally save the resized images in thumbnail folder.
   - **test folder:** contains all unit tests.
     - Tests the end point, readFile function and resize function.
   - **middleware folder:** contains the customized middleware functions.
     - **isValidUrl:** checks if the user enters the correct url or not.
     - **isFileExist:** checks if the image not exist in full folder it will return a message to the user and if exists it will continue to the next middleware.
     - **isFileResized:** checks if the image has been resized before with same size, it will return the cached one without making the processing.
  
 * The build folder content is same as the src folder but in compiled javascript.
 
 * Run "npm install" to install the used dependencies.
