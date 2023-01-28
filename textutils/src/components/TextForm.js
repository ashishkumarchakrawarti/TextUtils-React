import React, {useState} from "react";




export default function TextForm(props) {
const handleUpClick =()=>{
  // console.log("Upper case was clicked:" + text);
  let newText = text.toUpperCase();
  setText(newText)
  props.showAlert("Converted to uppercase","success");
}
const handleLoClick =()=>{
  // console.log("Upper case was clicked:" + text);
  let newText = text.toLowerCase();
  setText(newText)
  props.showAlert("Converted to lowercase","success");
}
const handleClearClick =()=>{
  // console.log("Upper case was clicked:" + text);
  let newText = '';
  setText(newText)
  props.showAlert("Text cleared","success"); 
}
const handleExtraSpaces =()=>{
  // console.log("Upper case was clicked:" + text);
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Removed Extra space","success");
}


const handleOnChange=(event)=>{
  // console.log("On Change");
  setText(event.target.value);
}

const handleCopy= () => {
  console.log("I am copy");
 var text =document.getElementById("myBox");
 text.select();
 text.setSelectionRange(0, 9999);
 navigator.clipboard.writeText(text.value);
 props.showAlert("Copied to clipboard","success");
}

  const [text, setText] = useState('');
//   text = "new text";  //wrong way to change state
//  setText("new text");   //Correct way to change state



 return (
    <>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Extra Space remover</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>


        
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split (" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split (" ").length} Minutes Read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the above text box to preview here"}</p>
    </div>
    </>
  );
}


