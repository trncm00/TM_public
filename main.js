//numbers api functionality 

const form = document.querySelector('form');
const factDiv = document.querySelector('.number-fact');
 
form.addEventListener('submit', (e) =>{
e.preventDefault();
const number = e.target.querySelector('input[type="number"]').value;
const loadText ="Wait just a moment...";
factDiv.innerHTML = loadText;
const baseURL =  'https://cors-anywhere.herokuapp.com/http://numbersapi.com/';
fetch(baseURL + number,
    {
        method: "GET",
        headers:{
            'x-requested-with':'text/plain'
        }
    }
    )
.then(response => response.text())
.then(text => factDiv.innerHTML = text);
})




    window.addEventListener("DOMContentLoaded", function () {
        // get the form elements defined in your form HTML above

        var form = document.getElementById("my-form");
        // var button = document.getElementById("my-form-button");
        var status = document.getElementById("status");

        // Success and Error functions for after the form is submitted

        function success() {
            form.reset();
            status.classList.add("success");
            status.innerHTML = "Thanks!";
        }

        function error() {
            status.classList.add("error");
            status.innerHTML = "Oops! There was a problem.";
        }

        // handle the form submission event

        form.addEventListener("submit", function (ev) {
            ev.preventDefault();
            var data = new FormData(form);
            ajax(form.method, form.action, data, success, error);
        });
    });

    // helper function for sending an AJAX request

    function ajax(method, url, data, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                success(xhr.response, xhr.responseType);
            } else {
                error(xhr.status, xhr.response, xhr.responseType);
            }
        };
        xhr.send(data);
    }

/*
    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)
    */

