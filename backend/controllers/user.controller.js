import User from "../models/user.model.js";

export const getUsersFromSidebar = async(req,res)=>{
    try {
        const loggedInUserId = req.user._id;

        const filterdUsers= await User.find({_id:{$ne:loggedInUserId}}).select("-password");

        res.status(200).json(filterdUsers);

    } catch (error) {
        console.error("Error on getUsersFromSidebar",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}