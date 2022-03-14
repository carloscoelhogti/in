function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML = this.responseText;
      }
    xhttp.open("GET", "c:/MCABalEntrada.txt", true);
    xhttp.send();
  }