// Initialisation des variables globales :
let calculLine = [];
let leftOperande = "";
let rightOperande = "";
let operator = "";
let memory = "";
let lastOperation = "";
let nombreOperateur = 0;

// Span pour l'affichage
const screen = document.getElementById("screen");

// nombre
const number0 = document.getElementById("0");
const number1 = document.getElementById("1");
const number2 = document.getElementById("2");
const number3 = document.getElementById("3");
const number4 = document.getElementById("4");
const number5 = document.getElementById("5");
const number6 = document.getElementById("6");
const number7 = document.getElementById("7");
const number8 = document.getElementById("8");
const number9 = document.getElementById("9");

// opérande
const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");  
const multiply = document.getElementById("multiply"); 
const division = document.getElementById("division");
const comma = document.getElementById("comma");

const equals = document.getElementById("equals"); 

const clearAll = document.getElementById("clearAll");
const clearEntree = document.getElementById("clearEntree");

const memoryAddButton = document.getElementById("memoryAdd");
const memorySubtractButton = document.getElementById("memorySubtract");
const memoryClearButton = document.getElementById("memoryClear");
const memoryRecallButton = document.getElementById("memoryRecall");
const memoryStoreButton = document.getElementById("memoryStore");

number0.addEventListener("click", function() {
    printNumber(0);
});
number1.addEventListener("click", function() {
    printNumber(1);
});
number2.addEventListener("click", function() {
    printNumber(2);
});
number3.addEventListener("click", function() {
    printNumber(3);
});
number4.addEventListener("click", function() {
    printNumber(4);
});
number5.addEventListener("click", function() {
    printNumber(5);
});
number6.addEventListener("click", function() {
    printNumber(6);
});
number7.addEventListener("click", function() {
    printNumber(7);
});
number8.addEventListener("click", function() {
    printNumber(8);
});
number9.addEventListener("click", function() {
    printNumber(9);
});

addition.addEventListener("click", function() {
    printOperator("+");
});
subtraction.addEventListener("click", function() {
    printOperator("-");
});
multiply.addEventListener("click", function() {
    printOperator("×");
});
division.addEventListener("click", function() {
    printOperator("/");
});

equals.addEventListener("click", calcul);
/*comma.addEventListener("click", printDecimalPoint);


memoryAddButton.addEventListener("click", memoryAdd);
memorySubtractButton.addEventListener("click", memorySubtract);
memoryClearButton.addEventListener("click", memoryClear);
memoryRecallButton.addEventListener("click", memoryRecall);
memoryStoreButton.addEventListener("click", memoryStore);

clearAll.addEventListener("click", function() {
    clear("all");
});
clearEntree.addEventListener("click", function() {
    clear("entree");
});

/****************************** VUE ******************************/

function updateScreen(value) {
    screen.innerText = value;
}

/****************************** MODELE ******************************/

function printNumber(value) {
    if (nombreOperateur === 0) {
        leftOperande = leftOperande + value;
        updateScreen(leftOperande);
    } else {
        rightOperande = rightOperande + value;
        updateScreen(rightOperande);
    }
}

function printOperator(value) {
    operator = value;
    nombreOperateur = 1;
    updateScreen(value);
}

function calcul() {
    let resultat;

    if (nombreOperateur === 1) {
        switch (operator) {
            case "+":
                console.log("addition");
                resultat = leftOperande + rightOperande;
            case "-":
                console.log("soustraction");
                resultat = leftOperande - rightOperande;
            case "×":
              
              
            case "/":
            default:
                console.log(operator);
        }
           
    }
}


/****************************** VUE ******************************/
// Affichage initial
const initialPrint = "0";
updateScreen(initialPrint);