(function (){
    var Http = new XMLHttpRequest();
    var isVisit = false;
    var userDefined = {};
    var section = "";
    function sendObject(){
        const url='https://ec2-18-222-30-60.us-east-2.compute.amazonaws.com:80/data';
        Http.open("POST", url);
        var date = new Date()
        Htpp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        Http.send(JSON.stringify({
            "visitorId":getKookie('visitorId'),
            "sessionStart":date.toISOString(),
            "sessionEnd":Window.addEventListener("beforeunload", function(){
                date = new Date()
                return date.toISOString()
            }),
            "originUrl":location.origin,
            "section":getSection(),
            "isVisit":getIsVisit(),
            "userDefined": getUserDefined()
        }));
    }
    function setIsVisit(value){
        this.isVisit = value;
    }
    function getIsVisit(){
        return this.isVisit;
    }
    function setUserDefined(userDefined){
        this.userDefined = userDefined;
    }
    function getUserDefined(){
        return this.userDefined;
    }
    function getSection(){
        return this.section;
    }
    function setSection(section){
        this.section = section
    }

    // Kookie functions above
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

})(window);

// <script
//   src="https://code.jquery.com/jquery-3.2.1.min.js"
//   integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
//   crossorigin="anonymous">
// </script>

// $.ajax({ 
//   type: "POST", 
//   url: 'https://ec2-18-222-30-60.us-east-2.compute.amazonaws.com:80/data', 
//   crossDomain: true,
//   data: {
//       "visitorId":"TesteHTML",
//       "sessionStart":"2018-03-29T14:34:00.000",
//       "sessionEnd":"2018-03-29T19:34:00.000",
//       "originUrl":"localhost",
//       "section":"AJAX",
//       "isVisit":false,
//       "userDefined":[{
//           "name":"PicleRick",
//           "value":true
//       }]
//   }, 
//   dataType: 'json',
//   success: (data) => { 
//       console.log('dados inseridos com sucesso');
//   },
// });

// (function(){

//     // store the name of the Analytics object
//     window.GoogleAnalyticsObject = 'ga';
  
//     // check whether the Analytics object is defined
//     if (!('ga' in window)){
  
//       // define the Analytics object
//       window.ga = function(){
  
//         // add the tasks to the queue
//         window.ga.q.push(arguments);
  
//       };
  
//       // create the queue
//       window.ga.q = [];
  
//     }
  
//     // store the current timestamp
//     window.ga.l = (new Date()).getTime();
  
//     // create a new script element
//     var script   = document.createElement('script'),
//     script.src   = '//www.google-analytics.com/analytics.js';
//     script.async = true;
  
//     // insert the script element into the document
//     var firstScript = document.getElementsByTagName('script')[0];
//     firstScript.parentNode.insertBefore(script, firstScript)
  
//   })();
  