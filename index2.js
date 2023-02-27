const fs = require('fs')
var mysql = require('mysql');
const express = require('express')
const app = express()
app.use(express.json())
const morgan =require('morgan')
const modul_k=require('./modul/modul')
const modul_kk=require('./modul/sql_con')
// const sql_server= require('./modul/sql_con')

app.use(morgan('dev'))


// const req_time es sruldeba koveli serveris chtvirtvisas
app.use((req,res,midl_post)=>{

    console.log('hallo from midl post')
    req.req_time=new Date().toISOString()
    console.log(req.req_time)
    midl_post()
})

let nishn
let out1
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
    
});

// function Accesss(){
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
//     res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
// }


let k=0
let out =fs.readFileSync(`${__dirname}/index.html`,'utf-8')

const new_function_get=(req,res) => {
    // console.log(req.params.saziebo)  
    // console.log(req.params.part)
    // console.log(req.params.seriuli)
    
    
        res.setHeader('Access-Control-Allow-Origin','*');
        res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
        res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    // next();
    
    nishn='%'
    nishn=nishn+ req.params.saziebo +'%'
    console.log(nishn)
    nishn=nishn.replace('*','%')
    nishn=nishn.replace('*','%')
    nishn=nishn.replace('*','%')
    nishn=nishn.replace('*','%')
    
    console.log( 'mosazebnia',nishn)
    con.query(`SELECT * FROM magti.dmc11 where ALD_PURT_NUMBER like'${nishn}'`,function(errr,result,field){         
         console.log(result.length) 
        //  res.send(result)  
        
            k=0   
            k=result.length*1
            out=out.replace(/{% sigrze %}/g,k)
            console.log('kas sigrze',k)
            for (let i = 0; i < k; i++) {   
                // let out =fs.readFileSync(`${__dirname}/index.html`,'utf-8')        
                console.log('bazashia '+result[i].ALD_PURT_NUMBER)
                // out=out.replace(/{% teqsti0 %}/g,result[i].PART_NUMBER)
                out=out.replace(/{% teqstii0 %}/g,result[i].ALD_PURT_NUMBER)  
                // res.end(out)
                // out=out.replace(/{%okok%}/g,result[i].PART_NUMBER)
            // out=out.replace(/{%okkald%}/g,result[i].ALD_PURT_NUMBER)    
               
             }
           
         
          
         
          
           
           
             console.log(modul_k)
             console.log(modul_kk.kk(6))
            res.send(result)
            
            // res.send(out)
    
    }) 
     
    
    
    }


const new_function_post =(req,res) => {
    console.log(req.body)
    // con.query(`SELECT * FROM magti.dmc11 where ALD_PURT_NUMBER like'${nishn}'`,function(errr,result,field){ 

    //     res.send
    // })
    
    res.send('aris post done ')
    }


    const main_page=(req,res) => {
        res.setHeader('Access-Control-Allow-Origin','*');
        res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
        res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
        // Accesss()
    
        con.query(`SELECT * FROM magti.dmc11`,function(errr,result1,field){ 
            res.send(result1)
        })
       
       
    }

const main_page_add=(req,res)=>{

console.log('saziebo aris'+req.params.saziebo)
res.setHeader('Access-Control-Allow-Origin','*');
res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
con.query(`SELECT * FROM magti.dmc11 where ALD_PURT_NUMBER like'${req.params.saziebo}'`,function(errr,result2,field){ 
res.send(result2)
})

// res.send(result2)
}    
// function zieba(tp,res,req){
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
//     res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
//     con.query(`SELECT * FROM magti.work where TP like'${tp}'`,function(errr,result_Tp_find,field){
//         return result_Tp_find
//     })
// }

const put_data=(req,res)=>{
    
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    // res.send('put data')
    console.log(req.params.worker1)
    console.log(req.params.worker2)
    console.log(req.params.seriuli)
    console.log(req.params.part_new)
    console.log(req.params.ald_part)
    console.log(req.params.TP1)

    


 con.query(` INSERT INTO magti.work (TP,Worker1,Worker2,Worker3,PART_NUMBER,ALD_PURT_NUMBER) 
             VALUES (${req.params.TP1}, '${req.params.worker1}', '${req.params.worker2}','gio','${req.params.part_new}','${req.params.ald_part}')`,function(errr,result2,field){ 
        // res.send(result2)
        }) 
        con.query(`SELECT * FROM magti.work where TP like'${req.params.TP1}'`,function(errr,result_Tp_find,field){
            res.send(result_Tp_find)
        })
        // zieba(req.params.TP1,res,req)
        // console.log(req.params.TP1)
        // res.send(zieba(req.params.TP1))
}

const find_data=(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    con.query(`SELECT * FROM magti.work where TP like'${req.params.findtp}'`,function(errr,result_Tp_find_last,field){
        res.send(result_Tp_find_last)
    })

}
app.route('/app/:saziebo?/:part?/:seriuli?')
   .post(new_function_post)
   .get(new_function_get)
   

   app.route('/main/:saziebo?/:part?/:seriuli?')
      .get(main_page)

app.route('/damateba/:saziebo?/:part?/:seriuli?')
   .get(main_page_add)
      
app.route('/new_data/:TP1?/:worker1?/:worker2?/:seriuli?/:part_new?/:ald_part?')   
   .get(put_data)         


app.route('/find_tp/:findtp?')
   .get(find_data)
app.listen(1000,'127.0.0.1',()=>{
    console.log('listening on port 1000')
}) 