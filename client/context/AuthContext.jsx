import { Frown, LogIn } from "lucide-react";
import { useState,useEffect,createContext } from "react";
import {  useNavigate } from "react-router-dom";


export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const navigate=useNavigate();
    const [user,setuser]=useState(null);
    const [loading,setloading]=useState(true);
    const [token,settoken]=useState("");
    const login=(userdetail,token)=>{
        setuser(userdetail);
        localStorage.setItem('token',token);
        localStorage.setItem('user',JSON.stringify(userdetail));
        settoken(token);
    }


    
 async function updatefullprofile(userdata){
  
        try {
            const res = await fetch("http://localhost:5000/user/update-profile",
                {
                    method: "Put",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify(
                        {
                          ...userdata
                        }
                    )

                }
            );

            const data = await res.json();

            console.log("full profole was updated ");
            console.log(data);
            localStorage.setItem('user', JSON.stringify(data.messege));
            setuser(data.messege);
        } catch (error) {
            console.log(error);
        }
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
        <AuthContext.Provider value={{user,updatefullprofile,setuser,loading,setloading,login,logout,token}}>
          {children}
        </AuthContext.Provider>
    );


}