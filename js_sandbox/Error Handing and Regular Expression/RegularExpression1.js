let re;
re = /hello/;
// re=/hello/i;//i = case insensitive 
// re=/hello/g;//g = Global Search; it will search the entire paragraph 


//console.log(re);//return hello with slash i.e '/hello'; Gives the entire expression with slash
//console.log(re.source);//return hello without slash i.e. 'hello'; gives the actual expression that is inside slash

//exec() - Return result in an array if it match with regular expression otherwise return null
//const result=re.exec('hello World');//returns ["hello", index: 0, input: "hello World", groups: undefined] 
                                    //because given string matches with the RE and index position of matching RE is 0
//const result=re.exec('Brad hello World');//returns ["hello", index: 5, input: "Brad hello World", groups: undefined] 
                                            //because given string matches with the RE and index position of matching RE is 5
//const result=re.exec('hi World');//returns null because given string doesnot matches with the RE

// console.log(result);
// console.log(result[0]);//give the 0th index
// console.log(result.index);//Gives index at which RE match found
// console.log(result.input);//Give the input

//test()- Return true or false on the basis of match

//const result=re.test('hello')//true

//match() - return result array or null; similar to exec(), but the difference is it takes regular expression whereas exec() takes tring as an argument
// const str='hello There'
// const result=str.match(re);//Return ["hello", index: 0, input: "hello There", groups: undefined]
// console.log(result);

//search() - Return the index of the first match and if not found returns -1
// const str='Brad hello There';
// const result=str.search(re);
// console.log(result);//return 5 since index of "h" is 5

//replace() - Return new string with some or all matches of a pattern
const str = 'hello There';
const str1 = 'Welcome there';
const newStr = str.replace(re, 'Hi');//return 'Hi There' because str match with RE
const newStr1 = str1.replace(re, 'Hi');//return 'Welcome there' because stra doesn't match with RE

console.log(newStr);
console.log(newStr1);
