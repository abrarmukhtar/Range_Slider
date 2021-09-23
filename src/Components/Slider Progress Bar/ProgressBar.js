import React, { useState } from "react";

import RangeSlider from "react-bootstrap-range-slider";

export default function ProgressBar(props) {

  const [sumOf, setSumOf] = useState(0)


  const comperisons = (e) => {


    let Sum1 =
    parseInt(props.per1) + parseInt(props.per2) + parseInt(props.per3);
   
    let xtraNum = 0;
    let xtraNum2 = 0;
    

    if (Sum1 > 100) {
      
      if (Sum1 % 2 == 1) {
         xtraNum = 0;
     xtraNum2 = 0;
        xtraNum = Math.ceil(Math.round((Sum1 - 100) / 2)); // this return with minimum
       
          xtraNum2 = xtraNum - 1;
       
      } else {
        xtraNum = 0;
        xtraNum2 = 0;
        xtraNum = Math.ceil(Math.round((Sum1 - 100) / 2)); // this return with minimum
       
        xtraNum2 = xtraNum;
        
      }
    } else {
      
      xtraNum = 0;
      xtraNum2 = 0;

      if (Sum1 % 2 == 1) {
        xtraNum = 0;
      xtraNum2 = 0;
        xtraNum = Math.ceil(Math.round((100 - Sum1) / 2)); // this return with minimum
        
        xtraNum2 = xtraNum - 1;
       
      } else {
        xtraNum = 0;
      xtraNum2 = 0;
        xtraNum = Math.ceil(Math.round((100 - Sum1) / 2)); // this return with minimum
    
        xtraNum2 = xtraNum;
       
      }
    }

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    //this is code working on Greater than 100
    switch (e.target.name) {
      case "l1":
        if (Sum1 > 100) {



          p2 = parseInt(props.per2) - parseInt(xtraNum);
          p3 = parseInt(props.per3) - parseInt(xtraNum2);

          if (p3 < 0) {
            p2 =p2  + p3;
            p3 = 0;
          }

          if (p2 < 0) {
            p3 = p3 + p2;
            p2 = 0;
          }
          props.changeFn2(p2);
          props.changeFn3(p3);
          p1 = 0;
          p2 = 0;
          p3 = 0;
        } else {

          p2 =parseInt(props.per2) + parseInt(xtraNum);
          p3 =parseInt(props.per3) + parseInt(xtraNum2);

          if (p3 < 0) {
            p2 = p2 + p3;
            p3 = 0;
          }

          if (p2 < 0) {
            p3 = p3 + p2;
            p2 = 0;
          }


          props.changeFn2(p2);
          props.changeFn3(p3);
          p1 = 0;
          p2 = 0;
          p3 = 0;
        }
        break;
      case "l2":
        if (Sum1 > 100) {


          p1 = parseInt(props.per1) - parseInt(xtraNum);
          p3 = parseInt(props.per3) - parseInt(xtraNum2);

          if (p3 < 0) {
            p1 = p1 + p3;
            p3 = 0;
          }

          if (p1 < 0) {
            p3 = p3 + p1;
            p1 = 0;
          }

          props.changeFn1(p1);
          props.changeFn3(p3);
          p1 = 0;
          p2 = 0;
          p3 = 0;
        } else {

          p1 = parseInt(props.per1) + parseInt(xtraNum);
          p3 = parseInt(props.per3) + parseInt(xtraNum2);

          if (p3 < 0) {
            p1 = p1 + p3;
            p3 = 0;
          }

          if (p1 < 0) {
            p3 = p3 + p1;
            p1 = 0;
          }

          props.changeFn1(p1);
          props.changeFn3(p3);
          p1 = 0;
          p2 = 0;
          p3 = 0;
        }
        break;
      case "l3":
        if (Sum1 > 100) {

          p1 = parseInt(props.per1) - parseInt(xtraNum);
          p2 = parseInt(props.per2) - parseInt(xtraNum2);

          if (p2 < 0) {
            p1 = p1 + p2;
            p2 = 0;
          }

          if (p1 < 0) {
            p2 = p2 + p1;
            p1 = 0;
          }
        
          props.changeFn1(p1);
          props.changeFn2(p2);
          p1 = 0;
          p2 = 0;
          p3 = 0;
        } else {
        
          p1 = parseInt(props.per1) + parseInt(xtraNum);
          p2 = parseInt(props.per2) + parseInt(xtraNum2);

          if (p2 < 0) {
            p1 = p1 + p2;
            p2 = 0;
          }

          if (p1 < 0) {
            p2 = p2 + p1;
            p1 = 0;
          }
        
        
          props.changeFn1(p1);
          props.changeFn2(p2);
          p1 = 0;
          p2 = 0;
          p3 = 0;
        }
        break;
      default:
        console.log("nothing matched");
    }
  };

  return (
    <div className="progress-Bar">
      <div >

      <RangeSlider
        name="l1"
        value={props.per1}
        onChange={(e) => props.changeFn1(e.target.value)}
        onAfterChange={comperisons}
        onKeyUp={comperisons}
        />
        
        <p className="progress-per">  {`%${props.per1}`} </p>
        </div>
        <div className="progress-per">

      <RangeSlider
        name="l2"
        value={props.per2}
        onChange={(e) => props.changeFn2(e.target.value)}
        // onKeyUp={(e) => props.changeFn2(e.target.value)}
        onAfterChange={comperisons}
        onKeyUp={comperisons}
        />
        <p className="progress-per">  {`%${props.per2}`} </p>
        </div>
      
        <div>

      <RangeSlider
        name="l3"
        value={props.per3}
        onChange={(e) => props.changeFn3(e.target.value)}
        // onKeyUp={(e) => props.changeFn3(e.target.value)}
        onAfterChange={comperisons}
        onKeyUp={comperisons}
        />
        <p className="progress-per">  {`%${props.per3}`} </p>
        </div>

    
    </div>
  );
}
