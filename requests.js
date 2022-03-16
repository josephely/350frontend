const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    //console.log(this.responseText);
    document.getElementById("first").innerHTML = this.responseText;
  }
});

xhr.open("GET", "http://107.21.61.106:8000/users");

xhr.send(data);
