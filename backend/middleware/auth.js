const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req,res,next)=>{
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token,'wiseChildSecretToken');
        const user = await User.findOne({_id:decoded,'tokens.token':token});
        if(!user){
            throw new Error('User not found');
        }
        req.token = token;
        req.user = user;
        next();
    } catch (error) {
        res.status(200).send(error)
    }
}

module.exports = auth;