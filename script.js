//Moment.js date and time
//9am = 09:00
//10am = 10:00
//11am = 11:00
//12pm = 12:00
//1pm = 13:00
//2pm = 14:00
//3pm = 15:00
//4pm = 16:00
//5pm = 17:00

var m = moment().format("MM-DD-YYYY HH:mm");
$("#h3").text(m.toString());    

//On-click event
$("button").on("click", function(event){
    event.preventDefault();
    var timeblock1 = $("#timeblock1").val().trim();
    var timeblock2 = $("#timeblock2").val().trim();
    var timeblock3 = $("#timeblock3").val().trim();
    var timeblock4 = $("#timeblock4").val().trim();
    var timeblock5 = $("#timeblock5").val().trim();
    var timeblock6 = $("#timeblock6").val().trim();
    var timeblock7 = $("#timeblock7").val().trim();
    var timeblock8 = $("#timeblock8").val().trim();
    var timeblock9 = $("#timeblock9").val().trim();

    //Create an object of all the timeblock values
    var object = [{
        text1:timeblock1
    },{
        text2:timeblock2
    },{
        text3:timeblock3
    },{
        text4:timeblock4
    },{
        text5:timeblock5
    },{
        text6:timeblock6
    },{
        text7:timeblock7
    },{
        text8:timeblock8
    },{
        text9:timeblock9
    }]

    //Sets object to localStorage
    var setObject = JSON.stringify(object);
    localStorage.setItem("object", setObject);          
})
//Function to render object value from localStorage to timeblocks
function renderInput(){
    var renderObject = JSON.parse(localStorage.getItem("object"));
    $("#timeblock1").val(renderObject[0].text1);
    $("#timeblock2").val(renderObject[1].text2);
    $("#timeblock3").val(renderObject[2].text3);
    $("#timeblock4").val(renderObject[3].text4);
    $("#timeblock5").val(renderObject[4].text5);
    $("#timeblock6").val(renderObject[5].text6);
    $("#timeblock7").val(renderObject[6].text7);
    $("#timeblock8").val(renderObject[7].text8);
    $("#timeblock9").val(renderObject[8].text9);
}

function colorChange(){
    var n = parseInt(moment().format("HH:mm"));
    console.log(n);
    var block1 = $("#timeblock1").attr("data-time");
    var block2 = $("#timeblock2").attr("data-time");
    var block3 = $("#timeblock3").attr("data-time");
    var block4 = $("#timeblock4").attr("data-time");
    var block5 = $("#timeblock5").attr("data-time");
    var block6 = $("#timeblock6").attr("data-time");
    var block7 = $("#timeblock7").attr("data-time");
    var block8 = $("#timeblock8").attr("data-time");
    var block9 = $("#timeblock9").attr("data-time");

    if(block1 == n){
        $("#timeblock1").addClass("present");
    }
    else if(block1 > n){
        $("#timeblock1").addClass("future");
    }
    else{
        $("#timeblock1").addClass("past");
    }
    if(block2 == n){
        $("#timeblock2").addClass("present");
    }
    else if(block2 > n){
        $("#timeblock2").addClass("future");
    }
    else{
        $("#timeblock2").addClass("past");
    }
    if(block3 == n){
        $("#timeblock3").addClass("present");
    }
    else if(block3 > n){
        $("#timeblock3").addClass("future");
    }
    else{
        $("#timeblock3").addClass("past");
    }
    if(block4 == n){
        $("#timeblock4").addClass("present");
    }
    else if(block4 > n){
        $("#timeblock4").addClass("future");
    }
    else{
        $("#timeblock4").addClass("past");
    }
    if(block5 == n){
        $("#timeblock5").addClass("present");
    }
    else if(block5 > n){
        $("#timeblock5").addClass("future");
    }
    else{
        $("#timeblock5").addClass("past");
    }
    if(block6 == n){
        $("#timeblock6").addClass("present");
    }
    else if(block6 > n){
        $("#timeblock6").addClass("future");
    }
    else{
        $("#timeblock6").addClass("past");
    }
    if(block7 == n){
        $("#timeblock7").addClass("present");
    }
    else if(block7 > n){
        $("#timeblock7").addClass("future");
    }
    else{
        $("#timeblock7").addClass("past");
    }
    if(block8 == n){
        $("#timeblock1").addClass("present");
    }
    else if(block8 > n){
        $("#timeblock8").addClass("future");
    }
    else{
        $("#timeblock8").addClass("past");
    }
    if(block9 == n){
        $("#timeblock9").addClass("present");
    }
    else if(block9 > n){
        $("#timeblock9").addClass("future");
    }
    else{
        $("#timeblock9").addClass("past");
    }

}    
//Call Functions
renderInput();
colorChange();





    