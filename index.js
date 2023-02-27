var mysql = require('mysql');
const http = require('http');
var fs=require('fs')
const { sql_server } = require('./modules/sql_server');
const { connect } = require('http2');
const  sql = require(`${__dirname}/modules/sql_server`)
let info1 
let out

let shede
// let sql_data= sql.sql_server('baza')
// console.log('baza  '+sql_data)

//  info =sql.sql_server('EEH-07-0161-131')
let test ='it server'
let tem0 = fs.readFileSync(`./index.html`,`utf-8`)
let tem1 = fs.readFileSync(`./main.html`,`utf-8`)


let saziebo
let nishn
let k=0
let testt
const server=http.createServer((req,res)=>{
  saziebo=req.url
if(k<1){
  k=k+1
  nishn=saziebo.replace('/','')
}
  
  
  
  console.log(nishn,k)

  // ===================================================
  //  sql connect
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "125000",
    database:'magti'
  });


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
    con.query(`SELECT * FROM magti.dmc11 where ALD_PURT_NUMBER like'${nishn}'`,function(errr,result,field){
      k=0
      if (errr) throw errr
      // if(result[1].DESCRIPTION===''){console.log('carielia')}
      // console.log(result.length)
     for (let i = 0; i < result.length; i++) {
        
        console.log(result[i].PART_NUMBER) 
        
        out = tem0.replace(/{% teqsti %}/g,result[i].DESCRIPTION)
        out=out.replace(/{% teqsti1 %}/g,result[i].PART_NUMBER)
        out=out.replace(/{% teqsti2 %}/g,result[i].ALD_PURT_NUMBER)
        out=out.replace(/{% sigrze %}/g,result.length) 
        out=out.replace(/{%okok%}/g,result[i].PART_NUMBER)
        out=out.replace(/{%okkald%}/g,result[i].ALD_PURT_NUMBER)
        // out=out.replace(/{%gadatana%}/g,testt)
        
          
     }   
     
     
     res.end(out)
    //  window.alert(insert_p)
    })  
  
   
  
});
// sql end
  // ===================================================

  
  
  // document.getElementById('but1').addEventListener('click',function(){
  //    document.querySelector('.ln2').value='dddd'
  // })
  
  
     
          })

          server.listen(1000,'127.0.0.1',()=>{
            console.log('listening on port 1000')
        })         
