const Button = ({handleBtnClick, value, symbol, HandleDelete, HandleCalculate, HandleClear}) => {

    
    return ( 
         <div className="Btn">
            <div className="buttons-div">
            <div className="buttons" symbol= "9" onClick = { () => handleBtnClick("9")} >9</div>
            <div className="buttons" onClick = { () => handleBtnClick("8")}>8</div>
            <div className="buttons" onClick = { () => handleBtnClick("7")}>7</div>
            <div className="buttons" onClick = { () => handleBtnClick("/")} id="symbol">/</div>
            </div>
            <div className="buttons-div">
            <div className="buttons" onClick = { () => handleBtnClick("6")} >6</div>
            <div className="buttons" onClick = { () => handleBtnClick("5")}>5</div>
            <div className="buttons" onClick = { () => handleBtnClick("4")}>4</div>
            <div className="buttons" onClick = { () => handleBtnClick("*")} id="symbol">*</div>
            </div>
            <div className="buttons-div">
            <div className="buttons" onClick = { () => handleBtnClick("3")}>3</div>
            <div className="buttons" onClick = { () => handleBtnClick("2")}>2</div>
            <div className="buttons" onClick = { () => handleBtnClick("1")}>1</div>
            <div className="buttons" onClick = { () => handleBtnClick("-")}  id="symbol">-</div>
            </div>
            <div className="buttons-div">
            <div className="buttons" onClick = { () => handleBtnClick("0")}>0</div>
            <div className="buttons" onClick = { () => handleBtnClick(".")}>.</div>
            <div className="buttons" onClick = { () => HandleDelete()} id="del">Del</div>
            <div className="buttons" onClick = { () => handleBtnClick("+")} id="symbol" >+</div>
            </div>
            <div className="buttons-div">
            <div className="buttons-X"  id="equals" onClick = { () => HandleCalculate()} >=</div>
            <div className="buttons-C"  id="clear" onClick={() => HandleClear()}>C</div>
            
            </div>
        </div>
     );
}
 
export default Button;