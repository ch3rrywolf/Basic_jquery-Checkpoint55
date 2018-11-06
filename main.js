function bold(){
    $("p").css("fontWeight","bold");
}

function italic(){
    $("p").css("fontStyle","italic");
}

function underlined(){
$("p").css("textDecoration","underline");
}
////////////////////////////////////////////////////////
//////////////// solution plzzzz part2 :) //////////////
////////////////////////////////////////////////////////
function mysize(){
$("button").click(function () {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    $("#P").css("fontSize","listValue");
});}

function myFont(){

    var listValue = selectTag.options[selectTag.selectedIndex].text;
    $("#myP").css("fontFamily","listValue");
}