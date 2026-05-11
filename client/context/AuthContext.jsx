import { Frown, LogIn } from "lucide-react";
import { useState,useEffect,createContext } from "react";
import {  useNavigate } from "react-router-dom";


export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const navigate=useNavigate();
    const [user,setuser]=useState(null);
    const [loading,setloading]=useState(false);
    const [token,settoken]=useState("");
    const login=(userdetail,token)=>{
        setuser(userdetail);
        localStorage.setItem('token',token);
        localStorage.setItem('user',JSON.stringify(userdetail));
        settoken(token);
    }
    

    const logout=()=>{
       navigate("/");
        setTimeout(() => {
             setuser(null);
        settoken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
              
        }, 10);
    }
    
    useEffect(()=>{
        const savedtoken=localStorage.getItem('token');
        const tempuser= JSON.parse(localStorage.getItem('user'));
        if (savedtoken) {
            settoken(savedtoken);
            setuser(tempuser);
            setloading(false);
        }    
    },[]);

    return(
        <AuthContext.Provider value={{user,loading,setloading,login,logout,token}}>
          {children}
        </AuthContext.Provider>
    );


}