// This file transpiled, so must use CommonJS and ES5


//register babel to transpile before tests run.
require('babel-register');

//Disable webpacks features that Mocha doesn't understand
require.extensions['.css']=function(){};
