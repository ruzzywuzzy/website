document.onkeypress = function (event) {
    event = (event || window.event);

    if (event.keyCode == 123 || ((event.keyCode == 73 || event.keyCode == 105) && event.shiftKey && event.ctrlKey)) {
        return false;
    }
    
    if (event.ctrlKey && (event.keyCode == 65 || event.keyCode == 97)) {
        return false;
    }
}

document.onkeydown = function (event) {
    event = (event || window.event);


    if (event.keyCode == 123 || ((event.keyCode == 73 || event.keyCode == 105) && event.shiftKey && event.ctrlKey)) {
        return false;
    }

    if (event.ctrlKey && (event.keyCode == 65 || event.keyCode == 97)) {
        return false;
    }
    
        if (event.ctrlKey && (event.keyCode == 85)) {
        return false;
    }
}

document.addEventListener("contextmenu", event => event.preventDefault());

document.getElementById("background").setAttribute("draggable", false);
