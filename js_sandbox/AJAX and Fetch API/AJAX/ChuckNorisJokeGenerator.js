document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    const number = document.querySelector('input[type="number"]').value;
    console.log('test', number);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://www.icndb.com/jokes/random/${number}`, true);
    xhr.setRequestHeader("X-My-Custom-Header", "some value");
    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            console.log(response);
            let output = '';
            if (response.type === 'success') {
                response.value.forEach(function (joke) {
                    output += `<li>${joke.joke}</li>`
                });
            }
            else {
                output += `<li>Something went wrong</li>`
            }
            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}

