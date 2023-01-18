## Image Processing API
* In server folder, there are 3 main folders, src folder which includes typescript files, build folder which includes compiled js files and spec folder that contains some jasmine configurations.

* in package.json, there are 7 scripts for the dependencies:
  - prettier: to format the code by the rules configured in the .prettierrc file.
  - lint: to run eslint dependency.
  - dev: to run typescript code with nodemon.
  - build: to compile typscript code.
  - jasmine: to run unit testing on typescript code.
  - test: to run tests on compiled code.
  - start: to run the compiled code.
 
 * The src folder contains:
   - index.ts: the entry point of the app.
   - assets folder: contains full folder that has the original images and thumbnail folder that has the resized images.
   - routes folder: contains the endpoint.
   - utilities folder: contains readFile function and resize function.
   - test folder: contains all unit tests.
   - middleware folder: contains the customized middleware functions.
  
 * The build folder content is same as the src folder but in compiled javascript.
