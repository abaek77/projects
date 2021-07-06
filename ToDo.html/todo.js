let listitems = []
function storetolist(){
    var listitem = document.getElementById("whattodo").value;
    console.log(listitem);
    listitems.push(listitem);
    document.getElementById("listem").innerHTML = listitems.join('<br>');
}
function deleteFromList(){
    listitems.pop(listitems);
    document.getElementById("listem").innerHTML = listitems.join('<br>');
    console.log(listitems);
}