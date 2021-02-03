let userInput = $("#vibeCheck").val();
let randomNum = Math.floor(Math.random()*10);
console.log(randomNum);

$("#generate").on("click", function (event) {
  event.preventDefault()
  userInput = $("#vibeCheck").val();
  $(".card-group").removeClass("vibeContent");
  $(".card").removeClass("vibeContent");
  $("#bookCard").empty();
  $("#musicCard").empty();
  $("#vidCard").empty();
  $("#bookTitle").empty();
  $("#bookAuthor").empty();
  


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
      $(".vidContent").append(iFrame);

    });

    const queryURL2 = "https://books.googleapis.com/books/v1/volumes?q=" + userInput + "&key=AIzaSyAIRa_UYE_tGr5zwxbcAlrStZrQRhOL9PE";

  $.ajax({
      url: queryURL2,
      method: "GET"
    })
      .then(function(response) {
        console.log(response);
        randomNum = Math.floor(Math.random()*10);
        console.log(randomNum);

      const bookImg = document.createElement("img");

      bookImg.setAttribute("src", response.items[randomNum].volumeInfo.imageLinks.thumbnail);
      $(bookImg).addClass("book-image");
      $(bookImg).attr({
        "title": response.items[randomNum].volumeInfo.title,
      });
      $("#bookCard").append(bookImg);

      //appends book title
      const bookTitle = (response.items[randomNum].volumeInfo.title);
      const bookLink = response.items[randomNum].volumeInfo.previewLink;
      console.log(bookLink);
      // $("#bookTitle").append(bookTitle);
      $("#bookTitle").append($("<a>" + bookTitle + "</a>").attr("href",  bookLink));


      // appends book author
      const bookAuthor = (response.items[randomNum].volumeInfo.authors);
      $("#bookAuthor").append(bookAuthor);

      // // appends book description
      // const bookInfo = (response.items[randomNum].searchInfo.textSnippet);
      // $("#bookInfo").append(bookInfo);

   
      
      
      
    });
    
    const queryURL3 = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=55PxXERn6D1oI3276vKd8magCfZxroen";
    $.ajax({
      url: queryURL3,
      method: "GET"
    })
      .then(function(response) {
        randomNum = Math.floor(Math.random()*10);
        console.log(response);
        const gifDiv = $("<div>");
        const vibeGif = $("<img>");
        vibeGif.attr("src", response.data[randomNum].images.fixed_height.url);


        gifDiv.prepend(vibeGif);

        $("#musicCard").prepend(gifDiv);
        
});

localStorage.setItem('inputs', userInput);
let pastVibe = localStorage.getItem('inputs');
$("#recent-title").append("<ul>" + pastVibe + "</ul>").val();
});


