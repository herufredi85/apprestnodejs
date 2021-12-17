'use strict';

var response =require('./res');
var connection =require('./koneksi');

exports.index=function(req,res){
    response.ok("rest api running....",res);
}

exports.tampilsemuamahasiswa=function(req,res){
    connection.query("select * from mahasiswa",function(error,rows,fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows,res);
        }
    });
   
}

exports.tampilsemuamahasiswaid=function(req,res){
    let id=req.params.id;
    connection.query("select * from mahasiswa where id_mahasiswa=?",[id],function(error,rows,fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows,res);
        }
    });
   
}

exports.tambahmahasiswa=function(req,res){
    let nim=req.body.nim;
    let nama=req.body.nama;
    let jurusan=req.body.jurusan;
    connection.query("insert into mahasiswa(nim,nama,jurusan)values(?,?,?)",[nim,nama,jurusan],function(error,rows,fields){
        if(error){
            connection.log(error);
        }else{
            response.ok("berhasil",res);
        }
    });
   
}