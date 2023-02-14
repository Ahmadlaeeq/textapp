import { useState } from "react";

function Textbox(){
    let [text,setText]=useState("Write Something...");
    const toUpCase=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const textData=(event)=>{
        setText(event.target.value)
    }
    const toLoCase=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    return(
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Analyse text here</label>
  <textarea className="form-control" onChange={textData} value={text} id="exampleFormControlTextarea1" rows="6"></textarea>
  <button className="btn btn-primary my-2" onClick={toUpCase}>Upper Case</button>
  <button className="btn btn-primary my-2 mx-3" onClick={toLoCase}>Lower Case</button>
</div>
    )
}
export default Textbox;