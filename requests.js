function getSuggestions () {
  var data = {};
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
      //console.log(request, request.readyState)
      if(request.readyState === 4) {
          data = JSON.parse(request.responseText);
      }
  });
  request.open('GET', 'http://107.21.61.106:8000/securitysuggestions');
  request.send();
  return data;
}

let data = getSuggestions();
console.log(data[0].suggestionbody);

/*
let text  = "";
for (let x in data) {
      //console.log(data[x].suggestionbody);
    text = text + '<li class="list-group-item">' + data[x].suggestionbody + '</li>';
}
document.getElementById("list").innerHTML = text;
*/
