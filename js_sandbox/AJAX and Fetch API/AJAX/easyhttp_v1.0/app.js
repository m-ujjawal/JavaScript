const http = new easyHTTP;

//Get All data
//Added new parameter callback to make it async
// http.get('https://jsonplaceholder.typicode.com/posts',
//     function (error, posts) {
//         if (error) {
//             console.log(error);
//         }
//         else {
//             console.log(posts);
//         }
//     });

// //Get Single data
// //Added new parameter callback to make it async
// http.get('https://jsonplaceholder.typicode.com/posts/1',
//     function (error, posts) {
//         if (error) {
//             console.log(error);
//         }
//         else {
//             console.log(posts);
//         }
//     });

//Post data
//Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

//Call post
// http.post('https://jsonplaceholder.typicode.com/posts', data,
//     function (error, post) {
//         if (error) {
//             console.log(error);
//         }
//         else {
//             console.log(post);
//         }
//     });

    //PUT Data
    http.put('https://jsonplaceholder.typicode.com/posts/1', data,
    function (error, post) {
        if (error) {
            console.log(error);
        }
        else {
            console.log(post);
        }
    });

    //DELETE Data
    http.delete('https://jsonplaceholder.typicode.com/posts/1',
    function (error, response) {
        if (error) {
            console.log(error);
        }
        else {
            console.log(response);
        }
    });