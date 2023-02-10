import React,{useState} from 'react'


export default function Step2({setVisible,visible}) {

  const [plan1,setPlan1]=useState(0);
  const[isVisible,setIsVisible]=useState("m")
 
 
  

  const Calculate1=()=>
  {
 
    switch(plan1){
      case 1:
        localStorage.setItem('L1',"Arcade(Monthly)");
        localStorage.setItem('R1',"$9/mo");
      break;
      case 2:
        localStorage.setItem('L1',"Advanced(Monthly)");
        localStorage.setItem('R1',"$12/mo");
      break;
      case 3:
        localStorage.setItem('L1', "Pro(Monthly)");
        localStorage.setItem('R1',"$15/mo");
      break;
      case 11:
        localStorage.setItem('L1',"Arcade(Yearly)");
        localStorage.setItem('R1',"$90/year");
      break;
      case 12:
        localStorage.setItem('L1',"Advanced(Yearly)");
        localStorage.setItem('R1',"$120/year");
      break;
      case 13:
        localStorage.setItem('L1',"Pro(Yearly)");
        localStorage.setItem('R1',"$150/year");
      break;
      default:
        break;
    };
  }
  
  const Validate2=()=>
  {
   
      if(plan1!==0)
      {
        Calculate1();
        setVisible(3)
     
      }   
      else
      {
      alert("Select any one plan!");
      }  
     
  } 
  


        
  return (
  
   <div className="step2" id="step2">
     {visible===2?<>
        <h1>Select your plan</h1>
        <h6>You have the option of monthly or yearly billing</h6>
        <br/>
        <br/>
       <div className="m2onthly" id="m2">
          <button autoFocus className="b" id="bm21"><img src="images/game1.jpg" alt="image1" /><br/><br/><b>Arcade<input type="checkbox" id="m21"  onChange={ () => {isVisible==="m"?setPlan1(1):setPlan1(11)}}/></b>{isVisible==="m"?<h6>$9/mo</h6>:<><h6>$90/yr</h6><h5>2months free</h5></>}</button>
          <button className="b" id="bm22"><img src="images/game2.png" alt="image2" /><br/><br/><b>Advanced<input type="checkbox" id="m22" onChange={() => {isVisible==="m"?setPlan1(2):setPlan1(12)}}/></b>{isVisible==="m"?<h6>$12/mo</h6>:<><h6>$120/yr</h6><h5>2months free</h5></>}</button>
          <button className="b" id="bm23"><img src="images/game3.jpg" alt="image3" /><br/><br/><b>Pro<input type="checkbox" id="m23"  onChange={() => {isVisible==="m"?setPlan1(3):setPlan1(13)}}/></b>{isVisible==="m"?<h6>$15/mo</h6>:<><h6>$150/yr</h6><h5>2months free</h5></>}</button>
        </div>
        <br/><br/><br/>
        <div className="toggle">
          <label id="month">Monthly</label><button id="t1"></button>
          {isVisible==="m"?<button id="t22" onClick={()=>setIsVisible("y")}></button>:""}
          {isVisible==="y"?<button id="t23" onClick={()=>setIsVisible("m")}></button>:""}
          <label id="year">Yearly</label>
        </div>
              
                
        <button className="pb" id="pb2" onClick={()=>setVisible(1)}>Go Back</button>
        <button className="nb" id="nb2" onClick={()=>Validate2()}>Next Step</button>
        </>:""} 
      </div> 
  )
}