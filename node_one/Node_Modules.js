//Modules


//Path Module  
 
 
 const path= require("path")
//  console.log(path)
//  console.log(__filename)
//  console.log(__dirname)
//  console.log(path.basename(__filename))
//  console.log(path.basename(__dirname))
//  console.log(path.parse(__filename))
//  console.log(path.parse(__filename).ext)
//  console.log(path.extname(__filename))
//  console.log(path.join(__dirname,'api','Node_Modules.js'))



//fs Module

const fs=require("fs")
// const { toASCII } = require("punycode")
// console.log(fs)
// console.log(fs.mkdir(path.join(__dirname,'/New/in.html'),{},(err)=>{if(err) throw (err)}))
// fs.rmdir(path.join(__dirname,'/Newin.html'),{recursive:true},(err)=>{if(err) throw(err)})
// fs.rmdir(path.join(__dirname,'New'),{recursive:true},(err)=>{if(err) throw(err)})
// fs.mkdir(path.join(__dirname,'/New/index.html'),{},(err)=>{if(err) throw(err)})
// fs.rmdir(path.join(__dirname,'/New/index.html'),{recursive:true},(err)=>{if(err) throw(err)})
// fs.writeFile(path.join(__dirname,'/New','one.txt'),"I am shahana",(err)=>{if(err) throw (err)})
// const name='Anoob'
// // fs.appendFile(path.join(__dirname,'/New','one.txt'),`\ti am =${name}`,(err)=>{if(err) throw (err)})
// fs.readFile(path.join(__dirname,'New','one.txt'), 'utf8',(err,data)=>{
//     if(err) throw (err)
//     console.log(data)

// })

// fs.mkdir(path.join(__dirname,'/sample'),{},(err)=>{if(err) throw(err)})
// fs.writeFile(path.join(__dirname,'/sample','sample1.txt'),"username=shana123\n",(err)=>{if(err) throw (err)})
// fs.rmdir(path.join(__dirname,'/sample/sample.txt'),{recursive:true},(err)=>{if(err) throw (err)})
// const un='finu123'
// fs.appendFile(path.join(__dirname,'/sample','sample1.txt'),`\n username=${un}`,(err)=>{if(err) throw (err)})
// fs.readFile(path.join(__dirname,'/sample','sample1.txt'),'utf8',(err,data)=>{
//     if(err) throw (err)
//     console.log(data)
// })


//http Module

const http=require('http')

// //console.log(http)
// http.createServer((req,res)=>{
//     res.write("hellooo")
//     console.log(req.url)
//     res.end()
// }).listen(4000,()=>console.log("server is running"))
// // console.log('good')
// // console.log('myyyyy')

// http.createServer((req,res)=>{
//     res.write("this is my page")
//     res.end()

// }).listen(4001,()=>console.log("server run"))

//---------------------------------------------------------------------------------------------------------------------------------------------
// const PORT=process.env.PORT || 4003
// const server =http.createServer((req,res)=>{
//     res.write("Node js is Working")
//     console.log(req.url)
//     console.log("hellooo")
//     res.end()
// })
// server.listen(PORT,()=>console.log(`server running on port ${PORT}`))

//--------------------------------------------------------------------------------------------------------------------------------------
// const server=http.createServer((req,res)=>{
//     if(req.url==='/'){
//         fs.readFile(path.join(__dirname,'/New','/one.html'),'utf8',(err,data)=>{
//             if(err)throw err;
//             res.writeHead(200,{'content-type':'text/html'})
//             res.end(data)
//         })
//     }
//     if(req.url==='/ab'){
//         fs.readFile(path.join(__dirname,'/New','/about.html'),'utf8',(err,data)=>{
//             if(err)throw err;
//             res.writeHead(200,{'content-type':'text/html'})
//             res.end(data)
//         })
        
//     }

// })
// const PORT=process.env.PORT ||5000

// server.listen(PORT,()=>console.log(`server running on port ${PORT}`))

//--------------------------------------------------------------------------------------------------------------------------------------


//Third party Module


// const {set,value}=require('./New.js')
// console.log(value)
// console.log(set(`${value}`))


//-----------------------------------------------------------------------------------------------------------------------------------

const express= require('express')
const app=express()


const PORT =process.env.PORT || 4000
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))
// app.get('/',(req,res)=>{
//     res.send('<h1>Welcome </h1>')
// })
// app.get('/about',(req,res)=>{
//     res.sendFile(path.join(__dirname,'/New','/about.html'))
// })
// app.get('*',(req,res)=>{
//     res.status(404);
//     res.send('<h1>Error 404 Not Found</h1>')
// })

// app.use(express.static('New'));

// app.get('/*',(req,res)=>{
//     res.status(404);
//     res.send('<h1>Error 404 Not Found </h1>');
// })


//------------------------------------------------------------------------------------------------------------------------------------
//middle Ware

// app.get('/home',token,(req,res)=>{
//     console.log('user logged');
//     res.send('Welcome Home');
// })
// function token(req,res,next){
//     console.log('token created');
//     next();
// }


//---------------------------------------------------------------
//  app.get('/home',Token,Validation,Finished,(req,res)=>{
//     console.log("logged");
//     res.send('Hellooo welcome back to home');

//  })
//  function Token(req,res,next){
//     console.log('Token created');
//     next();
//  }
//  function Validation(req,res,next){
//     console.log('Token Validated');
//     next();

//  }
//  function Finished(req,res,next){
//     console.log("Finished");
//     next();

//  }
//----------------------------------------------------------
// app.get('/user',Token,Validation,(req,res)=>{
//     console.log("logged")
//     res.send('user logged')

// })
// function Token(req,res,next){
//     const token="123"
//     req.token=token;

//     setTimeout(()=>{
//         console.log('Token created');
//         next()
//     },5000)
    
// }
// function Validation(req,res,next){
//     if (req.token){
//         console.log('validated');

//     }
//     next();

// }

//---------------------------------------------------------------
// app.get('/user',Token,Validation,(req,res)=>{
//     console.log("logged");
//     res.send("welcome")
// })
// function Token(req,res,next){
//     const token=false
//     setTimeout(()=>{
//         console.log("token created");
//         next();
//     },5000)
// }
// function Validation(req,res,next){

//     if(req.token){
//         console.log("validated");
//     }
//     else{
//         console.log("validation failed");
//         res.send("oooops ,no Token");
//     }
//     next();
// }


//---------------------------------------------------------------------------------------------
 
// const Token=require('./middleware/Token')
// const Validation=require('./middleware/Validation')

// app.get('/home',Token,Validation,(req,res)=>{
    
//     console.log('worked')
//     res.send('User Logged')
// })


//-----------------------------------------------
// const Token=require('./middleware/Token')
// const Validation=require('./middleware/Validation')
// const middle=[Token,Validation]
// app.get('/home',middle,(req,res)=>{
//     console.log("user Logged")
//     res.send("Welcome Back")
// })

//--------------------------------------------
// app.get('/home',(req,res)=>{
//     // const obj=["shahana","finu","jabi"]
//     const obj1=[{"name":"shahana","age":21,"qualification":"MCA"},
// {"name":"finu","age":25,"qualification":"MBA"}]
//     // res.send(obj)
//     res.send(obj1);
// })


//----------------------------------------------------------------------------------------------------------------------------------------------


//post method




app.use(express.json())

app.post('/signup',(req,res)=>{
    const {username,email}=req.body
    console.log(username,email)
    res.json({username,email})
})