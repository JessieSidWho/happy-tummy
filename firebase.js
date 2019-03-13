$(document).ready(function () {

  $("#divTitle").hide();

  // Initialize Firebase for Newsletter Sign-up
  var config = {
    apiKey: "AIzaSyB5XCbn8_Cy0CnTXzHzd0qe_Q7g3ylIg0k",
    authDomain: "happytummy-f3257.firebaseapp.com",
    databaseURL: "https://happytummy-f3257.firebaseio.com",
    projectId: "happytummy-f3257",
    storageBucket: "happytummy-f3257.appspot.com",
    messagingSenderId: "832652500325"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  var email = "";

  $("#submit").on("click", function (event) {
    event.preventDefault();
    email = $("#email-input").val().trim();
    database.ref("/emails").push({
      email: email
    });
    clearForm();
  });

  var clearForm = function () {
    $("#email-input").val("");
  }



  // Some more stuff












  // 

  // Nutrition API edamam.com
  var queryURL = "https://api.edamam.com/api/nutrition-data?app_id=b7bd3349&app_key=6b0366fe435019d42d6fa852ce355631&ingr=1%20large%20apple";

  // AJAX call
  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).then(function (response) {
  //   for (i = 0; i < response.totalNutrients.length; i++) {
  //     let results = JSON.stringify(response.totalNutrients)
  //     console.log(response.totalNutrients);
  //   }
  //   console.log(response.totalNutrients);

  // });


  var apiKey = "XqAb6SY6MQatvRwvkg3GImwvXyEtX0iPdWSr51ze";
  var ndbno0 = "09038";
  var ndbno1 = "01123";
  var ndbno2 = "02047";
  var ndbno3 = "02030";
  var ndbno4 = "45049082";
  var ndbno5 = "10864";
  var ndbno6 = "11156";
  var type = "b";
  var format = "json";

  var queryURLUSDA = "http://api.nal.usda.gov/ndb/reports/?ndbno=" + ndbno0 + "&type=" + type + "&format=" + format + "&api_key=" + apiKey;

  $.get(queryURLUSDA).then(function(response){

  });
  $.ajax({
    url: queryURLUSDA,
    method: "GET"
  }).then(function (response) {
    //console.log(response.report.food.nutrients);
    console.log(response.report.food.nutrients[0].value);
    // console.log(response.report.food.nutrients[0].unit);
  })

  var queryURLUSDA = "http://api.nal.usda.gov/ndb/reports/?ndbno=" + ndbno1 + "&type=" + type + "&format=" + format + "&api_key=" + apiKey;

  $.get(queryURLUSDA).then(function(response){

  });
  $.ajax({
    url: queryURLUSDA,
    method: "GET"
  }).then(function (response) {
    //console.log(response.report.food.nutrients);
    console.log(response.report.food.nutrients[0].value);
    // console.log(response.report.food.nutrients[0].unit);
  })

  var queryURLUSDA = "http://api.nal.usda.gov/ndb/reports/?ndbno=" + ndbno2 + "&type=" + type + "&format=" + format + "&api_key=" + apiKey;

  $.get(queryURLUSDA).then(function(response){

  });
  $.ajax({
    url: queryURLUSDA,
    method: "GET"
  }).then(function (response) {
    //console.log(response.report.food.nutrients);
    console.log(response.report.food.nutrients[0].value);
    // console.log(response.report.food.nutrients[0].unit);
  })

  var queryURLUSDA = "http://api.nal.usda.gov/ndb/reports/?ndbno=" + ndbno3 + "&type=" + type + "&format=" + format + "&api_key=" + apiKey;

  $.get(queryURLUSDA).then(function(response){

  });
  $.ajax({
    url: queryURLUSDA,
    method: "GET"
  }).then(function (response) {
    //console.log(response.report.food.nutrients);
    console.log(response.report.food.nutrients[0].value);
    // console.log(response.report.food.nutrients[0].unit);
  })

  var queryURLUSDA = "http://api.nal.usda.gov/ndb/reports/?ndbno=" + ndbno4 + "&type=" + type + "&format=" + format + "&api_key=" + apiKey;

  $.get(queryURLUSDA).then(function(response){

  });
  $.ajax({
    url: queryURLUSDA,
    method: "GET"
  }).then(function (response) {
    //console.log(response.report.food.nutrients);
    console.log(response.report.food.nutrients[0].value);
    // console.log(response.report.food.nutrients[0].unit);
  })

  var queryURLUSDA = "http://api.nal.usda.gov/ndb/reports/?ndbno=" + ndbno5 + "&type=" + type + "&format=" + format + "&api_key=" + apiKey;

  $.get(queryURLUSDA).then(function(response){

  });
  $.ajax({
    url: queryURLUSDA,
    method: "GET"
  }).then(function (response) {
    //console.log(response.report.food.nutrients);
    console.log(response.report.food.nutrients[0].value);
    // console.log(response.report.food.nutrients[0].unit);
  })
  
  var queryURLUSDA = "http://api.nal.usda.gov/ndb/reports/?ndbno=" + ndbno6 + "&type=" + type + "&format=" + format + "&api_key=" + apiKey;

  $.get(queryURLUSDA).then(function(response){

  });
  $.ajax({
    url: queryURLUSDA,
    method: "GET"
  }).then(function (response) {
    //console.log(response.report.food.nutrients);
    console.log(response.report.food.nutrients[0].value);
    // console.log(response.report.food.nutrients[0].unit);
  })



});
