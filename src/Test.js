import { useState } from "react";

const Test = () => {
const [text,setText]=useState('GOOGLE');
const [color,setColor]=useState('btn btn-success');
const change=()=>
{setText(text==='GOOGLE'?'YAHOO':"GOOGLE",setColor(color==='btn btn-primary'?"btn btn-success ":'btn btn-primary'))};
   return (
    <div>
      <h1>{text} </h1>

      <button  onClick={change}> change </button>      <br />

      <input type='text' className={color} />

    </div>
  );
};
export default Test;
