/**
 * Created by Oliver on 24.05.2016.
 */

var compressor = require('node-minify');
var argv = require('minimist')(process.argv.slice(2));

// Using Google Closure
new compressor.minify({
  type: 'gcc',
  fileIn: argv.i,
  fileOut: argv.o,
  callback: function(err, min){
    if(err)
      console.log(err);
    else
      console.log('Okay, Mini liegt unter '+argv.o);
    //console.log(min);
  }
});