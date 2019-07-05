//Application: Model Grid
//Description: Grid model for question twelve of the Flex Contact front-end developer test
//Author: Ivam Galvão Filho
//Created: 05/07/2019

//Global Variables
var declaration = `JavaScript application running in production enviroment mode.`
                + ` Application version 1.0.0.`;
var template;
//Global Variables

//onInit
console.log(declaration);
//Methods JS
render();
//Methods JS

//onInit

//Functions
function render() {
    template = `<div class="row style-general">
                    <div class="style-card-1">
                        <div class="card style-item-1">
                            <div class="card-body style-body-1">Item 1</div>
                        </div>
                    </div>
                    <div class="style-card-2">
                        <div class="card style-item-2">
                            <div class="card-body style-body-2">Item 2</div>
                        </div>
                        <div class="card style-item-3">
                            <div class="card-body style-body-3">Item 3</div>
                        </div>
                    </div>
                <div>`;
    document.getElementById("model").innerHTML = template;
}
//Functions
