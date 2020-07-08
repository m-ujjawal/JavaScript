//WINDOW METHODS / OBJECTS / PROPERTIES

//window.console.log(123);//since window is a global object so no need to mention window; 
                            //we can directly use console.log(123)

//Alert: use to get popup
//window.alert('Hello World'); // can also call without window

//Prompt: use to create pop-up which takes input
// const input = prompt();
// alert(input);

//confirm
// if(confirm('Are you Sure')){
//     console.log('YES');
// }
// else{
//     console.log('NO');
// }

//PROPERTIES

let val;

//Outer height and width
val=window.outerHeight;// It returns the browser heights including all interface elements (like toolbars/scrollbars)
val=window.outerWidth;// It returns the browser width including all interface elements (like toolbars/scrollbars)

//Inner height and width
val=window.innerHeight;// It returns the  height of a window's content area.
val=window.innerWidth;// It returns the  width of a window's content area.

//Scroll points
val=window.scrollY;//Returns the height of scroll bar(vertical) if we have otherwise return 0
val=window.scrollX;//Returns the width of scroll bar(horizontal) if we have otherwise return 0

//LOCATION OBJECT
val=window.location;// Give location in details, having it's method and properties
val=window.location.hostname;//127.0.0.1
val=window.location.port;//5500
val=window.location.href;//gives hostname plus port
val=window.location.search;// give the query string

//Redirect
// val=window.location.href='http://google.com';// can set the href and redirect to different URL

// Reload
// window.location.reload();// ULR will keep on reloading

//HISTORY OBJECT: used to get browsing history
//it stores the history of whatever sites we visit in negative decreasing order 
//like -1 will be latest visited site, -2 will be second latest visited site and so on
//window.history.go(-2); //It will navigate to the respective site as per the index we pass in the arg based on above logic
 
val=window.history.length;// check and return the length of the sites we have visited, i.e. no of sites behinds us.

//NAVIGATOR OBJECT: contains information about the browser.

val=window.navigator;//Details about browser 
val=window.navigator.appName;//Gives browser name
val=window.navigator.appVersion;//gives browser version
val=window.navigator.userAgent;
val=window.navigator.platform;//Windows platform
val=window.navigator.vendor;//Google Inc.
val=window.navigator.language;//en-US



console.log(val);