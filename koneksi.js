var mysql =require ('mysql');

//koneksi database

const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'sasa',
    database:'laravel'
});

conn.connect((err)=>{
    if (err) throw err;
    console.log('mysql konek');
});

module.exports=conn;