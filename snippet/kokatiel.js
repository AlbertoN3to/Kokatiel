(function () {
    window.kokatiel = function (section, isVisit, userId, item, shoppingCart, geolocalization, userDefined) {
        var Http = new XMLHttpRequest();
        var sessionStart = new Date().toISOString();

        window.addEventListener("beforeunload", sendObject());

        function sendObject() {
            var url = 'https://ec2-18-222-30-60.us-east-2.compute.amazonaws.com:80/data';
            Http.open("POST", url);
            Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            Http.setRequestHeader("Content-Security-Policy", null );
            Http.setRequestHeader("Access-Control-Allow-Origin", "*" );
            Http.send(JSON.stringify({
                "visitorId": getKookie('visitorId'),
                "sessionStart": sessionStart,
                "sessionEnd": new Date().toISOString(),
                "originUrl": location.hostname,
                "section": section,
                "isVisit": isVisit,
                "userDefined": userDefined,
                "item": item,
                "userId": userId,
                "shoppingCart": shoppingCart,
                "geolocalization": geolocalization
            }));
        }
        // Kookie functions above
        function setKookie() {
            var date = new Date();
            date.setTime(date.getTime() + (24 * 60 * 60 * 1000))
            var expires = "expires=" + date.toISOString() + ";";
            var visitorId = uuidv4();
            document.cookie = "visitorId = " + visitorId + ";" + expires;
            return visitorId;
        }
        function getKookie(cname) {
            var kookie = kookieExists(cname)
            if (!kookieExists) {
                return setKookie();
            } else {
                return kookie;
            }
        }
        function kookieExists(input) {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var name = cookies[i].split('=')[0].toLowerCase();
                var value = cookies[i].split('=')[1].toLowerCase();
                if (name === input) {
                    var date = new Date();
                    date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
                    document.cookie = input+"="+value+"; expires="+date+";";
                    return value;
                }
            }
            return false;
        }
        function uuidv4() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

    }
})(window);

//window,window.kokatiel=function(e,t,o,i,n,s,r){var a,d,c=new XMLHttpRequest,l=(new Date).toISOString();function u(e){for(var t=document.cookie.split(";"),o=0;o<t.length;o++){var i=t[o].split("=")[0].toLowerCase(),n=t[o].split("=")[1].toLowerCase();if(i===e){var s=new Date;return s.setTime(s.getTime()+864e5),document.cookie=e+"="+n+"; expires="+s+";",n}}return!1}window.addEventListener("beforeunload",(c.open("POST","https://ec2-18-222-30-60.us-east-2.compute.amazonaws.com:80/data"),c.setRequestHeader("Content-Type","application/json;charset=UTF-8"),c.setRequestHeader("Content-Security-Policy",null),c.setRequestHeader("Access-Control-Allow-Origin","*"),void c.send(JSON.stringify({visitorId:(a="visitorId",d=u(a),d),sessionStart:l,sessionEnd:(new Date).toISOString(),originUrl:location.hostname,section:e,isVisit:t,userDefined:r,item:i,userId:o,shoppingCart:n,geolocalization:s}))))};