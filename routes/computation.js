var express=require('express')
 
var router=express.Router();
 
router.get('/',(req,res)=>{
    let random=Math.floor(Math.random()*100)+1;
    let data=req.query.x;
    console.log(data,random);
    res.send('Math.acosh()('+random+') is: '+Math.acosh(random)+'\n'+'Math.log1p('+random+') is: '+Math.log1p(random)+'\n'+'Math.tan('+random+') is: '+Math.tan(random)+'\n'+'Math.sqrt('+random+') is: '+Math.sqrt(random)
    );
})
 
module.exports=router