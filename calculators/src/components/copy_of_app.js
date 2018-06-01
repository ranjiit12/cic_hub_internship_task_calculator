import React, { Component } from 'react';

var values= [];
var oldVlaue;
var newValue;
class App extends Component {
  constructor(props){
    super(props);
    this.onOperatorSelect = this.onOperatorSelect.bind(this);
    this.getOldValue        = this.getOldValue.bind(this);
  }
   onClicked(e) {
    e.preventDefault();
    var number = e.target.innerText;

    values.push(Number(number));
    var input = document.getElementById("input1");
     oldVlaue = input.value;
     newValue = oldVlaue+ number;
    input.value = newValue;
    }
    onOperatorSelect(e){
      var display = document.getElementById("display");
      e.preventDefault();
      var oldValue = this.getOldValue();
      var operator = e.target.innerText;
      switch(operator){
        case "Add": 

            oldValue
            //  if(! this.checkLastInput("+")){
            //     values.push("+");
            //     var input= document.getElementById("input1").value;
            //       input.value = oldValue+ "+";
            //     console.log(values);
            //     break;
            //  }
             break;
      return answer;
      case "Sub": 
            if(! this.checkLastInput("-")){
              values.push("-");
              var input= document.getElementById("input1").value;
              input.value = oldValue + "-";
              console.log(values);
              break;
            }
            break;
           
      return answer;
      case "Divide": 
      var answer = 1;
            if(! this.checkLastInput("/")){
              values.push("/");
              var input= document.getElementById("input1").value;
              input.value = oldValue + "/";
              break;
          }
          break;
      
      case "Multiply": 
          if(! this.checkLastInput("*")){
            values.push("*");
            var input= document.getElementById("input1").value;
            input.value = old+ "*";
            break;
        }
        break;
      }
      
    }
  checkLastInput(valueToCheck){
    var lastIndex = values.length -1;
    if(values[lastIndex] == valueToCheck){
         document.getElementById("error").innerHTML = "<h3>Can't have two operatoers together like - +</h3>";
         return false;
    }
  }  
  getOldValue (){
    var oldVlaue = document.getElementById("input1").value;
    return oldVlaue;
  }
  render() {
    return (
       <div>
           <form>
             <div id = "error"></div>
             <input type = "text" id  = "input1"/>
             <div>
               <button onClick = {this.onClicked}>1</button>
               <button onClick = {this.onClicked}>2</button>
               <button onClick = {this.onClicked}>3</button>
               <button onClick = {this.onClicked}>4</button>
               <button onClick = {this.onClicked}>5</button>
               <button onClick = {this.onClicked}>6</button>
               <button onClick = {this.onClicked}>7</button>
               <button onClick = {this.onClicked}>8</button>
               <button onClick = {this.onClicked}>9</button>
             </div>
             <div>
              <button onClick  = {this.onOperatorSelect}>Add</button>
               <button onClick = {this.onOperatorSelect}>Sub</button>
               <button onClick = {this.onOperatorSelect}>Divide</button>
               <button onClick = {this.onOperatorSelect}>Multiply</button>
             </div>
           </form>
           <div id  ="display">

           </div>
       </div>
    );
  }
}
export default App;
