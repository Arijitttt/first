import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked "+text);
        let newText=text.toUpperCase();
        setText(newText) ;
    }
    const handleOnChange =(event)=>{
        console.log("Uppercase was clicked");
        setText(event.target.value);
        
    }
    const [text,setText]=useState('Enter text here');
    //text="new text"//wrong way to change the state
    //setText("New Text");//correct way to change the state
    return (
        <>
            
                <h1>{props.heading}</h1>
            
            
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>
                Convert to UpperCase 
            </button>
        </>
    )
}
