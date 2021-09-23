var inputOne = "";
var inputTwo = "";
var firstInput = true;
var operation = "";
var calcText = "";
var False;
var percentage;

//Handle 1 button press
onEvent("button12", "click", function(event) {
  console.log("button12 clicked!");
  if (firstInput == true) {
    inputOne = inputOne + "1";
    setText("result",  inputOne);
  } else {
    inputTwo = inputTwo + "1";
    setText("result", calcText + inputTwo);
  }
});

//Handle 2 button press
onEvent("button16", "click", function(event) {
  console.log("oneButton clicked!");
  if (firstInput == true) {
    inputOne = inputOne + "2";
    setText("result", inputOne);
  } else {
    inputTwo = inputTwo + "2";
    setText("result", calcText + inputTwo);
  }
});
onEvent("button17", "click", function(event) {
  console.log("oneButton clicked!");
  if (firstInput == true) {
    inputOne = inputOne + "3";
    setText("result", inputOne);
  } else {
    inputTwo = inputTwo + "3";
    setText("result", calcText + inputTwo);
  }
});
onEvent("button15", "click", function(event) {
  console.log("oneButton clicked!");
  if (firstInput == true) {
    inputOne = inputOne + "4";
    setText("result", inputOne);
  } else {
    inputTwo = inputTwo + "4";
    setText("result", calcText + inputTwo);
  }
});
onEvent("button14", "click", function(event) {
  console.log("oneButton clicked!");
  if (firstInput == true) {
    inputOne = inputOne + "5";
    setText("result", inputOne);
  } else {
    inputTwo = inputTwo + "5";
    setText("result", calcText + inputTwo);
  }
});
onEvent("button13", "click", function(event) {
  console.log("oneButton clicked!");
  if (firstInput == true) {
    inputOne = inputOne + "6";
    setText("result", inputOne);
  } else {
    inputTwo = inputTwo + "6";
    setText("result", calcText + inputTwo);
  }
});
onEvent("7", "click", function(event) {
  console.log("oneButton clicked!");
  if (firstInput == true) {
    inputOne = inputOne + "7";
    setText("result", inputOne);
  } else {
    inputTwo = inputTwo + "7";
    setText("result", calcText + inputTwo);
  }
});
onEvent("button10", "click", function(event) {
  console.log("oneButton clicked!");
  if (firstInput == true) {
    inputOne = inputOne + "8";
    setText("result", inputOne);
  } else {
    inputTwo = inputTwo + "8";
    setText("result", calcText + inputTwo);
  }
});
onEvent("button11", "click", function(event) {
  console.log("oneButton clicked!");
  if (firstInput == true) {
    inputOne = inputOne + "9";
    setText("result", inputOne);
  } else {
    inputTwo = inputTwo + "9";
    setText("result", calcText + inputTwo);
  }
});
onEvent("0", "click", function(event) {
  console.log("oneButton clicked!");
  if (firstInput == true) {
    inputOne = inputOne + "0";
    setText("result", inputOne);
  } else {
    inputTwo = inputTwo + "0";
    setText("result", calcText + inputTwo);
  }
});

/*The plus button is clicked, set the operation to addition
toggle the input from inputOne to inputTwo
*/
onEvent("button18", "click", function(event) {
  console.log("plusButton clicked!");
  firstInput = false;
  operation = "add"
  calcText = inputOne + " + ";
  
  setText("result", calcText);
});
onEvent("button21", "click", function(event) {
  console.log("minusButton clicked!");
  firstInput = false;
  operation = "subtract";
  calcText = inputOne + " - ";
  setText("result", calcText);
});
onEvent("button19", "click", function(event) {
  console.log("divideButton clicked!");
  firstInput = false;
  operation = "divide";
  calcText = inputOne + " / ";
  setText("result", calcText);
});
onEvent("button20", "click", function(event) {
  console.log("multiplyButton clicked!");
  firstInput = false;
  operation = "multiply";
  calcText = inputOne + " * ";
  setText("result", calcText);
});
onEvent("%", "click", function(event) {
  console.log("percsntage clicked");
  firstInput = False;
  operation = percentage;
  calcText = inputOne + "%";
  setText("result", "%");
});
/*
After values have been set, calculate the output
*/
onEvent("button24", "click", function(event) {
  console.log("equalButton clicked!");
  var value1 = parseInt(inputOne);
  var value2 = parseInt(inputTwo);
  var result;
  if(operation === "add") {
      result = value1 + value2;
  }
  
  if(operation === "subtract") 
      result = value1 - value2;
      
  if (operation == "percentage") {
    result = value1 + value2;
  }
  if(operation === "divide") 
      result = value1 / value2;
  if (value2 == 0) {
    result = "Error";
    result = value1 % value2;
  }
    ;

      
  if(operation === "multiply") 
      result = value1 * value2;

  //update calculator text
  var finalCalcText = getText("result") + " = " + result;
  setText("result", finalCalcText);
  }
);


//Clear screen and reset values
onEvent("C", "click", function(event) {
  console.log("button18 clicked!");
  setText("result", "");
  inputOne = "";
  inputTwo = "";
  firstInput = true;
  
});
