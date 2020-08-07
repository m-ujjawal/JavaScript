function easyHTTP() {
    this.http = new XMLHttpRequest();
}

//Make an HTTP GET Request
//2nd parameter callback is added to make it async
easyHTTP.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);

    //Added to fix the error getting from this.http.status
    let self = this;
    this.http.onload = function () {
        //this.http.status gives an error "cannot read property 'status' of undefined"
        //because this.http is undefined in this case but this.http is not undefined 
        //in open, onload and send method. The reason for that is inside the function this 
        //keyword pretends to that function, So it's in a different scope right here.
        //In ES6 we can fix this issue by using arrao function but here we can have another variable 
        //and this can be assigned to that variable and will use that variable instead of this.

        // if (this.http.status === 200) {
        //     console.log(this.http.responseText);
        // }
        if (self.http.status === 200) {
            //we cannot return directly, it will give undefined because the it was returned before the send like synchronous method
            //simillar situation we have seen in sync-async; to fix it we can use callback function  
            //return self.http.responseText;
            callback(null, self.http.responseText);//1st parameter has been added to send the error if occur during fetching
        }
        else {
            callback('Error: ' + self.http.status);

        }
    }
    this.http.send();
}

//Make an HTTP POST Request

easyHTTP.prototype.post = function (url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type',
        'application/json');

    let self = this;
    this.http.onload = function () {
        callback(null, self.http.responseText);

    }
    this.http.send(JSON.stringify(data));
}

//Make an HTTP PUT Request
easyHTTP.prototype.put = function (url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type',
        'application/json');

    let self = this;
    this.http.onload = function () {
        callback(null, self.http.responseText);

    }
    this.http.send(JSON.stringify(data));
}

//Make an HTTP DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
    this.http.open('DELETE', url, true);
    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, 'POST DELETED');//1st parameter has been added to send the error if occur during fetching
        }
        else {
            callback('Error: ' + self.http.status);

        }
    }
    this.http.send();
}