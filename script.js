var type1 = "None";
var type2 = "None";
var typeKeys = {
  "Bug": 0,
  "Dark": 1,
  "Dragon": 2,
  "Electric": 3,
  "Fight": 4,
  "Fire": 5,
  "Flying": 6,
  "Ghost": 7,
  "Grass": 8,
  "Ground": 9,
  "Ice": 10,
  "Normal": 11,
  "Poison": 12,
  "Psychic": 13,
  "Rock": 14,
  "Steel": 15,
  "Water": 16,
  "Fairy": 17,
};
var ResultArray = [];
var RemixArray = [];
var Output = "";

function initialize() {
    // 1. Fill remix with 1's
    "use strict";
    RemixArray.length = Object.keys(typeKeys).length;
    for (var i=0, len=RemixArray.length; i<len; ++i ) {
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
    var typeArray = Object.keys(typeKeys);

    findWeak(type1);

    findWeak(type2);

    var i=0;

    for (i=0;i<ResultArray.length;i++) {

        if(ResultArray[i]==0.5) {
            Output = Output + "<span class='x05 typename'>" +typeArray[i] + " </span><span class='x05'>x"  + ResultArray[i] + "</span><br>";
        } else if(ResultArray[i]==0.25) {
            Output = Output + "<span class='x025 typename'>" +typeArray[i] + " </span><span class='x025'>x"  + ResultArray[i] + "</span><br>";
        } else if(ResultArray[i]==4.00) {
            Output = Output + "<span class='x4 typename'>" +typeArray[i] + " </span><span class='x4'>x"  + ResultArray[i] + "</span><br>";
        } else if(ResultArray[i]==2.00) {
            Output = Output + "<span class='x2 typename'>" +typeArray[i] + " </span><span class='x2'>x"  + ResultArray[i] + "</span><br>";
        } else if(ResultArray[i]==0) {
            Output = Output + "<span class='x0 typename'>" +typeArray[i] + " </span><span class='x0'>x"  + ResultArray[i] + "</span><br>";
        } else {
            Output = Output + "<span class='x1 typename'>" +typeArray[i] + " </span><span class='x1'>x"  + ResultArray[i] + "</span><br>";
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
    clearSelection("active1");
    type1=this.className;
    this.className += " active1";
    
    var bg_div=document.querySelector(".background."+type1);
    bg_div.className += " active1";
    
    addOne();
}

function addOneType2(){
    clearSelection("active2");
    type2=this.className;
    this.className += " active2";
    
    var bg_div=document.querySelector(".background."+type2);
    bg_div.className += " active2";
    
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
    var t = typeKeys;

    if (type == 'Bug') {

        ResultArray[t["Fight"]]*= 0.5;
        ResultArray[t["Fire"]]*= 2.0;
        ResultArray[t["Flying"]]*= 2.0;
        ResultArray[t["Grass"]]*= 0.5;
        ResultArray[t["Ground"]]*= 0.5;
        ResultArray[t["Rock"]]*= 2.0;

    }

    if (type == 'Dark') {
        ResultArray[t["Bug"]]*= 2.0;
        ResultArray[t["Dark"]]*= 0.5;
        ResultArray[t["Fight"]]*= 2.0;
        ResultArray[t["Ghost"]]*= 0.5;
        ResultArray[t["Psychic"]]*= 0.0;
        ResultArray[t["Fairy"]]*= 2.0;
    }

    if (type == 'Dragon') {
        ResultArray[t["Dragon"]]*= 2.0;
        ResultArray[t["Electric"]]*= 0.5;
        ResultArray[t["Fire"]]*= 0.5;
        ResultArray[t["Grass"]]*= 0.5;
        ResultArray[t["Ice"]]*= 2.0;
        ResultArray[t["Water"]]*= 0.5;
        ResultArray[t["Fairy"]]*= 2.0;
    }

    if (type == 'Electric') {
        ResultArray[t["Electric"]]*= 0.5;
        ResultArray[t["Flying"]]*= 0.5;
        ResultArray[t["Ground"]]*= 2.0;
        ResultArray[t["Steel"]]*= 0.5;
    }
    if (type == 'Fight') {
        ResultArray[t["Bug"]]*= 0.5;
        ResultArray[t["Dark"]]*= 0.5;
        ResultArray[t["Flying"]]*= 2.0;
        ResultArray[t["Psychic"]]*= 2.0;
        ResultArray[t["Rock"]]*= 0.5;
        ResultArray[t["Fairy"]]*= 2.0;
    }

    if (type == 'Fire') {
        ResultArray[t["Bug"]]*= 0.5;
        ResultArray[t["Fire"]]*= 0.5;
        ResultArray[t["Grass"]]*= 0.5;
        ResultArray[t["Ground"]]*= 2.0;
        ResultArray[t["Ice"]]*= 0.5;
        ResultArray[t["Rock"]]*= 2.0;
        ResultArray[t["Steel"]]*= 0.5;
        ResultArray[t["Water"]]*= 2.0;
        ResultArray[t["Fairy"]]*= 0.5;
    }

    if (type == 'Flying') {
        ResultArray[t["Bug"]]*= 0.5;
        ResultArray[t["Electric"]]*=2.0;
        ResultArray[t["Fight"]]*= 0.5;
        ResultArray[t["Grass"]]*= 0.5;
        ResultArray[t["Ground"]]*= 0.0;
        ResultArray[t["Ice"]]*= 2.0;
        ResultArray[t["Rock"]]*= 2.0;
    }

    if (type == 'Ghost') {
        ResultArray[t["Bug"]]*= 0.5;
        ResultArray[t["Dark"]]*= 2.0;
        ResultArray[t["Fight"]]*= 0.0;
        ResultArray[t["Ghost"]]*= 2.0;
        ResultArray[t["Normal"]]*= 0.0;
        ResultArray[t["Poison"]]*= 0.5;
    }

    if (type == 'Grass') {
        ResultArray[t["Bug"]]*= 2.0;
        ResultArray[t["Electric"]]*= 0.5;
        ResultArray[t["Fire"]]*= 2.0;
        ResultArray[t["Flying"]]*= 2.0;
        ResultArray[t["Grass"]]*= 0.5;
        ResultArray[t["Ground"]]*= 0.5;
        ResultArray[t["Ice"]]*= 2.0;
        ResultArray[t["Poison"]]*= 2.0;
        ResultArray[t["Water"]]*= 0.5;
    }

    if (type == 'Ground') {
        ResultArray[t["Electric"]]*= 0.0;
        ResultArray[t["Grass"]]*= 2.0;
        ResultArray[t["Ice"]]*= 2.0;
        ResultArray[t["Poison"]]*= 0.5;
        ResultArray[t["Rock"]]*= 0.5;
        ResultArray[t["Water"]]*= 2.0;
    }

    if (type == 'Ice') {
        ResultArray[t["Fight"]]*= 2.0;
        ResultArray[t["Fire"]]*= 2.0;
        ResultArray[t["Ice"]]*= 0.5;
        ResultArray[t["Poison"]]*= 0.5;
        ResultArray[t["Rock"]]*= 2.0;
        ResultArray[t["Steel"]]*= 2.0;
    }

    if (type == 'Normal') {
        ResultArray[t["Fight"]]*= 2.0;
        ResultArray[t["Ghost"]]*= 0.0;
    }

    if (type == 'Poison') {
        ResultArray[t["Bug"]]*= 0.5;
        ResultArray[t["Fight"]]*= 0.5;
        ResultArray[t["Grass"]]*= 0.5;
        ResultArray[t["Ground"]]*= 2.0;
        ResultArray[t["Poison"]]*= 0.5;
        ResultArray[t["Psychic"]]*= 2.0;
        ResultArray[t["Fairy"]]*= 0.5;
    }

    if (type == 'Psychic') {
        ResultArray[t["Bug"]]*= 2.0;
        ResultArray[t["Dark"]]*= 2.0;
        ResultArray[t["Fight"]]*= 0.5;
        ResultArray[t["Ghost"]]*= 2.0;
        ResultArray[t["Psychic"]]*= 0.5;
    }

    if (type == 'Rock') {
        ResultArray[t["Fight"]]*= 2.0;
        ResultArray[t["Fire"]]*= 0.5;
        ResultArray[t["Flying"]]*= 0.5;
        ResultArray[t["Grass"]]*= 2.0;
        ResultArray[t["Ground"]]*= 2.0;
        ResultArray[t["Normal"]]*= 0.5;
        ResultArray[t["Poison"]]*= 0.5;
        ResultArray[t["Steel"]]*= 2.0;
        ResultArray[t["Water"]]*= 2.0;
    }

    if (type == 'Steel') {
        ResultArray[t["Bug"]]*= 0.5;
/*        ResultArray[t["Dark"]]*= 0.5;*/
        ResultArray[t["Dragon"]]*= 0.5;
        ResultArray[t["Fight"]]*= 2.0;
        ResultArray[t["Fire"]]*= 2.0;
        ResultArray[t["Flying"]]*= 0.5;
/*        ResultArray[t["Ghost"]]*= 0.5;*/
        ResultArray[t["Grass"]]*= 0.5;
        ResultArray[t["Ground"]]*= 2.0;
        ResultArray[t["Ice"]]*= 0.5;
        ResultArray[t["Normal"]]*= 0.5;
        ResultArray[t["Poison"]]*= 0.0;
        ResultArray[t["Psychic"]]*= 0.5;
        ResultArray[t["Rock"]]*= 0.5;
        ResultArray[t["Steel"]]*= 0.5;
        ResultArray[t["Fairy"]]*= 0.5;
    }

    if (type == 'Water') {
        ResultArray[t["Electric"]]*= 2.0;
        ResultArray[t["Fire"]]*= 0.5;
        ResultArray[t["Grass"]]*= 2.0;
        ResultArray[t["Ice"]]*= 0.5;
        ResultArray[t["Steel"]]*= 0.5;
        ResultArray[t["Water"]]*= 0.5;
    }

    if (type == 'Fairy') {
        ResultArray[t["Poison"]]*= 2.0;
        ResultArray[t["Steel"]]*= 2.0;
        ResultArray[t["Bug"]]*= 0.5;
        ResultArray[t["Dark"]]*= 0.5;
        ResultArray[t["Fight"]]*= 0.5;
        ResultArray[t["Dragon"]]*= 0.0;
    }

}
