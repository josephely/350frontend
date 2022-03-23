const answers = [];

var inputs = document.getElementById("questionForm").elements;


function showSuggestions() {

    var first = inputs[0].value;
    //console.log(first);
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
    
    getSuggestions((data) => {
        //console.log("button pressed");
        
        let text  = "";
        for (let x in data) {
            if (inputs[x].value === 'n') {
                text = text + '<li class="list-group-item">' + data[x].suggestionbody + '</li>';
            }
            
        }
        document.getElementById("list").innerHTML = text;
    });
}

/******************************************************************************************/

const getQuestions = (callback) => {
    const questionRequest = new XMLHttpRequest();

    questionRequest.addEventListener('readystatechange', () => {
        //console.log(request, request.readyState)
        if(questionRequest.readyState === 4) {
            const questionData = JSON.parse(questionRequest.responseText)
            console.log(questionData.responseText);
            callback(questionData);
        }
    });

    questionRequest.open('GET', 'http://107.21.61.106:8000/surveyquestions');
    questionRequest.send();
}

getQuestions((questionData) => {
    //console.log("button pressed");
    let text  = "";
    for (let x in questionData) {
        //console.log(data[x].suggestionbody);
        
        text = text + '<div class="mb-3"><label for="emailInput" class="form-label" id="' + x + '">' + questionData[x].surveyquestions + '</label><input type="text" class="form-control" placeholder="your answer">';
    }
    //text = text + '<input type="submit" value="Submit">';
    document.getElementById("questionForm").innerHTML = text;
});

