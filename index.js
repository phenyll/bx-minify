#!/usr/bin/env node
 /**
 * Created by Oliver on 24.05.2016.
 */

var compressor = require('node-minify');
var argv = require('minimist')(process.argv.slice(2));
var filein = argv.i!=undefined?argv.i:argv._[0];
var fileinparts = filein.split('.');
var fileout = argv.o!=undefined?argv.o:(fileinparts[0]+'.min'+(fileinparts[1]!=undefined?('.'+fileinparts[1]):''));
// Using Google Closure
new compressor.minify({
  type: 'gcc',
  fileIn: filein,
  fileOut: fileout,
  callback: function(err, min){
    if(err)
      console.log(err);
    else
      console.log('minified version @ '+fileout);
    //console.log(min);
  }
});