import React from 'react'

export default function Step4({setVisible,visible}) {
    
  return (
    <div>
      <div className="step4" id="step4">
      {visible===4?<>
        <h1>Finishing up</h1>
        <h6>Double-check everything looks OK before confirming.</h6>
        <br/>
        <div className="mdetails" id="mdetails">
            <p id="p1">
                <input type="text" id="l1" defaultValue={localStorage.getItem('L1')}/><input type="text" id="r1" defaultValue={localStorage.getItem('R1')}/>
            </p>
        
            <br/>
            <hr/>
            <p id="p2">
                <input type="text" id="l2" defaultValue={localStorage.getItem('l2')}/><input type="text" id="r2" defaultValue={localStorage.getItem('r2')}/>
            </p>
            <p id="p3">
                <input type="text" id="l3" defaultValue={localStorage.getItem('l3')}/><input type="text" id="r3" defaultValue={localStorage.getItem('r3')}/>
            </p>
            
            <p id="p4">
                <input type="text" id="l4" defaultValue={localStorage.getItem('l4')}/><input type="text" id="r4" defaultValue={localStorage.getItem('r4')}/>
            </p>
            <br/>
            <br/>
            <br/>
            <br/>
            <h3>Total(per month)&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="total" defaultValue={localStorage.getItem('total')}/></h3>
        </div>
           
            
        <button className="pb" id="pb4" onClick={()=>setVisible(3)}>Go Back</button>
        <button id="nbc" onClick={()=>setVisible(5)}>Confirm</button>
        </>:""}
    </div>
    </div>
  )
}
