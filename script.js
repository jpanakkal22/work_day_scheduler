//Moment.js date
var m = moment();
$("#currentDay").text(m.toString());    


var labelEl = $("#time");
var inputEl = $("input");
var saveButton = $(".saveBtn");
var render = $("#render");
var label = $("label");



renderInput()

saveButton.on("click", function(event){
    event.preventDefault();
           
    if(inputEl === ""){
        return;
    }

    var currentbutton = $(this).attr("data-time")
    console.log(currentbutton);    
    
    var text = inputEl.val();
    localStorage.setItem("text", text);
        
})

function renderInput(){
    var renderedText = localStorage.getItem("text");
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





    