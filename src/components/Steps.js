import React,{useState} from 'react'
import Step1 from './Step1.js'
 import Step2 from './Step2'
 import Step3 from './Step3.js'
 import Step4 from './Step4.js'
import Step5 from './Step5.js'
export default function Steps() {

  const[visible,setVisible]=useState(0)


      
  return (
    
  <div id="form1">
    <div className="steps" style={{backgroundImage: "url(images/side-bar.jpg)"}}>
      <div className="lst">
          <button className="circle1" id="circle1" onClick={()=>setVisible(1)}>1</button><label className="l1"><h4>STEP 1</h4><br/>YOUR INFO<br/><br/><br/><br/></label>
          <button className="circle2" id="circle2" onClick={()=>setVisible(2)}>2</button><label className="l2"><h4>STEP 2</h4><br/>SELECT PLAN<br/><br/><br/><br/></label>
         <button className="circle3" id="circle3" onClick={()=>setVisible(3)}>3</button><label className="l3"><h4>STEP 3</h4><br/>ADD-ONS<br/><br/><br/><br/></label>
          <button className="circle4" id="circle4" onClick={()=>setVisible(4)}>4</button><label className="l4"><h4>STEP 4</h4><br/>SUMMARY<br/><br/><br/><br/></label>
      </div>
      <Step1 visible={visible}setVisible={setVisible}/>
      <Step2 visible={visible}setVisible={setVisible}/>
      <Step3  visible={visible}setVisible={setVisible}/>
      <Step4 visible={visible}setVisible={setVisible}/>
      <Step5 visible={visible}setVisible={setVisible}/>
      
    </div>
  </div>
  )
}
