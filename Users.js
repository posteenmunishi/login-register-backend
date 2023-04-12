const router=require('express').Router();
const User=require('../Models/User.Models');
const bcryptjs =require("bcryptjs");
const { isValidObjectId } = require('mongoose');
const { findOne } = require('../Models/User.Models');

router.get(('/'),(req,res)=>{
    User.find()
    .then(User=>res.send(User))
    .catch(err=>res.status(400).json(`Error`,+err));
});
router.post(('/add'),async(req,res)=>{

        //  const name=req.body.name;
     const Email=req.body.Email;
     const password=req.body.password;

     const encryptedPassword=await bcryptjs.hash(password,10)
   const all={Email,password}
     if(!all){
        res.status(404).json("data is forbiden");
     }
else{
     await User.create({
         Email,
        password:encryptedPassword
     })

    //  newUser.save()
 .then(()=>res.json(`User added`))
    }} 
);
router.route("/login").post(async(req,res)=>{
 const {Email,password}=req.body 
   const k=await User.findOne({Email});
    const pass=await bcryptjs.compare(password, k.password)

    
  if(!pass){
        res.status(210).json("wrong password")
  }
  else{
    res.status(200).json("success")
  }
})
   


router.route("/homepage"),(async(req,res)=>{
 res.send({message:"you are ion home page"})
});
router.route("/update/:id").post((req,res)=>{
    User.findById(req.params.id)
    .then(User=>{
        User.name=req.body.name;
        User.Email=req.body.Email;

        User.save()
        .then(()=>res.json("user updated"))
        // .catch(err=>res.status(400).json(`Error`,+err));
    })
    .catch(err=>res.status(400).json(`Error`,+err));
})
module.exports=router;

exports.token=(req,res,next)=>{
const Url='https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
const auth='Basic'+Buffer.from(consumerKey+ ':'+ConsumerSecret).toString('base64')
// const headers={Aouthorization:auth};
axios.get(Url),(req,res)=>{
    then((res)=>{
        let data=res.data;
        let access_token=data.access_token;
        req.token=access_token;
        next();
        })
        .catch((error)=>console.log(error))
}

},

exports.stkpush=(res,req)=>{
    const token=req.token;
    const headers={Authorization:'Bearer'+token};
    const stkUrl='https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
    let data={
        BusinessShortCode:"174379",
        // Password: newPassword,
        Timestamp: formatted,
        TransactionType:'CustomerPayBillOnline',
        Amount: '2',
        PartyA: '+254748106123',
        PartyB: '174379',
        PhoneNumber: '254748106123',
        // CallBackUrl:'',
        AccountReference: 'Posteen account',
        TransactionDesc: 'lipa na mpesa ,,we are coding,,this is a test'
    }
    res.send(token);
}