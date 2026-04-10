import { LogIn } from "lucide-react";
import { useState,useEffect,createContext } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [user,setuser]=useState(null);
    const [loading,setlaoding]=useState(true);

    const login=(userdetail,token)=>{
        setuser(userdetail);
        localStorage.setItem('token',token);
    }
    

    const logout=()=>{
        setuser(null);
        localStorage.removeItem('token');
    }

     useEffect(()=>{
        const savedtoken=localStorage.getItem('token');
        if (savedtoken) {}    
        

    },[]);

    return(
        <AuthContext.Provider value={{user,loading,login,logout}}>
{children}

        </AuthContext.Provider>
    );


}