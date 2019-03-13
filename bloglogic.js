$(document).ready(function() {

   //var ingredient = ["beet greens", "kale", "sweet potato", "celery", "cauliflower", "eggplant", "cherries", "pineapple", "zucchini", "carrots", "strawberries", "apples", "watermelon"]

   $(".btn").on("click", function() {
      event.preventDefault ();
      
      var ingredient = $(this).val();
      var queryURL = "https://api.edamam.com/search?q=" + ingredient + "&app_id=13aca331&app_key=655d159f7d3bf5923a193bcc6c3ea648&from=0&to=3&calories=200-500&health=alcohol-free"
         $.ajax({
            url: queryURL,
            method: "GET"
         }).then(function(response) {
               console.log(response);

               var results = response.hits;

               for (var i =0; i < results.length; i++) {
            
                     var recipename = results[i].recipe.label;
                     console.log(recipename);

                     var recipeimage = results[i].recipe.image;
                     console.log(recipeimage);

                     var recipeurl = results[i].recipe.url;
                     console.log(recipeurl);

                     var newDiv = $("<div class='pt-4'>");
                     newDiv.append(recipename);
                     var recImg = $("<a class='mr-2 ml-2'>");
                     newDiv.append(recImg);
                     newDiv.append(recImg);
                     recImg.attr("id", "recipeimage");
                     recImg.attr("href", recipeurl);
                     var recImgTag = $("<img>");
                     
                     //recTitle.attr("href", recipeurl);
                     recImgTag.attr("src", recipeimage);
                     recImgTag.attr("style", "text-center");
                     recImg.append(recImgTag);
                     $("#picks").prepend(newDiv);
                     // $("#recipeImg").attr('target="_blank"');
                     // $("#recipeImg").attr("href", recipeurl);
                     
                     // $("#picks").text(recTitle);
                     // $("#recipeImg").append(recImg);
               };


               
               
   
         });


   });
   
});