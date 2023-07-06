import React,{useState} from 'react';

const propTypes = {};

const defaultProps = {};
const Textform = (props) => {
 
  const handleOnClick=()=>{
 var newText=text.toUpperCase();
 setText(newText);
 props.showAlert("Converted to Uppercase","Success");
  }

  const handleOnChange=(event)=>
  {
    setText(event.target.value);
  }
  const clearOnClick=()=>{
    let newText='';
    setText(newText);
    props.showAlert("cleared textarea","success")
  }
  const copyOnClick=()=>
  {
    
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied","success")
  }
const removeSpaceOnClick=()=>
{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra spaces removed","success")

}
  let [text, setText] = useState('');
    return <div>
      
<div className=" container mb-3" style={{color:props.mode==='dark'?'white':'black'}}> 
  <h1 className='mb-3'>{props.heading}</h1>

  <h3 className='mb-3'>Word Counter |Character Counter| Remove Extra Spaces | Copy Text | Lowercase to Uppercase</h3>
  <textarea className="form-control mx-1 my-1" value={text} onChange={handleOnChange} style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'rgb(5 50 34)':'white'}} id="myBox" rows="10"></textarea>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnClick} style={{color:props.mode==='dark'?'white':'black'}}>Convert to Upper case</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearOnClick}style={{color:props.mode==='dark'?'white':'black'}} >Clear text</button>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyOnClick} style={{color:props.mode==='dark'?'white':'black'}}>Copy text</button>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={removeSpaceOnClick} style={{color:props.mode==='dark'?'white':'black'}}>Remove extra space</button>
</div>

<h2 style={{color:props.mode==='dark'?'white':'black'}}>project summary</h2>
<p style={{color:props.mode==='dark'?'white':'black'}}>{text.split(/\s+/).filter((element)=>{return element.length!== 0}).length}word and {text.length} characters</p>
<h2 style={{color:props.mode==='dark'?'white':'black'}}>Preview</h2>
<p style={{color:props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Nothing to preview"}</p>
    </div>;
    
    
}

Textform.propTypes = propTypes;
Textform.defaultProps = defaultProps;
// #endregion

export default Textform;