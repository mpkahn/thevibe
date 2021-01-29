let userInput = $("#user-input").val();

$("#add-vibe").on("click", function (event) {
  userInput = $("#user-input").val();
  event.preventDefault()


  const queryURL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + userInput + "&key=AIzaSyAIRa_UYE_tGr5zwxbcAlrStZrQRhOL9PE";

  console.log(queryURL);
  console.log(userInput);


  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      console.log(response.items[0]);
      const vidId = (response.items[0].id.videoId);
      $("#vibe-form").append("www.youtube.com/watch?v=" + vidId);

    });

  const queryURL2 = "https://books.googleapis.com/books/v1/volumes?q=" + userInput + "&key=AIzaSyBv3j_f2yZkDmSg1UdFZFtJT1v9rOIBudY"

  $.ajax({
    url: queryURL2,
    method: "GET"
  })
    .then(function (response) {
      console.log(response);
      console.log(response.items[0]);

      //appends book title
      const bookTitle = (response.items[0].volumeInfo.title);
      $("#vibe-form").append(bookTitle);

      // appends book description
      const bookInfo = (response.items[0].searchInfo.textSnippet);
      $("#vibe-form").append(bookInfo);

      // appends book author
      const bookAuthor = (response.items[0].volumeInfo.authors);
      $("#vibe-form").append(bookAuthor)

    })
});



