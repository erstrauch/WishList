var table = document.getElementById("WishListTable");
var nameInput1 = null; //setting value of name1 to nothing
var nameInput2 = null; //setting value of name2 to nothing
var radiobutton1; //declaring TV radio button
var radiobutton2; //declaring Movie radio button
var radiobuttonfinal = 0; //for the second page 
var status1; // checks status page one
var status2; // checks status page two
var statusapi; // checks status api search
var places = []; // list for database
var addup = 0; // counter for how many shows are avaliable
var nameCounter1;
var radioCounter1;
var nameCounter2;
var radioCounter2;
var tester = 7;

function AutoRefresh() {
// saves info after refresh
    if (nameInput1 != null) {
        if (typeof(Storage) != "undefined") {
            // Store
            // Should be outside of all functions so that it runs every time you reload:
            if (localStorage.getItem('nameCounter1') == null) {
                localStorage.setItem('nameCounter1', 0);
            }
            if (localStorage.getItem('radioCounter1') == null) {
                localStorage.setItem('radioCounter1', 0);
            }
        }
    }
}


$(document).ready(function(){
    var URL = "1l4F5o7p_ABH5dlB8_sGAC0D3sNKEuw3HbFJxBKNvyVo";
    Tabletop.init( { key: URL, callback: convertToJSON, simpleSheet: true } )
    $("button").click(function AddToWishlistAPI(){                                       
    }); 
    //when the document is ready on button click call function api
    document.querySelector('.content .value').innerHTML = addup;

    $(document).on('click','.delete-row', function(){
    $(this).parents('tr').remove();
    });
    //delete a row when delete button pressed
});

function convertToJSON(data) {
    for(i = 0; i < data.length; i++) {
        console.log(data[i]);
        var options = { type: 'Feature',            
        properties: {
                    Name: data[i]["name"],
                    Type: data[i]["type"],
                },
        };
        places.push(options);
    }
}

function clearText1() {
    var clear1 = [];
        clear1 = document.getElementsByClassName("APIClass1");
    for (var i = 0; i<clear1.length; i++) {
        clear1[i].value = "" ;
    }
}
 //clearing text when wishlist button pg 1 is pressed

function clearText2() {
    var clear2 = [];
        clear2 = document.getElementsByClassName("APIClass2");
    for (var f = 0; f < clear2.length; f++){
        clear2[f].value = "" ;
    }
}
//clearing text when wishlist button pg 2 is pressed


function GetStatus1() {
    for(var i=0; i < places.length; i++) { 
        if (places[i].properties.Name == nameInput1 && places[i].properties.Type == radiobuttonfinal) {
            status1 = "Available";
            addup = addup + 1;
            document.querySelector('.content .value').innerHTML = addup;
            return status1;
        }
        else if (places[i].properties.Name == nameInput1 && places[i].properties.Type != radiobuttonfinal) {
            alert("Are you sure that's the correct type?");
            return status1;
        }
        else {
            status1 = "Unavailable";
        }
    }
    return status1;
}
//Checking database on page one

function GetStatus2() {
    for(var i=0; i < places.length; i++) {
        if ((places[i].properties.Name == nameInput2) && (places[i].properties.Type == radiobuttonfinal)) {
            status2 = "Available";
            addup = addup + 1;
            document.querySelector('.content .value').innerHTML = addup;
            return status2;
        }
        else if (places[i].properties.Name == nameInput2 && places[i].properties.Type != radiobuttonfinal) {
            alert("Are you sure that's the correct type?");
            return status2;
        }
        else {
            status2 = "Unavailable";
        }
    }
    return status2;
}
//checking database on page two

function checkMountAvail() {
    for(var i=0; i<places.length; i++) { 
        if (GetStatus1() == "Available") {
            return 1; 
    }
        else if (GetStatus2() == "Available") {
           return 1; 
        }
        else {
            return 0;
        }
        // then add all the numbers together and print number in2 notification space
    }
}

function GetStatusAPI(){
    for(var i=0; i < places.length; i++) { 
        if (places[i].properties.Name == nameInput1 && places[i].properties.Type == radiobuttonfinal) {
            statusapi = "The title is available.";
            alert(statusapi);
            return statusapi;
        }
        else if (places[i].properties.Name == nameInput1 && places[i].properties.Type != radiobuttonfinal) {
              alert("Are you sure that's the correct type?");
              return(statusapi);
        }
        else {
            statusapi = "The title is unavailable.";
        }
    }
    alert(statusapi);
}
//Checking database on page one




function search1() {
    if (nameInput1 == "" && document.getElementById("radio-choice-1").checked == false && document.getElementById("radio-choice-2").checked == false){
        alert("Please enter a title and select a type.");
        //if title is empty and no radio button is clicked
    }
    else if (document.getElementById("radio-choice-1").checked == false && document.getElementById("radio-choice-2").checked == false){
        alert("Please select a radio button.");
        //if radio buttons arent clicked
    }
    else if (nameInput1 == ""){
        alert("Please enter a title.");
        //if title is empty 
    }
    else {
        clearText1();
    }
}
//runs on the first page add to my wishlist is pressed, checking for radiobutton and title entered.

function search2() {
    if (nameInput2 == "" && document.getElementById("radio-choice-1-1").checked == false && document.getElementById("radio-choice-2-2").checked == false){
        alert("Please enter a title and select a type.");
        //if title is empty and no radio button is clicked
    }
    else if (document.getElementById("radio-choice-1-1").checked == false && document.getElementById("radio-choice-2-2").checked == false){
        alert("Please select a radio button.");
        //if radio buttons arent clicked
    }
    else if (nameInput2 == ""){
        alert("Please enter a title.");
        //if title is empty
    } 
    else {
        clearText2();
    }  
}
//runs on the second page when add to my wishlist is pressed, checking for radiobutton and title entered.

function searchapi() {
    if (nameInput1 == "" && document.getElementById("radio-choice-1").checked == false && document.getElementById("radio-choice-2").checked == false){
        alert("Please enter a title and select a type.");
        //if title is empty and no radio button is clicked
    }
    else if (document.getElementById("radio-choice-1").checked == false && document.getElementById("radio-choice-2").checked == false){
        alert("Please select a radio button.");
        //if radio buttons arent clicked
    }
    else if (nameInput1 == ""){
        alert("Please enter a title.");
        //if title is empty 
    }
    else {
        GetStatusAPI();
    }
}
//runs on the first page checking if items are filled search button

function AddToWishlist1() {
    var table = document.getElementById("WishListTable");
    nameInput1 = document.getElementById("API1").value;
    search1();
    radiobutton1 = document.getElementById("radio-choice-1").value;
    radiobutton2 = document.getElementById("radio-choice-2").value;
    // this sets the value to TV show or Movie

    if (document.getElementById("radio-choice-1").checked == true) {
        radiobuttonfinal = radiobutton1;
    }
    else if (document.getElementById("radio-choice-2").checked == true) {
        radiobuttonfinal = radiobutton2;
    }
    //setting the value of radio button to a single switching variable
    var row = table.insertRow(1);
    var cell4 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell2 = row.insertCell(2);

    if (nameInput1 != ""  && radiobuttonfinal != 0 ) {
         cell4.innerHTML = '<input id="btn" type="button" value="Delete" class="delete-row" />';
        //will add bullet point
        cell1.innerHTML = nameInput1;
        //Title prints user input of title
        cell2.innerHTML = radiobuttonfinal;
        //Type prints user input of type
        cell3.innerHTML = GetStatus1();

        alert(nameInput1 + " has been added to your WishList\n\nClick View My WishList to view your WishList");   
    //if there is an entry in title and a radio button checked, it pushes it
    }
    localStorage.setItem(localStorage.getItem('nameCounter1'), nameInput1);
    localStorage.setItem(localStorage.getItem('radioCounter1'), radiobuttonfinal);
    localStorage.setItem('nameCounter1', localStorage.getItem('nameCounter1') + 1);
    localStorage.setItem('radioCounter1', localStorage.getItem('nameCounter1') + 1);
// Should be put into “Submit button” function so that it runs every time you submit        
}
//Page one function checks questions and adds to wishlist

function AddToWishlist2() {
    var table = document.getElementById("WishListTable");
    nameInput2 = document.getElementById("API2").value;
    search2();
    radiobutton1 = document.getElementById("radio-choice-1-1").value;
    radiobutton2 = document.getElementById("radio-choice-2-2").value;
    // this sets the value to TV show or Movie

    if (document.getElementById("radio-choice-1-1").checked == true) {
        radiobuttonfinal = radiobutton1;
    }
    else if (document.getElementById("radio-choice-2-2").checked == true) {
        radiobuttonfinal = radiobutton2;
    }
    //setting the value of radio button to a single switching variable
    var row = table.insertRow(1);
    var cell4 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell2 = row.insertCell(2);

    if (nameInput1 != ""  && radiobuttonfinal != 0 ) {
         cell4.innerHTML = '<input id="btn" type="button" value="Delete" class="delete-row" />';
        //will add bullet point
        cell1.innerHTML = nameInput1;
        //Title prints user input of title
        cell2.innerHTML = radiobuttonfinal;
        //Type prints user input of type
        cell3.innerHTML = GetStatus1();

    }
    //if there is an entry in title and a radio button checked, it pushes it
    // alert(nameInput2 + " has been added to your WishList\n\nClick View My WishList to view your WishList");   
    //if there is an entry in title and a radio button checked, it pushes it

    //for localStorage.setItem(“counter1”, nameInput2); change to counter2 and change everything 2 wishlist2 (change all of code to fit page 2)
    localStorage.setItem(localStorage.getItem('nameCounter2'), nameInput2);
    localStorage.setItem(localStorage.getItem('radioCounter2'), radiobuttonfinal);
    localStorage.setItem('nameCounter2', localStorage.getItem('nameCounter2') + 1);
    localStorage.setItem('radioCounter2', localStorage.getItem('nameCounter2') + 1);
}   
//Page two function checks questions and adds to wishlist

function AddToWishlistAPI() {
    nameInput1 = document.getElementById("API1").value;
    radiobutton1 = document.getElementById("radio-choice-1").value;
    radiobutton2 = document.getElementById("radio-choice-2").value;
    // this sets the value to TV show or Movie

    if (document.getElementById("radio-choice-1").checked == true) {
        radiobuttonfinal = radiobutton1;
    }
    else if (document.getElementById("radio-choice-2").checked == true) {
        radiobuttonfinal = radiobutton2;
    }
    //setting the value of radio button to a single switching variable
    searchapi();
}
//Page one function checks questions and adds to wishlist


// Retrieve
    for (var a = 0; a <= nameCounter1; a++) {
        var row = table.insertRow(1);
        var cell4 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell2 = row.insertCell(2);
        document.getElementById("cell1").innerHTML = localStorage.getItem(a);
        document.getElementById("cell2").innerHTML = localStorage.getItem(a);
    }
    for (var b = 0; b <= nameCounter2; b++) {
        var row = table.insertRow(1);
        var cell4 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell2 = row.insertCell(2);
        document.getElementById("cell1").innerHTML = localStorage.getItem(b);
        document.getElementById("cell2").innerHTML = localStorage.getItem(b);
    }