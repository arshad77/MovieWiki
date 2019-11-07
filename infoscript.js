function goBack() {
  window.history.back();
}

window.onload = function() {
  var url = window.location.href;
  params = url.split("?")[1].split("&");
  
  fetch(" http://www.omdbapi.com/?i=" + params + "&apikey=d6572750")
    .then(response => response.json())
    .then(data => {
     // this.console.log(data);

      //this.console.log(data.Title);
      var b = document.getElementsByTagName("header")[0];
      var h = document.createElement("h1");
      h.innerText = data.Title;
      b.appendChild(h);
      var img = document.getElementsByTagName("img")[0];
      img.src = data.Poster;
      img.width = 350;
      img.height = 300;
      var p1 = document.getElementsByTagName("p")[0];

      var table1 = document.createElement("TABLE");
      table1.align = "centre";
      table1.left = 100;

      var tableBody1 = document.createElement("TBODY");
      table1.appendChild(tableBody1);
      for (i in data) {
        if (i != "Ratings" && i != "Poster") {
          var tr = document.createElement("TR");
          tableBody1.appendChild(tr);
          var td = document.createElement("TD");
          td.width = "300";
          td.height = "50";
          td.style.fontWeight = "999";
          td.appendChild(document.createTextNode(i + " : "));
          tr.appendChild(td);
          var td2 = document.createElement("TD");
          td2.width = "90%";
          td2.appendChild(document.createTextNode(data[i]));
          tr.appendChild(td2);
        }
      }
      var tr = document.createElement("TR");
      tableBody1.appendChild(tr);
      var td = document.createElement("TD");
      td.width = "300";
      td.height = "50";
      td.style.fontWeight = "999";
      td.appendChild(document.createTextNode("Ratings" + " : "));
      tr.appendChild(td);
      p1.appendChild(table1);

      var table = document.createElement("TABLE");
      table.border = "1";
      table.align = "centre";

      var tableBody = document.createElement("TBODY");
      table.appendChild(tableBody);

      for (i in data.Ratings) {
        var tr = document.createElement("TR");
        tableBody.appendChild(tr);

        var td = document.createElement("TD");
        td.width = "200";
        td.appendChild(document.createTextNode(data.Ratings[i].Source));
        tr.appendChild(td);
        var td2 = document.createElement("TD");
        td2.width = "200";
        td2.appendChild(document.createTextNode(data.Ratings[i].Value));
        tr.appendChild(td2);
      }
      p1.appendChild(table);
    });
};
