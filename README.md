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
     - The endpoint used to resize an existing image: 'http://http://localhost:3000/api/images?filename=fjord&width=200&height=200'
   - utilities folder: contains readFile function and resize function.
     - readFile function: it reads any file format from certain directory and if the file exists, it will return its name.
     - resize function: it takes the full and thumbnail directories, the image and its desired size and rescale the image by sharp module, and finally save the resized images in thumbnail folder.
   - test folder: contains all unit tests.
     - Tests the end point, readFile function and resize function.
   - middleware folder: contains the customized middleware functions.
     - 
  
 * The build folder content is same as the src folder but in compiled javascript.
