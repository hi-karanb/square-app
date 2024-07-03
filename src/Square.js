import { useState, useRef } from "react";
function Square(){
    
   const [num, setNum] = useState(""); 
   const [ans, setAns] = useState("");

   const hNum = (event) => { setNum(event.target.value);}
   const rNum = useRef(); 

   const find =(event)=>{
           event.preventDefault();
           if(num==""){
               alert("input is empty");
               setAns("");
               rNum.current.focus();
               return;
           }

           let n = parseFloat(num);
           let r = n * n;
           let r1 = r.toFixed(2);
           let msg = "Square ="+ r1;
           setAns(msg);
   }
    
   return(
       <>
       <center>
       <h1>Square App</h1>
       <form onSubmit={find}>
        <input type ="number" step="any" placeholder="enter any number" onChange={hNum} ref={rNum}/>
        <br></br>
        <input type= "submit" value="find square"/>
        </form>
        <h2>{ ans }</h2>
        </center>
        </>

);


       
} 
export default Square;