document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternalApi);


//Get data from local text file
function getText() {
    fetch('text.txt')
        .then(function (res) {
            //console.log(res);//It gives the reeponse and 'res.text' return promise; so will use 'res.text' to get promise
            return res.text();//return promise
        })//to get the value from promise we will use another .then
        .then(function (data) {
            //console.log(data);//return the text from text.txt
            document.getElementById('output').innerHTML = data;
        })
        .catch(function (err) {
            console.log(err);
        });
}

//Get data from local Json file
function getJson() {
    fetch('posts.json')
        .then(function (res) {
            //console.log(res);//It gives the response and 'res.json' return promise; so will use 'res.json' to get promise
            return res.json();//return promise
        })//to get the value from promise we will use another .then
        .then(function (data) {
            console.log(data);//return the json from posts.json
            let output = '';
            data.forEach(function (post) {
                output += `<li> Title: ${post.title} Body ${post.body}</li>`
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(function (err) {
            console.log(err);
        });
}

//Get data from External API

function getExternalApi() {
    fetch('https://api.github.com/users')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);//return the json from posts.json
            let output = '';
            data.forEach(function (user) {
                output += `<li> User Name: ${user.login}</li>`
            });
            document.getElementById('output').innerHTML = output;

        })
        .then(function (err) {
            console.log(err);
        })
}