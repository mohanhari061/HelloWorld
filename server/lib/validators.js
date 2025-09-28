

import {body,validationResult} from "express-validator"

export const registerValidator=()=>[
    body(["name", "username", "password", "bio"]).notEmpty()
]

export const validateHandler=(req,res,next)=>{
   const errors= validationResult(req);
   console.log(errors)

   if(errors.isEmpty())return next();
}
