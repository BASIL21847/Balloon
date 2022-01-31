var input,heading;


function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);
  input=createInput()
  input.position(200,100)
 
}

function draw() {
x=input.value()
  console.log(x)
  switch(x){
    case "a" : console.log("vowel")
    break;
    case "e":console.log("vowel")
    break;
    case "i":console.log("vowel")
    break;
    case "o":console.log("vowel")
    break;
    case "u":console.log("vowel")
    break;
   
}
}
