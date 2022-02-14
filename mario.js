
let clicker = document.getElementById("drawIt");
clicker.addEventListener("click", determineHeightAndThenDrawPyramid);

function determineHeightAndThenDrawPyramid() {

  rows = document.getElementById("height").value; 

  printPyramid();

}

function printPyramid(height) {
  document.getElementById("pyramid").innerHTML = "";

  for(let i=0; i<rows; i++) {  //outer loop
    
    let str = '';
      for(let k = 2; k <= rows - i; k++){
       str += '.';
      }

      for(let j=0; j<=i+1; j++) {//inner loop
      str += "#"; //this adds a # to the end of the string.

      }
    
    let rowStr = document.createElement("p");
    rowStr.innerHTML = str;
    document.getElementById("pyramid").appendChild(rowStr);
  
  

    // TODO #1
    // print that pyramid!
  }

}

