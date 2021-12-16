function linkopen(){
    var code = document.getElementById("code").value;
    if(code.length > 0){
        var url = localStorage.getItem(code);
        var a = document.getElementById("a");
        document.getElementById("a").href=url;
        a.click();
    }
}
function n(){
    window.location = "create_shortcut.html";
}