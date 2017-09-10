var type1 = "None";
var type2 = "None";
var pokemonTypes = [
  "Bug",
  "Dark",
  "Dragon",
  "Electric",
  "Fairy",
  "Fight",
  "Fire",
  "Flying",
  "Ghost",
  "Grass",
  "Ground",
  "Ice",
  "Normal",
  "Poison",
  "Psychic",
  "Rock",
  "Steel",
  "Water",
];
var results = {};
var neutralResults = {};
var Output = "";

function initialize() {
    // 1. Fill remix with 1's
    "use strict";
    for (var i in pokemonTypes) {
        neutralResults[pokemonTypes[i]] = 1;
    }
    // 2. Fill the Arrays
    resetResult();
    addOne();

    var nodeList = document.querySelectorAll("#type1 button");
    for (var i1 = 0, length1 = nodeList.length; i1 < length1; i1++) {
        nodeList[i1].addEventListener("click", addOneType1);
    }

    nodeList = document.querySelectorAll("#type2 button");
    for (var i2 = 0, length2 = nodeList.length; i2 < length2; i2++) {
        nodeList[i2].addEventListener("click", addOneType2);
    }
}

window.addEventListener("load", initialize);

// 3. Reacts to Button Press
function addOne() {
    findWeak(type1);
    findWeak(type2);

    for (var i in pokemonTypes) {
        var typeName = pokemonTypes[i];
        if(results[typeName]==0.5) {
            Output = Output + "<span class='x05  typename'>" +typeName +
            " </span><span class='x05'>x"  + results[typeName] + "</span><br>";
        } else if(results[typeName]==0.25) {
            Output = Output + "<span class='x025 typename'>" +typeName +
            " </span><span class='x025'>x"  + results[typeName] + "</span><br>";
        } else if(results[typeName]==4.00) {
            Output = Output + "<span class='x4   typename'>" +typeName +
            " </span><span class='x4'>x"  + results[typeName] + "</span><br>";
        } else if(results[typeName]==2.00) {
            Output = Output + "<span class='x2   typename'>" +typeName +
            " </span><span class='x2'>x"  + results[typeName] + "</span><br>";
        } else if(results[typeName]===0) {
            Output = Output + "<span class='x0   typename'>" +typeName +
            " </span><span class='x0'>x"  + results[typeName] + "</span><br>";
        } else {
            Output = Output + "<span class='x1   typename'>" +typeName +
            " </span><span class='x1'>x"  + results[typeName] + "</span><br>";
        }
    }

    document.getElementById("demo").innerHTML= Output;

    Output = "";
    resetResult();

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
function resetResult() {
    for (var i in neutralResults) {
        results[i] = neutralResults[i];
    }
}

//Modifies an Array according to the Rules of Weakness
function findWeak(type) {

    if (type == 'Bug') {
        results["Fight"]*= 0.5;
        results["Fire"]*= 2.0;
        results["Flying"]*= 2.0;
        results["Grass"]*= 0.5;
        results["Ground"]*= 0.5;
        results["Rock"]*= 2.0;
    }

    if (type == 'Dark') {
        results["Bug"]*= 2.0;
        results["Dark"]*= 0.5;
        results["Fight"]*= 2.0;
        results["Ghost"]*= 0.5;
        results["Psychic"]*= 0.0;
        results["Fairy"]*= 2.0;
    }

    if (type == 'Dragon') {
        results["Dragon"]*= 2.0;
        results["Electric"]*= 0.5;
        results["Fire"]*= 0.5;
        results["Grass"]*= 0.5;
        results["Ice"]*= 2.0;
        results["Water"]*= 0.5;
        results["Fairy"]*= 2.0;
    }

    if (type == 'Electric') {
        results["Electric"]*= 0.5;
        results["Flying"]*= 0.5;
        results["Ground"]*= 2.0;
        results["Steel"]*= 0.5;
    }
    if (type == 'Fight') {
        results["Bug"]*= 0.5;
        results["Dark"]*= 0.5;
        results["Flying"]*= 2.0;
        results["Psychic"]*= 2.0;
        results["Rock"]*= 0.5;
        results["Fairy"]*= 2.0;
    }

    if (type == 'Fire') {
        results["Bug"]*= 0.5;
        results["Fire"]*= 0.5;
        results["Grass"]*= 0.5;
        results["Ground"]*= 2.0;
        results["Ice"]*= 0.5;
        results["Rock"]*= 2.0;
        results["Steel"]*= 0.5;
        results["Water"]*= 2.0;
        results["Fairy"]*= 0.5;
    }

    if (type == 'Flying') {
        results["Bug"]*= 0.5;
        results["Electric"]*=2.0;
        results["Fight"]*= 0.5;
        results["Grass"]*= 0.5;
        results["Ground"]*= 0.0;
        results["Ice"]*= 2.0;
        results["Rock"]*= 2.0;
    }

    if (type == 'Ghost') {
        results["Bug"]*= 0.5;
        results["Dark"]*= 2.0;
        results["Fight"]*= 0.0;
        results["Ghost"]*= 2.0;
        results["Normal"]*= 0.0;
        results["Poison"]*= 0.5;
    }

    if (type == 'Grass') {
        results["Bug"]*= 2.0;
        results["Electric"]*= 0.5;
        results["Fire"]*= 2.0;
        results["Flying"]*= 2.0;
        results["Grass"]*= 0.5;
        results["Ground"]*= 0.5;
        results["Ice"]*= 2.0;
        results["Poison"]*= 2.0;
        results["Water"]*= 0.5;
    }

    if (type == 'Ground') {
        results["Electric"]*= 0.0;
        results["Grass"]*= 2.0;
        results["Ice"]*= 2.0;
        results["Poison"]*= 0.5;
        results["Rock"]*= 0.5;
        results["Water"]*= 2.0;
    }

    if (type == 'Ice') {
        results["Fight"]*= 2.0;
        results["Fire"]*= 2.0;
        results["Ice"]*= 0.5;
        results["Poison"]*= 0.5;
        results["Rock"]*= 2.0;
        results["Steel"]*= 2.0;
    }

    if (type == 'Normal') {
        results["Fight"]*= 2.0;
        results["Ghost"]*= 0.0;
    }

    if (type == 'Poison') {
        results["Bug"]*= 0.5;
        results["Fight"]*= 0.5;
        results["Grass"]*= 0.5;
        results["Ground"]*= 2.0;
        results["Poison"]*= 0.5;
        results["Psychic"]*= 2.0;
        results["Fairy"]*= 0.5;
    }

    if (type == 'Psychic') {
        results["Bug"]*= 2.0;
        results["Dark"]*= 2.0;
        results["Fight"]*= 0.5;
        results["Ghost"]*= 2.0;
        results["Psychic"]*= 0.5;
    }

    if (type == 'Rock') {
        results["Fight"]*= 2.0;
        results["Fire"]*= 0.5;
        results["Flying"]*= 0.5;
        results["Grass"]*= 2.0;
        results["Ground"]*= 2.0;
        results["Normal"]*= 0.5;
        results["Poison"]*= 0.5;
        results["Steel"]*= 2.0;
        results["Water"]*= 2.0;
    }

    if (type == 'Steel') {
        results["Bug"]*= 0.5;
/*        results["Dark"]*= 0.5;*/
        results["Dragon"]*= 0.5;
        results["Fight"]*= 2.0;
        results["Fire"]*= 2.0;
        results["Flying"]*= 0.5;
/*        results["Ghost"]*= 0.5;*/
        results["Grass"]*= 0.5;
        results["Ground"]*= 2.0;
        results["Ice"]*= 0.5;
        results["Normal"]*= 0.5;
        results["Poison"]*= 0.0;
        results["Psychic"]*= 0.5;
        results["Rock"]*= 0.5;
        results["Steel"]*= 0.5;
        results["Fairy"]*= 0.5;
    }

    if (type == 'Water') {
        results["Electric"]*= 2.0;
        results["Fire"]*= 0.5;
        results["Grass"]*= 2.0;
        results["Ice"]*= 0.5;
        results["Steel"]*= 0.5;
        results["Water"]*= 0.5;
    }

    if (type == 'Fairy') {
        results["Poison"]*= 2.0;
        results["Steel"]*= 2.0;
        results["Bug"]*= 0.5;
        results["Dark"]*= 0.5;
        results["Fight"]*= 0.5;
        results["Dragon"]*= 0.0;
    }

}
