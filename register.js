import React, { useEffect, useState } from 'react';

export default function Form(){
const[name,setname]=useState("");
const[email,setemail]=useState("");
const[password,setpassword]=useState("");
const[copassword,setcopassword]=useState("");
const[submit,setdsubmit]=useState(false);

const handlename=(e)=>{
  setname(e.target.value);

}
const handleemail=(e)=>{
  setemail(e.target.value)
}
const handelpassword=(e)=>{
  setpassword(e.target.value)
}
const handelcopassword=(e)=>{
  setcopassword(e.target.value)
}
const handelsubmit=(e)=>{
  setdsubmit(e.target.value)
  if (name===''||email===''||password===''||) {
    
  }
}

}