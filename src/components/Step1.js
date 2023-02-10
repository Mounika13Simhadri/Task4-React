import React ,{useState}from 'react'



export default function Step1({setVisible,visible}) {

    const [values,setValues]=useState({name:"",email:"",phone:""});
    
    const submitInfo=(e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value,
      
          });
    }
    const Validate1=()=>{
        setVisible(2)

        if(values.name===""||values.email===""||values.phone==="")
        {
            alert("Fill the Values")
        }
        else{
            setVisible(2)
        }
    }
 
  return (
      <div className="step1" id="step1">
      {visible===1?<>  <h1>Personal info</h1>
         <h5>Please provide your name,email address, and phone number.</h5>
         <br/>
         <br/>
         <br/>
         <h2>Name</h2>
         <input autoFocus type="text" name="name"  id="txt1" placeholder="e.g. Stephen King" onChange={(e)=>submitInfo(e)}/>
         <br/>
         <br/>
         <h2>Email Address</h2>
         <input type="text" name="email"  id="txt2" placeholder="e.g. stephenKing@lorem.com"  onChange={(e)=>submitInfo(e)}/>
         <br/>
         <br/>
         <h2>Phone Number</h2>
         <input type="text" name="phone" id="txt3" placeholder="e.g. +1 234 567 890"  onChange={(e)=> submitInfo(e)}/>
         <br/>
         <br/>
         <button className="nb" id="nb1" onClick={()=>Validate1()}>Next Step</button>
      </>:""}
        </div>
  
  )
}
