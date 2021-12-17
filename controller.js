'use strict';

var response =require('./res');
var connection =require('./koneksi');

exports.index=function(eq,res){
    response.ok("rest api running....",res);
}