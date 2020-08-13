let re;
// Literal Characters
re = /hello/;
re = /hello/i;//i- case insensitive

//Metacharacher Symbols
re = /^h/i; //Must start with "h" and case insensitive
re = /d$/i; //Must end with "d" and case insensitive
re = /world$/i; //Must end with "world" and case insensitive
re = /^hello$/i; //Must begin and end with "hello" and case insensitive
re = /h.llo/i;// matches any one character in place of ".";
            //dot works as a placeholder or wildcard, we can keep any sigle characher in place of dot
re = /h*llo/i;// matches any  character 0 or more times in place of astrik
re = /gre?a?y/i; //Optional character; matches either with "grey" or "gray" or "gry"; 
                //but cannot match with any character otherthan "e" or "a", can also match without "a" or "e" because it's optional
re = /gre?a?y\?/i; //Escape characher; it means "e" and "a" is optional like previous example
                    //but how to make "?" as optional i.e to behave "?" as literal; 
                //since question mark is used to make optional like above example so put "\" infront of "?";to consider "?" as a literal.s

//Brackets [] - character Sets
re = /gr[ea]y/i; //Must be "a" or "e" like "grey" or "gray". but cannot be nothing like "gry"
re = /[GF]ray/; //Must be "G" or "F" like "Gray" or "Fray". but cannot be nothing like "ray" or "Xray"
re = /[^GF]ray/; //Must anything except "G" or "F". Don't confuse, same symbol "^" is used for start with; But if we put "^" inside brackets that means not
re = /[A-Z]ray/; //Matches can start with any upper case
re = /[a-z]ray/; //Matches can start with any lower case
re = /[A-Za-z]ray/; //Matches can start with any letter irrespective of cases
re = /[0-9]ray/; //Match any degit

//Braces {} - Quantifiers
re = /Hel{2}o/i; //"l" Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; //"l" Must occur exactly between {m,n} including m and n amount of times
re = /Hel{2,}o/i; //"l" Must occur at least {m} times

//Paranthesis () - Grouping
re = /([0-9]x){3}/; //Grouping any number between 0-9 followed by x
re = /^([0-9]x){3}$/; //Grouping any number between 0-9 followed by x at only 3 times like 2x2x2x

//Shorthand Character Classes
re = /\w/; //Word Character - alphanumeric or underscore
re = /\w+/; //+ = one or more alphanumeric or underscore
re = /\W/; //other than alphanumeric or underscore like special character except underscore
re = /\d/; //Match any digit
re = /\d+/; //Match any digit 0 or more times
re = /\D/; //Match any non digit
re = /\s/; //Match whitespace char
re = /\S/; //Match non whitespace char
re = /Hell\b/; //Word boundary

//Assertion
re=/x(?=y)/; //Match x only if followed by y
re=/x(?!y)/; //Match x only if NOT followed by y

//String to match
const str = '3x3xxy3x3x3yx3x';

//Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does NOT matched ${re.source}`);
    }
}

reTest(re, str);