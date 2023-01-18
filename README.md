## Image Processing API
* In server folder, there are 3 main folders, src folder which includes typescript files, build folder which includes compiled js files and spec folder that contains some jasmine configurations.

* in package.json, there are 7 scripts for the dependencies:
  1. prettier: to format the code by the rules configured in the .prettierrc file.
  2. lint: to run eslint dependency.
  3. dev: to run typescript code with nodemon.
  4. build: to compile typscript code.
  5. jasmine: to run unit testing on typescript code.
  6. test: to run tests on compiled code.
  7. start: to run the compiled code.
 
 * The src folder contains:
   1. index.ts: the entry point of the app.
   2. assets folder: contains full folder that has the original images and thumbnail folder that has the resized images.
   3. routes folder: contains the endpoint.
   4. utilities folder: contains readFile function and resize function.
   5. test folder: contains all unit tests.
   6. middleware folder: contains the customized middleware functions.
  
 * The build folder content is same as the src folder but in compiled javascript.
