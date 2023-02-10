import React,{useState} from 'react'

export default function Step3({setVisible,visible}) {

   // const [plan2,setPlan2]= useState(false);
   const[plan,setPlan]=useState(0);
   const[isVisible,setIsVisible]=useState("m")

    
    const Calculate2=()=>{
      debugger
       let x=0;
       let y=0;
       let z=0;
       let m=false;
        
       debugger
        
        if(plan===2)
        {
            localStorage.setItem('l2',"Online Services");
            localStorage.setItem('r2',"+$1/mo");
            x=1;
            m=true;
      
        }
      
        else if(plan===5)
        {
            localStorage.setItem('l2',"Online Services");
            localStorage.setItem('r2',"+$10/Year");
            x=10;
        }
    

        if(plan===3)
        {
            localStorage.setItem('l3',"Larger Storage") ;
            localStorage.setItem('r3',"+$2/Month");
            z=2;
            m=true;
        }
        else if(plan===6)   {
            localStorage.setItem('l3',"Larger Storage");
            localStorage.setItem('r3',"+$20/Year");
            z=20;
        }
        if(plan===4)
        {
            localStorage.setItem('l4',"Customizable Profile");
            localStorage.setItem('r4',"+$2/Month");
            y=2;
            m=true;
        }
        else if(plan===7)
        {
            localStorage.setItem('l4',"Customizable Profile");
            localStorage.setItem('r4',"+$20/year");
            y=20;
        }
    
        let s=x+y+z;
        if(m===true){
            localStorage.setItem('total',s+"$/month");
        }
        else
        localStorage.setItem('total',s+"$/year");

      
      
      }
      const Validate3=(event)=>{
        event.preventDefault();
        if(plan!==0)
        {
            setVisible(4)
        }
        else{
              alert("select any one plan");
          } 
        Calculate2();
        
        }
      
          
  return (

      <div className="step3" id="step3">
        {visible===3?<>
            <h1>Pick add-ons</h1>
            <h6>Add-ons help enhance your gaming experience</h6>
            <br/>
            <br/>
            <div className="m3onthly" id="m3">
                <button className="b3" id="bm31"><input type="checkbox" id="mos" name="os"  onChange={ () =>{isVisible==="m"?setPlan(2):setPlan(5)}}/><label> Online Services</label>{isVisible==="m"?<label id="mylbl">+$1/mo</label>:<label id="mylbl">+$10/yr</label>}<br/><h6>Access to multiplayer games</h6><br/></button>
                <button className="b3" id="bm32"><input type="checkbox" id="mls" name="ls" onChange={ () => {isVisible==="m"?setPlan(3):setPlan(6)}}/><label>Large storage</label>{isVisible==="m"?<label id="mylbl">+$2/mo</label>:<label id="mylbl">+$20/yr</label>}<br/><h6>Extra 1TB of cloud save</h6><br/></button>
                <button className="b3" id="bm33"><input type="checkbox" id="mcp" name="cp" onChange={ () => {isVisible==="m"?setPlan(4):setPlan(7)}}/><label>Customizable profile</label>{isVisible==="m"?<label id="mylbl">+$2/mo</label>:<label id="mylbl">+$20/yr</label>}<br/><h6>custom theme on your profile</h6><br/></button>
                
            </div>
            
            <div className="toggle">
          <label id="month">Monthly</label><button id="t1"></button>
          {isVisible==="m"?<button id="t32" onClick={()=>setIsVisible("y")}></button>:""}
          {isVisible==="y"?<button id="t33" onClick={()=>setIsVisible("m")}></button>:""}
          <label id="year">Yearly</label>
        </div>
              
           
            <button className="pb" id="pb3" onClick={()=>setVisible(2)}>Go Back</button>
            <button className="nb" id="nb3" onClick={()=>Validate3()}>Next Step</button>
            </>:''}
        </div>

  )
}
