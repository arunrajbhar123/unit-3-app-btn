//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )
var scope = [{
    type: "JavaScript has 3 types of scope: Block scope Local scope Global scope",
    point1: "Variables declared inside a { } block cannot be accessed from outside the block",
    point2: "Variables declared within a JavaScript function, become LOCAL to the function.",
    point3: "A variable declared outside a function, becomes GLOBAL.",
    point4: "Variables declared with var, let and const are quite similar when declared inside a function.",
    videoLink: "https://drive.google.com/uc?id=1MOSND9Zfi_hyx3vn8cmabbAMa4HhcIhU&%20export=download",

    //https://drive.google.com/file/d/1Ukvctao4Lfw0tLyR3PgAa-mIAw-P9rio/view?usp=sharing
    //https://drive.google.com/uc?id=1Ukvctao4Lfw0tLyR3PgAa-mIAw-P9rio&%20export=download
}];
var hoisting = [{
    type: "JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.",
    point1: "Hoisting allows functions to be safely used in code before they are declared.",
    point2: "Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized.",
    point3: "Here we declare then initialize the value of a var after using it. The default initialization of the var is undefined.",
    point4: "If we forget the declaration altogether (and only initialize the value) the variable isn't hoisted. Trying to read the variable before it is initialized results in ReferenceError exception.",
    videoLink: "https://drive.google.com/uc?id=1fOdEBlYHWDPVbWCrKvwAy897gCCBGa2L&%20export=download"
}];
var constructor = [{
    type: "It is considered good practice to name constructor functions with an upper-case first letter.",
    point1: "In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.",
    point2: "Sometimes we need a blueprint for creating many objects of the same type ",
    point3: "The way to create an object type,is to use an object constructorfunction.",
    point4: "In the example above, function Person() is an object constructor function.",
    videoLink: "https://drive.google.com/uc?id=1rY-kpka-1rROnhwbOA64uH0g5qqzXV20&%20export=download"
}];
var prototype = [{
    type: "The prototype is an object that is associated with every functions and objects by default in JavaScript.",
    point1: "where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.",
    point2: "Every function includes prototype object by default.",
    point3: "Every object which is created using literal syntax or constructor syntax with the new keyword, includes __proto__ property that points to prototype object of a function that created this object.",
    point4: "Function's prototype property can be accessed using <function-name>.prototype. However, an object (instance) does not expose prototype property, instead you can access it using __proto__.",
    videoLink: "https://drive.google.com/uc?id=1Ukvctao4Lfw0tLyR3PgAa-mIAw-P9rio&%20export=download"
}];


localStorage.setItem("prototype", JSON.stringify(prototype));
localStorage.setItem("constructor", JSON.stringify(constructor));
localStorage.setItem("hoisting", JSON.stringify(hoisting));
localStorage.setItem("scope", JSON.stringify(scope));


//Information should be retrieved from localstorage only, avoid hard coding data.
document.querySelector("#scope").addEventListener("click", showscope);
document.querySelector("#hoisting").addEventListener("click", showshoisting);
document.querySelector("#constructor").addEventListener("click", showsconstruct);
document.querySelector("#prototype").addEventListener("click", showsprototype);


//calling function
function showshoisting() {
    var get = JSON.parse(localStorage.getItem("hoisting"));
    structure(get)
}

function showsconstruct() {
    var get = JSON.parse(localStorage.getItem("constructor"));
    structure(get)
}

function showsprototype() {
    var get = JSON.parse(localStorage.getItem("prototype"));
    structure(get)
}

function showscope() {
    var get = JSON.parse(localStorage.getItem("scope"));
    structure(get)

}


//append section
var showallDetails = document.querySelector("#appendinfo");
showallDetails.style.display = "none";

function structure(get) {
    get.map(function(el) {
        var heading = document.createElement("ul");
        heading.innerText = el.type;
        var point1 = document.createElement("li");
        point1.innerText = el.point1;
        var point2 = document.createElement("li");
        point2.innerText = el.point2;
        var point3 = document.createElement("li");
        point3.innerText = el.point3;
        var point4 = document.createElement("li");
        point4.innerText = el.point4;
        var video = document.createElement("video");
        video.src = el.videoLink;
        video.controls = true;
        video.play();
        heading.append(point1, point2, point3, point4, video);
        showallDetails.append(heading);

        if (showallDetails.style.display == 'block') {
            showallDetails.style.display = "none";
            window.location.reload();
        } else {
            showallDetails.style.display = "block";
        }
    });
}
