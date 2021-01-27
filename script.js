
// $("search").on("click", function(event) {
// console.log("hello")
// event.preventDefault()
// const userInput = $("query").val().trim();
const queryURL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=happy&key=AIzaSyAIRa_UYE_tGr5zwxbcAlrStZrQRhOL9PE";

console.log(queryURL);
// console.log(userInput);


$.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      console.log(response);
     
    });
// });