//Moment.js date
var m = moment();
$("#currentDay").text(m.toString());    
console.log(m);

var labelEl = $("#time");
var inputEl = $("input");
var saveButton = $("#saveBtn");
var render = $("#render");
var label = $("label");

labelEl.textContent = "11am";

renderInput()
// colorChange();

saveButton.on("click", function(event){
    event.preventDefault();
    var button = event.target;      
     
        
    if(inputEl === ""){
        return;
        }
    
    var text = inputEl.val();
    localStorage.setItem("text", text);
    // renderInput(); 
    console.log(text);
    
})

function renderInput(){
    var renderedText = localStorage.getItem("text");
    // render.textContent = renderedText;
    inputEl.val(renderedText);
}

function colorChange(){
    if(labelEl.text === "9am"){
        render .setAttribute("class", "past");
    }
    else if(labelEl.text === "10am"){
        render.setAttribute("class", "present");
    }
    else {
        render.setAttribute("class", "future")
    }   
}





    