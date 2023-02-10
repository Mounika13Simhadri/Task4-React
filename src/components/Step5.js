import React from 'react'

export default function step5({visible}) {
    
  return (

      <div class="step5" id="step5">
       {visible===5?<>
            <img src="images/thankyou.jpg" alt="image6"  width="70px" height="70px"/>
            <h1>Thank You!</h1>
            <p>Thanks for confirming your subscription!We hope you have fun using our platform.
                If you ever need support, please feel free to email us at support@loremgaming.com
            </p>
            </>:""}
        </div>
  )
}
