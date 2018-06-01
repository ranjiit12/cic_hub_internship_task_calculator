import React, { Component } from 'react';
import "../css/main.css";
var values = [];
var firstInput;
var secondInput;
var operator;
class App extends Component {
  constructor(props){
    super(props)
  }
   onClicked(e) {
    e.preventDefault();
    var number = e.target.value;

    values.push(Number(number));
    var input = document.getElementById("input1");
    var oldVlaue = input.value;
    var newValue = oldVlaue+ number;
    input.value = newValue;
    if(firstInput){
        secondInput = newValue;
    }
    
    }
    onOperatorSelect(e){
      e.preventDefault();
      var operatorSelected = e.target.value;
      switch(operatorSelected){
        case "Add": 
                console.log("add");
                var input = document.getElementById("input1");
                console.log(input)
                firstInput = input.value;
                input.value = "";
                operator = "+";
                break;
      //        var answer = 0;
      //        values.forEach(item => {
      //            answer =answer+item;
      //        });
      // display.innerHTML = "<h3> The answer is: "+ answer +" </h3>" 
      case "Sub": 
      var input = document.getElementById("input1");
      firstInput = input.value;
      input.value = "";
      operator = "-";
      break;
      case "Devide": 
      var input = document.getElementById("input1");
      firstInput = input.value;
      input.value = "";
      operator = "/";
      break;   
      case "Multiply": 
      var input = document.getElementById("input1");
      firstInput = input.value;
      input.value = "";
      operator = "*";
      break;
    
    }
      
    }
  evaluateValue (e){
    e.preventDefault();
    console.log("called");
    console.log(operator);
     switch(operator){
       case "+":
            var answer =Number(firstInput)+Number(secondInput);
            document.getElementById("input1").value = answer;
            console.log(answer)
            break;
      case "-":
            document.getElementById("input1").value = Number(firstInput)-Number(secondInput);
            break;
      case "/":
            document.getElementById("input1").value = Number(firstInput)/Number(secondInput);
            break;
      case "*":
            document.getElementById("input1").value = (Number(firstInput)*Number(secondInput));
            break;
     }
  }  

  clearValues(e){
    e.preventDefault();
    operator = "";
    firstInput = "";
    secondInput ="";
    document.getElementById("input1").value ="";
  }
  render() {
    return (
       <div>
           <form>
           <div className="header">
                <input name="1" disabled id ="input1" />
          </div>
             <div className="numberFields">
                <input type="button" onClick = {this.onClicked} name="1" value="1" />
                <input type="button" onClick = {this.onClicked} name="2" value="2" />
                <input type="button" onClick = {this.onClicked} name="3" value="3" />
                <input type="button" onClick = {this.onClicked} name="4" value="4" />
                <input type="button" onClick = {this.onClicked} name="5" value="5" />
                <input type="button" onClick = {this.onClicked} name="6" value="6" />
                <input type="button" onClick = {this.onClicked} name="7" value="7" />
                <input type="button" onClick = {this.onClicked} name="8" value="8" />
                <input type="button" onClick = {this.onClicked} name="9" value="9" />
                <input type="button" onClick = {this.onClicked} name="0" value="0" />
             </div>
            
             <div className="operations">
                  <input type="button" onClick = {this.clearValues}  name="c" value="c" />
                  <input type="button" onClick  = {this.onOperatorSelect}  name="+" value="Add" />
                  <input type="button" onClick  = {this.onOperatorSelect} name="-" value="Sub" />
                  <input type="button" onClick  = {this.onOperatorSelect} name="*" value="Multiply" />
                  <input type="button" onClick  = {this.onOperatorSelect} name="/" value="Devide" />
             </div>
           </form>
           <div className="sum">
              <input type="button" name="=" value="="  onClick = {this.evaluateValue} />
          </div>
       </div>
    );
  }
}
export default App;
