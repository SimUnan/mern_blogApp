const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const User = require('../model/User')

const registerRoute = async(req, res) => {
    const {username, password, cfPassword} = req.body;

    try{
        if(!username || !password || !cfPassword){
            return res.status(400).json({msg: "all field need to be filled."});
        }

        //check if username is taken
        const existedUsername = await User.findOne({username})
        if(existedUsername){
            return res.status(400).json({msg: "Username is taken."});
        }

        //check matching password with cfPassword
        const matchedPassword = (password === cfPassword);
        if(!matchedPassword){
            return res.status(400).json({msg: "Password and Comfirm password have to be matched."})
        }else{
            //bcrpyt password 
            const salt = await bcrypt.genSalt(10);
            var hashedPassword = await bcrypt.hash(password, salt);
        }

        const newUser = new User({
            username: username,
            password: hashedPassword 
        })

        const savedUser = await newUser.save();
        return res.status(200).json({msg: "Register successful!!!"});
        
    }catch(error){
        console.log(msg);
    }
}

const LoginRoute = async(req, res) => {
    const {username, password} = req.body;
    try{
        if(!username || !password){
            return res.status(400).json({msg: "All field need to be filled."});
        }

        //check if user exist or not 
        const existedUser = await User.findOne({username});
        if(!existedUser){
            return res.status(400).json({msg: "User not found."});
        }

        //compare password
        const comparePassword = await bcrypt.compare(password, existedUser.password);

        if(!comparePassword){
            return res.status(400).json({msg: "Password is not correct."});
        }

        return res.status(200).json({msg: "Login scuccessful!"});
    }catch(err){
        console.log(msg)
    }

}

module.exports = {registerRoute, LoginRoute};