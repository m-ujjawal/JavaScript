document.getElementById('button').addEventListener('click',
    loadData);

function loadData() {
    //Create an XHR Object
    const xhr = new XMLHttpRequest();

    //OPEN method: takes 3 parameter 1st-type of reqest, 2nd-source, 3rd-boolean(true for async request and false for sync request)
    xhr.open('GET', 'data.txt', true);

    //Optional- Used for Spinner/Loaders
    xhr.onprogress = function () {
        console.log('READYSTATE in onprogress', xhr.readyState);//return 3
    }

    console.log('READYSTATE ', xhr.readyState);//return 1; can check the state of the request
    //ONLOAD method: called after response comes
    // xhr.onload = function () {
    //  console.log('READYSTATE ', xhr.readyState);
    //     //Check status
    //     if (this.status === 200) {
    //         console.log(this.responseText);
    //     }
    // }

    //Older sysntax of onload
    xhr.onreadystatechange = function () {
        console.log('READYSTATE ', xhr.readyState);//return 2,3,4;can check the state of the request
        if (this.status === 200 && this.readyState === 4) {
            //console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>
            ${this.responseText}</h1>`
        }
    }

    //calls in case of error or something goes wrong ;
    xhr.onerror = function () {
        console.log('Request error...');
    }

    //SEND method
    xhr.send();

    //readyState Values : it tells the state of the current request. 
    //0: request not initialized
    //1: server connection established
    //2: request received
    //3: processing request
    //4: request finished and response is ready

    //HTTP Statuses
    //200:OK
    //403: "Forbidden"
    //404: "NOt Found"
}
