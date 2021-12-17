'use strict';

var response =require('./res');
var connection =require('./koneksi');

exports.index=function(eq,res){
    response.ok("rest api running....",res);
}

exports.tampilsemuamahasiswa=function(eq,res){
    connection.query("select * from mahasiswa",function(error,rows,fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows,res);
        }
    });
   
}