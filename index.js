

//document.getElementById('signupForm').onclick = createUser(document.getElementById('emailInput').value, document.getElementById('passwordInput').value, document.getElementById('orgInput').value, document.getElementById('nameInput').value);

function createUser() {
    //console.log(document.getElementById('emailInput').value, document.getElementById('passwordInput').value, document.getElementById('orgInput').value, document.getElementById('nameInput').value);
    console.log("we in there");
    
    const data = JSON.stringify({
        "clientsteps": "test",
        "billinginfo": "test",
        "surveyanalysis": "test",
        "email": document.getElementById('emailInput').value,
        "password": document.getElementById('passwordInput').value,
        "isadmin": "no",
        "organization": document.getElementById('orgInput').value,
        "name": document.getElementById('nameInput').value
      });

      console.log(data);

      
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          console.log(this.responseText);
          location.replace("survey.html");
        }
      });
      
      xhr.open("POST", "http://107.21.61.106:8000/rpc/signup");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW5zIn0.PQPv9vR9h2tj0k9oeHOHFjAjqMWlaugTE-wLfzdIRCQ");
      
      xhr.send(data);
      
      //location.replace("survey.html");
      
}

function loginUser () {


  const data = JSON.stringify({
    "email": document.getElementById('emailLogin').value,
    "password": document.getElementById('passwordLogin').value
  });

  //console.log(data);

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
      if (this.status == 403) {
        alert("Incorrect username or password");
      }
      else {
        location.replace("survey.html");
      }
    }
  });

  xhr.open("POST", "http://107.21.61.106:8000/rpc/login");
  xhr.setRequestHeader("Content-Type", "application/json");
  
  xhr.send(data);

  
 
}


/*

window.addEventListener( "load", function () {
    
    function signup(email, password, organization, name) {
        console.log(email, password, organization, name);
        
        const data = JSON.stringify({
            "clientsteps": "test",
            "billinginfo": "test",
            "surveyanalysis": "test",
            "email": email,
            "password": password,
            "isadmin": "no",
            "organization": organization,
            "name": name
          });
          
          const xhr = new XMLHttpRequest();
          xhr.withCredentials = true;

           // Define what happens on successful data submission
           xhr.addEventListener( "load", function(event) {
            alert( event.target.responseText );
           } );  
  
           // Define what happens in case of error
           xhr.addEventListener( "error", function( event ) {
             alert( 'Oops! Something went wrong.' );
           } );
          
          xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
              console.log(this.responseText);
            }
          });
          
          xhr.open("POST", "http://107.21.61.106:8000/rpc/signup");
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW5zIn0.PQPv9vR9h2tj0k9oeHOHFjAjqMWlaugTE-wLfzdIRCQ");
          
          xhr.send(data);
          
    }
  
    // Access the form element...
    const form = document.getElementById( "signupForm" );
  
    // ...and take over its submit event.
    form.addEventListener( "submit", function ( event ) {
      event.preventDefault();
      console.log("it done been submitted boy")
      signup(document.getElementById('emailInput'), document.getElementById('passwordInput'), document.getElementById('orgInput'), document.getElementById('nameInput'));
    } );
  } );

*/