//Async await is ES7 specification and is alternate way to create Promise
// function myFunc(){
//     return 'Hello';
// }

// console.log(myFunc());//Hello

//By adding async function returns Promise; no need to write 'new Promise(resolve, reject)'
// async function myFunc(){
//     return 'Hello';
// }

// console.log(myFunc());//return Promise so to print myFunc we have to use '.then'

// myFunc()
// .then(res=>console.log(res));//Return Hello

//await is used to wait untill Promise is resolved if we do any async operation

// async function myFunc(){
// //Creating promise which will resolve after 1 sec
//     const promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve('Hello'),1000);
//     });
//     const error=false;
//     if(!error){
//         const res=await promise;//Wait until promise is resolved
//         return res;
//     }
//     else{
//         await Promise.reject(new Error('Something went wrong'));
//     }

// }

// myFunc()
// .then(res=>console.log(res))//Hello after 1 sec when promise resolve
// .catch(err=>console.log(err));

//implementing async-await on fetch
async function getUsers() {
    const response = await fetch
        ('https://jsonplaceholder.typicode.com/users');
    //only proceed once fetch Promise is resolved
    const data = await response.json();
    //only proceed once second promise is resoved
    return data;
}

getUsers()
.then(users=>console.log(users))