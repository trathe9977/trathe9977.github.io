
document.getElementById("pHeight").addEventListener("input", determineHeightAndThenDrawPyramid);




function determineHeightAndThenDrawPyramid() {

  rows = document.getElementById("pHeight").value; 
  brick = document.getElementById('symbols').value;

  printPyramid();

}

function printPyramid(pHeight) {
  
  document.getElementById("pyramid").innerHTML = "";

  for(let i=0; i<rows; i++) {  //outer loop
    
    let str = '';
    for(let k = 2; k <= rows - i; k++){
       str += '.';
     }

    for(let j=0; j<=i+1; j++) {//inner loop

    str += brick; //this adds a # to the end of the string.

    }
    
    let rowStr = document.createElement("p");
    rowStr.innerHTML = str;
    document.getElementById("pyramid").appendChild(rowStr);
  

  }

}

