import {isValidUsername} from '6pp'
import { use } from 'react'

export const usernameValidator=(username)=>{
    
    if(!isValidUsername(username)){
        return {isValid:false, errorMessage:"Username is invalid"}
    }
}