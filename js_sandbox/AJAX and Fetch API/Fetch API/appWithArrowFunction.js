document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternalApi);


//Get data from local text file
function getText() {
    fetch('text.txt')
        .then(res => res.text())
        .then(data => document.getElementById('output').innerHTML = data)
        .catch(err => console.log(err)
        );
}

//Get data from local Json file
function getJson() {
    fetch('posts.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);//return the json from posts.json
            let output = '';
            data.forEach(post => output += `<li> Title: ${post.title} Body ${post.body}</li>`
            );
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err)
        );
}

//Get data from External API

function getExternalApi() {
    fetch('https://api.github.com/users')
        .then(res => res.json()
        )
        .then(data => {
            console.log(data);//return the json from posts.json
            let output = '';
            data.forEach(user =>
                output += `<li> User Name: ${user.login}</li>`
            );
            document.getElementById('output').innerHTML = output;

        })
        .then(err => console.log(err)
        )
}