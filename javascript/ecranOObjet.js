class Model {
    // Propriétés privées
    #number;    
    #line = "";
    #oldLine = "";
    #leftValue;
    #rightValue;
    #result;
    #operator;
    #nombreDeClique = 0;
    #highlightButtonsList = "";

    constructor() {
        this.#number = 0;
        console.log("Le modèle est initialisé");
    }

    /* Méthode d'accès à number */
    getNumber() {
        return this.#number;
    }

    /* Méthode pour mettre à jour number */
    updateNumber(value) {
        this.#number = value;
        return this.#number;
    }

    /*resetNombreDeClique() {
        this.#nombreDeClique = 0;
    }*/

    /* Méthode pour concaténer la valeur entrée */
    printNumber(value) {
        switch (value) {
            case "+":
                this.#leftValue = parseFloat(this.#line);
                
                this.#operator = value;
                this.#line = "";
                console.log("________________\nAddition débuté\n________________");
                this.highlightButton(value);
                break;
            case "-":
                this.#leftValue = parseFloat(this.#line);
                
                this.#operator = value;
                this.#line = "";
                console.log("________________\nSoustraction débuté\n________________");
                this.highlightButton(value);
                break;
            case "×":
                this.#leftValue = parseFloat(this.#line);
                
                this.#operator = value;
                this.#line = "";
                console.log("________________\nMultiplication débuté\n________________");
                this.highlightButton(value);
                break;
            case "÷":
                this.#leftValue = parseFloat(this.#line);
                
                this.#operator = value;
                this.#line = "";
                console.log("________________\nDivision débuté\n________________");
                this.highlightButton(value);
                break;
            case "%":
                this.#leftValue = parseFloat(this.#line) * 100 + "%";
                this.#line = this.#leftValue;
                console.log("________________\nCalcul passé en pourcentage\n________________");
                break;
            case "±":
                this.#leftValue = (-1) * parseFloat(this.#line);
                this.#line = this.#leftValue;
                console.log("________________\nSigne inversé\n________________");
                break;
            case "clearOne":
                if (this.#line.length > 0) {
                    this.#line = this.#line.slice(0, -1);
                }
                console.log("________________\nDernier digits supprimé\n________________");
                break;
            case "clearLine":
                this.#line = "";
                console.log("________________\nLigne de calcul supprimé\n________________");
                break;
            case "clearEntree":
                this.#line = "";  
                this.#oldLine = "";
                this.#leftValue = "";
                this.#rightValue = "";
                this.#result = "";
                this.#operator = "";
                this.#nombreDeClique = 0;
                this.resetButtonColors();
                console.log("________________\nToutes les entrées ont été reset\n________________");
                break;
            case "=":
                if (this.#line == "" || this.#rightValue == "" || this.#rightValue == "") {
                    this.#line = "";
                    break;
                } else {
                    this.#nombreDeClique += 1;
                    console.log("Nombre de clique sur égals : " + this.#nombreDeClique);
                    
                    this.#rightValue = parseFloat(this.#line);
                    if (this.#nombreDeClique <= 1) {
                        this.#oldLine = this.#line;
                    } else {
                        this.#leftValue = parseFloat(this.#oldLine);
                    }
    
                    this.calcul();
                    this.resetButtonColors();
                    break;
                }
            default:
                this.#line = this.#line + value;
        }
        return this.updateNumber(this.#line);
    }

    calcul() {
        switch (this.#operator) {
            case "+":
                this.#result = this.#leftValue + this.#rightValue;
                break;
            case "-":
                this.#result = this.#leftValue - this.#rightValue;
                break;
            case "×":
                this.#result = this.#leftValue * this.#rightValue;
                break;
            case "÷":
                if (this.#rightValue == 0) {
                    console.log("Vous ne pouvez pas diviser par zéro.");
                    this.#result = "ERROR MATH";
                    break;
                } else {
                    this.#result = this.#leftValue / this.#rightValue;
                    break;
                }
        }

        /* Gestion de la capacité de l'écran */
        // TODO
        this.#line = this.#result.toString();
    }

    highlightButton(value) {
        document.getElementById(value).style.backgroundColor='#5E5654';
        this.#highlightButtonsList += value;
        console.log(this.#highlightButtonsList);
    }

    resetButtonColors() {
        for (let i = 0; i < this.#highlightButtonsList.length; i++) {
            document.getElementById(this.#highlightButtonsList[i]).style.backgroundColor='';
        }
        this.#highlightButtonsList = "";
    }
}

class View {
    // Propriétés privées
    #screen;
    #buttonList;

    constructor() {
        this.#screen = document.getElementById("screen");
        this.#buttonList = document.getElementsByClassName("clickJS");
        console.log("La vue est initialisée");
    }

    /* Méthode de mise à jour de la vue */
    updateView(entryValue) {
        console.log("La vue se met à jour");
        this.#screen.innerText = entryValue;
    }

    /* Méthode d'accès aux boutons pour associer un eventListener côté Controller */
    getButtons() {
        return this.#buttonList;
    }
}

class Controller {
    // Propriétés privées
    model;
    view;

    constructor(argModel, argView) {
        this.model = argModel;
        this.view = argView;
        const buttons = this.view.getButtons();
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", this.callBack);
        }
        console.log("Le contrôleur est initialisé");
    }

    /* Méthode de mise à jour de la Vue à partir du Modele */
    updateView(n) {
        console.log("Le contrôleur demande une mise à jour de la vue");
        this.view.updateView(n);
    }

    /* Méthode de manipulation du Modele */
    updateModel(id) {
        console.log("Le contrôleur demande une manipulation au modèle");
        return this.model.printNumber(id);
    }

    /* Méthode déclenchée suite à un event sur la Vue */
    callBack = (event) => { 
        console.clear();
        console.log("La vue fait une requête au contrôleur");
        console.log("Touche appuyé : " + event.target.id);
        let result = this.updateModel(event.target.id);
        this.updateView(result);
    }
}

console.log("Lancement de l'application");
const app = new Controller(
    new Model(), 
    new View()
);
console.log("L'application est lancée");