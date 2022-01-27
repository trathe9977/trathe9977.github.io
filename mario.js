
let height = prompt("How high is the pyramid?");
let rows = height;

printPyramid(height);
// TODO #2
// Take in user input for the height


let str = '';
/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {


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

