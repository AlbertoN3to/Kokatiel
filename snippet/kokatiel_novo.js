// const Http = new XMLHttpRequest();
// const url='https://ec2-18-222-30-60.us-east-2.compute.amazonaws.com:80/data';
// Http.open("GET", url);
// Http.send();

// Http.onreadystatechange = (e) => {
//   console.log(Http.responseText)
//   console.log(e)
// }

<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous">
</script>

$.ajax({ 
  type: "POST", 
  url: 'https://ec2-18-222-30-60.us-east-2.compute.amazonaws.com:80/data', 
  crossDomain: true,
  data: {
      "visitorId":"TesteHTML",
      "sessionStart":"2018-03-29T14:34:00.000",
      "sessionEnd":"2018-03-29T19:34:00.000",
      "originUrl":"localhost",
      "section":"AJAX",
      "isVisit":false,
      "userDefined":[{
          "name":"PicleRick",
          "value":true
      }]
  }, 
  dataType: 'json',
  success: (data) => { 
      console.log('dados inseridos com sucesso');
  },
});