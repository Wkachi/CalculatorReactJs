// import React from 'react';
import { useState } from 'react';
import './App.css';
import Button from './Component/Button';
import Input from './Component/Input';
import * as math from "mathjs";

function App({value}) {
  const [result, setResult] = useState("");
  const [text, setText] = useState("");

  const handleBtnClick = (val, symbol) => {
    let displayedText =  [...text, val];
    {
      
      setText( () => displayedText);
    }
    
  }

  const handleDelete = (val) => {
    let displayedText =  [...text, val];
    console.log(displayedText)

    setText( () => {displayedText.splice(-1, 0)})
  }

  // const handleDelete = (val) => {
  //   setText( () => text.splice(-1, 0))
  // }

  const handleCalculate = () => {
    let displayedText =  [...text];
    setResult( (val) => math.evaluate(displayedText.join('')))
    console.log("display")
  }

  const handleClear = () => {
    setText ('');
    setResult('');
  }

  // const handleBtnClick = () => {
  //   setText((e) => {e.target.value})
  // }
 

  return (
    <div className="App">
     <div className='calc-wrapper'>
     <Input Text = {text} Result = {result} />
     <Button value = {value} handleBtnClick = {handleBtnClick} HandleDelete = {handleDelete} 
     HandleCalculate = {handleCalculate} HandleClear = {handleClear}/>
     </div>
     
    </div>
  );
}

export default App;
