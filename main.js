function preload(){
    classifier = ml5.imageClassifier('DoodleNet')
}





function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function draw(){
    //set stroke weight to 13
    strokeWeight(13);
    // set stroke color to black
    stroke(0);
    // if mous e is pressed, deaw a line between previous and current mouse positions
    if (mouseIsPressed){
        line (pmouseX, pmouseY,mouseX,mouseY)
    }
}
function classifyCanvas(){
    classifier.classify(canvas,gotResult);
}


function clearcanvas(){
    background("white")
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
console.log(results);
document.getElementById('label').innerHTML = "label:" +results[0].label;

document.getElementById("confidence").innerHTML="cofidence:" + Math.round(results[0].confidence * 100)+'%';
utterThis = new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);








}
