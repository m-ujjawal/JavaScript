const user = { email: 'jdoe@gmail.com' };

try {
    //Produce a ReferenceError because function is not defined
    // myFunction();//It Produce ReferenceError: myFunction is not defined

    //Produce a TypeError
    //null.myFunction();//It Produce TypeError: Cannot read property 'myFunction' of null

    //Will produce SyntaxError
    //eval('Hello World') //It produce SyntaxError: Unexpected identifier

    //Will Produce URLError
    //decodeURIComponent('%');//It Produces URIError: URI malformed because unable to decode it

    //Custom Error throw by using 'throw' keyword
    if (!user.name) {
        // throw 'User has no name';
        throw new SyntaxError('User has no name');//it produces Syntax error with the message specified; "SyntaxError: User has no name"
    }
} catch (e) {
    console.log(`User Error: ${e.message}`);//User Error: User has no name
    console.log(e);//ReferenceError: myFunction is not defined
    console.log('Its Error')//can also give my error; 'Its Error'
    // console.log(e.message);//Get only error message not error name; "myFunction is not defined"
    // console.log(e.name);//Get Error name not message; ReferenceError
    // console.log(e instanceof ReferenceError)//true;
    // console.log(e instanceof TypeError)//false;
} finally {
    //finally block always runs whether error occurs or not
    console.log('Finally runs regardless of result..');
}

console.log('Program continues....');//even though error comes above in try block; program won't terminate after catch this log will print