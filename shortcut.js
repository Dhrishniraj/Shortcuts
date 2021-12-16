function create(){
    var code = document.getElementById("code").value;
    var url = document.getElementById("url").value;

    if((code.length > 0) && (url.length > 0)){
        localStorage.setItem(code, url);
        window.alert("Shortcut created");
        window.location = "index.html";
    }
}