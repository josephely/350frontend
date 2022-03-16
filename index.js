const getSuggestions = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        //console.log(request, request.readyState)
        if(request.readyState === 4) {
            const data = JSON.parse(request.responseText)
            callback(data);
        }
    });

    request.open('GET', 'http://107.21.61.106:8000/securitysuggestions');
    request.send();
}

document.getElementById("resultButton").addEventListener("click", getSuggestions((data) => {
    let text  = "";
    for (let x in data) {
        //console.log(data[x].suggestionbody);
        text = text + '<li class="list-group-item">' + data[x].suggestionbody + '</li>';
    }
    //document.getElementById("first").innerHTML = data[0].suggestionbody;
    console.log(text);
    document.getElementById("list").innerHTML = text;
}))





