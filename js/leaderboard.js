function fillLeaderBoard() {
  var retrievedObject = JSON.parse(localStorage.getItem('allScores'));

  var tbody = document.getElementById('tbody');

  for (let item of retrievedObject) {
    var tr = "<tr>";
    tr += "<td>" + item.username + "</td><td>" + item.score + "</td></tr>";
    tbody.innerHTML += tr;
  }
}