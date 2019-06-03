function setKookie(){
    var d = new Date()
    //date = d.getDate() + 1
    date = d;
    date.setTime(d.getTime() + (30*1000))
    //date.setDate()(d.getDate() + 1)
    var expires = "expires="+ date.toUTCString();

    document.cookie = "visitorId = HollyMutherFuck;" + expires;
}
function getKookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
    }
    }
    return "";
}
function checkKookie() {
    var username = getKookie("visitorId");
    if (username != "") {
    alert("Welcome again " + username);
    return true;
    } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
        setKookie("username", username, 365);
    }
    }
}