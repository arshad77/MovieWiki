window.onload = function() {
  var input = document.getElementById("doj").value;
  if (input != "") {
    dayscounter();
  }
};

function dayscounter() {
  if (document.getElementsByTagName("h3")[0].hasChildNodes) {
    document.getElementsByTagName("h3")[0].innerHTML = "";
  }
  if (document.getElementsByTagName("p")[0].hasChildNodes) {
    document.getElementsByTagName("p")[0].innerHTML = "";
  }
  var travel = document.getElementById("doj").value;
  fetch(" http://www.omdbapi.com/?apikey=d6572750&s=" + travel + "")
    .then(response => {
      if (response.ok) {
        //console.log(response);
        return response.json();
      } else {
        // Find some way to get to execute .catch()
        document.getElementsByTagName("h3")[0].innerHTML =
          "Sorry Entry for this certain input is not found";
        throw new Error("something went wrong!");
      }
    })
    .then(data => {
      // Here's a list of repos!
      if (data.Response == "False") {
        document.getElementsByTagName("h3")[0].innerHTML =
          "Sorry Entry for this certain input is not found";
        throw new Error("something went wrong!");
      }
      var a = data;

      //console.log(a);
      //console.log(data.Search[0]);
      var b = document.getElementsByTagName("h3")[0];

      var h = document.createElement("h3");
      h.innerText = "Click a Movie Poster for it's detailed info";
      b.appendChild(h);

      for (var i = 0; i < a.Search.length; i++) {
        var button = document.createElement("button");
        var img = document.createElement("img");
        button.classList.add("grid-item");
        button.id = data.Search[i].imdbID;
        img.src = data.Search[i].Poster;
        img.width = 60;
        img.height = 70;
        img.alt = "logo";
        var h1 = document.createElement("h1");
        h1.innerText = data.Search[i].Title;

        button.appendChild(h1);
        button.appendChild(img);

        // 2. Append somewhere
        var body = document.getElementsByTagName("p")[0];

        body.appendChild(button);
        button.addEventListener("click", function() {
          var b = this.id;
          url = "info.html?" + encodeURIComponent(b);
          window.location = url;
        });
        //console.log(i);
      }
    })
    .catch(error => {
      console.log(error);
    });
}
