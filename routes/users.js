
const express=require('express')
const user = require('../models/user')
const router=express.Router()
const User= require('../models/user')
 
/*Getting all*/
router.get('/', async (req,res) =>{
    try{
        const users=await User.find()
        res.json(users)
    }
    catch(err){
    res.status(400).json({ message: err.message})
    console.log(err)
    }
})
 
/**Getting one  */


router.get('/:id', getUser,   (req,res) => {
    res.send(res.user.name)
})

/**creating one */
router.post('/', async (req,res) =>{
    const user=new User({
        name: req.body.name,
        userToChannel: req.body.userToChannel
    })
     try{
         const newUser= await user.save()
         res.status(201).json(newUser)
     }
     catch(err){
         res.status(400).json({message: err.message})
     }
    })
    

/**update one */
router.patch('/:id', (req,res) =>{
    
})

/**delete one  */
router.delete('/:id', (req,res) =>{
    res.user
})

async function getUser(req,res,next){
    let user
     try {
        user= await User.findById(req.params.id)
        if(user==null){
            return res.status(201).json({ message:'cannot find user'})
        }
    }
    catch (err){
        return res.status(400).json({ message: err.message})
    }
    res.user=user
    next()
}
module.exports=router