//Moment.js date
var m = moment();
$("#currentDay").text(m.toString());    
console.log(m);

var labelEl = document.querySelector("#time");
var inputEl = document.querySelector("input");
var saveButton = document.querySelector("#saveBtn");
var render = document.querySelector("#render");
var label = document.querySelector("label");

labelEl.textContent = "11am";


colorChange();


saveButton.addEventListener("click", function(event){
    event.preventDefault();
    var button = event.target;
      
    renderInput();   
        
    if(inputEl === ""){
        return;
    }
    
    var text = inputEl.value;
    localStorage.setItem("text", text);
    var save = localStorage.getItem("text");
    inputEl.textContent = save;

})

function renderInput(){
    var renderedText = localStorage.getItem("text");
    render.textContent = renderedText;
}

function colorChange(){
    if(labelEl.textContent === "9am"){
        render .setAttribute("class", "past");
    }
    else if(labelEl.textContent === "10am"){
        render.setAttribute("class", "present");
    }
    else {
        render.setAttribute("class", "future")
    }
   
   
}





    