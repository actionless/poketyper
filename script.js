var type1 = "None";
var type2 = "None";
var typeArray = new Array("Bug", "Dark", "Dragon", "Electric", "Fight", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water");
var ResultArray = new Array();
var RemixArray = new Array();
var Output = "";

function initialize(){
    // 1. Fill remix with 1's
    RemixArray.length = 17;
    for ( var i=0, len=RemixArray.length; i<len; ++i ) {
        RemixArray[i] = 1;
    }
    // 2. Fill the Arrays
    fillArrays();
    addOne();

    var nodeList = document.querySelectorAll("#type1 button");
    for (var i = 0, length = nodeList.length; i < length; i++) {
        nodeList[i].addEventListener("click", addOneType1);
    }

    nodeList = document.querySelectorAll("#type2 button");
    for (var i = 0, length = nodeList.length; i < length; i++) {
        nodeList[i].addEventListener("click", addOneType2);
    }
}

window.addEventListener("load", initialize);

// 3. Reacts to Button Press
function addOne() {

    findWeak(type1);

    findWeak(type2);

    var i=0;

    for (i=0;i<17;i++) {

        if(ResultArray[i]==0.5) {
            Output = Output + "<font color = '#dcd38e'>" +typeArray[i] + " does x"  + ResultArray[i] + " Damage</font><br>";
        } else if(ResultArray[i]==0.25) {
            Output = Output + "<font color = '#dc8e8e'>" +typeArray[i] + " does x"  + ResultArray[i] + " Damage</font><br>";
        } else if(ResultArray[i]==4.00) {
            Output = Output + "<font color = '#00c8d4'>" +typeArray[i] + " does x"  + ResultArray[i] + " Damage</font><br>";
        } else if(ResultArray[i]==2.00) {
            Output = Output + "<font color = '#00d402'>" +typeArray[i] + " does x"  + ResultArray[i] + " Damage</font><br>";
        } else if(ResultArray[i]==0) {
            Output = Output + "<font color = '#c88edc'>" +typeArray[i] + " does x"  + ResultArray[i] + " Damage</font><br>";
        } else {
            Output = Output + "<font color = '#4a3551'>" +typeArray[i] + " does x"  + ResultArray[i] + " Damage</font><br>";
        }

    }

    document.getElementById("demo").innerHTML= Output;

    Output = "";
    fillArrays();

}

function clearSelection(className){
    var nodeList = document.querySelectorAll("."+className);
    for (var i = 0, length = nodeList.length; i < length; i++) {
        nodeList[i].className = nodeList[i].className.replace(" "+className,'');
    }
}

function addOneType1(){
    type1=this.className;
    clearSelection("active1");
    this.className += " active1";
    addOne();
}

function addOneType2(){
    type2=this.className;
    clearSelection("active2");
    this.className += " active2";
    addOne();
}

//Empties Result and Remix
function fillArrays() {

    ResultArray = RemixArray;

    for ( var i=0, len=RemixArray.length; i<len; ++i ) {
        RemixArray[i] = 1;
    }

}

//Modifies an Array according to the Rules of Weakness
function findWeak(type) {

    if (type == 'Bug') {

        ResultArray[4]*= 0.5;
        ResultArray[5]*= 2.0;
        ResultArray[6]*= 2.0;
        ResultArray[8]*= 0.5;
        ResultArray[9]*= 0.5;
        ResultArray[14]*= 2.0;

    }

    if (type == 'Dark') {
        ResultArray[0]*= 2.0;
        ResultArray[1]*= 0.5;
        ResultArray[4]*= 2.0;
        ResultArray[7]*= 0.5;
        ResultArray[13]*= 0.0;
    }

    if (type == 'Dragon') {
        ResultArray[2]*= 2.0;
        ResultArray[3]*= 0.5;
        ResultArray[5]*= 0.5;
        ResultArray[8]*= 0.5;
        ResultArray[10]*= 2.0;
        ResultArray[16]*= 0.5;
    }

    if (type == 'Electric') {
        ResultArray[3]*= 0.5;
        ResultArray[6]*= 0.5;
        ResultArray[9]*= 2.0;
        ResultArray[15]*= 0.5;
    }
    if (type == 'Fight') {
        ResultArray[0]*= 0.5;
        ResultArray[1]*= 0.5;
        ResultArray[6]*= 2.0;
        ResultArray[13]*= 2.0;
        ResultArray[14]*= 0.5;
    }

    if (type == 'Fire') {
        ResultArray[0]*= 0.5;
        ResultArray[5]*= 0.5;
        ResultArray[8]*= 0.5;
        ResultArray[9]*= 2.0;
        ResultArray[10]*= 0.5;
        ResultArray[14]*= 2.0;
        ResultArray[15]*= 0.5;
        ResultArray[16]*= 2.0;
    }

    if (type == 'Flying') {
        ResultArray[0]*= 0.5;
        ResultArray[3]*=2.0;
        ResultArray[4]*= 0.5;
        ResultArray[8]*= 0.5;
        ResultArray[9]*= 0.0;
        ResultArray[10]*= 2.0;
        ResultArray[14]*= 2.0;
    }

    if (type == 'Ghost') {
        ResultArray[0]*= 0.5;
        ResultArray[1]*= 2.0;
        ResultArray[4]*= 0.0;
        ResultArray[7]*= 2.0;
        ResultArray[11]*= 0.0;
        ResultArray[12]*= 0.5;
    }

    if (type == 'Grass') {
        ResultArray[0]*= 2.0;
        ResultArray[3]*= 0.5;
        ResultArray[5]*= 2.0;
        ResultArray[6]*= 2.0;
        ResultArray[8]*= 0.5;
        ResultArray[9]*= 0.5;
        ResultArray[10]*= 2.0;
        ResultArray[12]*= 2.0;
        ResultArray[16]*= 0.5;
    }

    if (type == 'Ground') {
        ResultArray[3]*= 0.0;
        ResultArray[8]*= 2.0;
        ResultArray[10]*= 2.0;
        ResultArray[12]*= 0.5;
        ResultArray[14]*= 0.5;
        ResultArray[16]*= 2.0;
    }

    if (type == 'Ice') {
        ResultArray[4]*= 2.0;
        ResultArray[5]*= 2.0;
        ResultArray[10]*= 0.5;
        ResultArray[12]*= 0.5;
        ResultArray[14]*= 2.0;
        ResultArray[15]*= 2.0;
    }

    if (type == 'Normal') {
        ResultArray[4]*= 2.0;
        ResultArray[7]*= 0.0;
    }

    if (type == 'Poison') {
        ResultArray[0]*= 0.5;
        ResultArray[4]*= 0.5;
        ResultArray[8]*= 0.5;
        ResultArray[9]*= 2.0;
        ResultArray[12]*= 0.5;
        ResultArray[13]*= 2.0;
    }

    if (type == 'Psychic') {
        ResultArray[0]*= 2.0;
        ResultArray[1]*= 2.0;
        ResultArray[4]*= 0.5;
        ResultArray[7]*= 2.0;
        ResultArray[13]*= 0.5;
    }

    if (type == 'Rock') {
        ResultArray[4]*= 2.0;
        ResultArray[5]*= 0.5;
        ResultArray[6]*= 0.5;
        ResultArray[8]*= 2.0;
        ResultArray[9]*= 2.0;
        ResultArray[11]*= 0.5;
        ResultArray[12]*= 0.5;
        ResultArray[15]*= 2.0;
        ResultArray[16]*= 2.0;
    }

    if (type == 'Steel') {
        ResultArray[0]*= 0.5;
        ResultArray[1]*= 0.5;
        ResultArray[2]*= 0.5;
        ResultArray[4]*= 2.0;
        ResultArray[5]*= 2.0;
        ResultArray[6]*= 0.5;
        ResultArray[7]*= 0.5;
        ResultArray[8]*= 0.5;
        ResultArray[9]*= 2.0;
        ResultArray[10]*= 0.5;
        ResultArray[11]*= 0.5;
        ResultArray[12]*= 0.0;
        ResultArray[13]*= 0.5;
        ResultArray[14]*= 0.5;
        ResultArray[15]*= 0.5;
    }

    if (type == 'Water') {
        ResultArray[3]*= 2.0;
        ResultArray[5]*= 0.5;
        ResultArray[8]*= 2.0;
        ResultArray[10]*= 0.5;
        ResultArray[15]*= 0.5;
        ResultArray[16]*= 0.5;
    }

}