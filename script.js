let userInput = $("#user-input").val();


$("#add-vibe").on("click", function(event) {
userInput = $("#user-input").val();
// let randomSelector = Math.floor(Math.random() * 15);
// console.log(randomSelector);
event.preventDefault()
const queryURL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=" + userInput + "&key=AIzaSyAIRa_UYE_tGr5zwxbcAlrStZrQRhOL9PE";

console.log(queryURL);
console.log(userInput);


$.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      console.log(response)
      console.log(response.items[Math.floor(Math.random()*15)]);
    const vidId = (response.items[Math.floor(Math.random()*15)].id.videoId);
    $("#vibe-form").append("www.youtube.com/watch?v=" + vidId);
    // const videoLink= "youtube.com/watch?v=" + vidId;
      let iFrame = document.createElement("iframe");
      iFrame.setAttribute("src", "http://www.youtube.com/embed/" + vidId);
      $("#vibe-form").append(iFrame);

    });

    const queryURL2 = "https://books.googleapis.com/books/v1/volumes?q=" + userInput + "&key=AIzaSyAIRa_UYE_tGr5zwxbcAlrStZrQRhOL9PE";

  $.ajax({
      url: queryURL2,
      method: "GET"
    })
      .then(function(response) {
        console.log(response);
        console.log(response.items[Math.floor(Math.random()*10)].volumeInfo.title);
    });
    
    const queryURL3 = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=55PxXERn6D1oI3276vKd8magCfZxroen";
    $.ajax({
      url: queryURL3,
      method: "GET"
    })
      .then(function(response) {
        console.log(response);
        const gifDiv = $("<div>");
        const vibeGif = $("<img>");
        vibeGif.attr("src", response.data[Math.floor(Math.random()*10)].images.fixed_height.url);


        gifDiv.prepend(vibeGif);

        $("#vibe-form").prepend(gifDiv);
        
});




});
