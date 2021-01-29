
$("#add-vibe").on("click", function(event) {

event.preventDefault()
console.log("hello")
const userInput = $("#user-input").val();
const queryURL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + userInput + "&key=AIzaSyAIRa_UYE_tGr5zwxbcAlrStZrQRhOL9PE";

console.log(queryURL);
console.log(userInput);


$.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      console.log(response.items[0]);
    const vidId = (response.items[0].id.videoId);
    $("#vibe-form").append("www.youtube.com/watch?v=" + vidId);

    });
});