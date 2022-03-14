function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML = this.responseText;
      }
    xhttp.open("GET", "https://github.com/carloscoelhogti/in/blob/main/AUTOMACAO/MCABalEntrada.txt", true);
    xhttp.send();
  }
