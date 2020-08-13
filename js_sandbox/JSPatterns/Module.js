//Basic Structure

//IIFEs
// (function () {
//     //Declare private vars and functions

//     return {
//         //Declare public var and functions
//     }
// })();

//STANDARD MODULE PATTERN
const UICtrl=(function(){
    //variable and method are private; cannot be accessed by outside this; can only be accessed by inside return
    let text='Hello World';
    const changeText=function(){
        const element=document.querySelector('h1');
        element.textContent=text;
    }

    return{
        callChangeText:function(){
            changeText();//can access private function only from return body
            console.log(text);//Hello World; able to access privete variable
        }
    }
})();

UICtrl.callChangeText();
//UICtrl.changeText();//Error:Uncaught TypeError: UICtrl.changeText is not a function; can't access private function
//console.log(UICtrl.text);//Undefined; can't access private variable

//REVEALING MODULE PATTERN
//Similar to MODULE PATTERN but instead of returning public function map an object literals and you map to private function that you want to reveal
// it's called REVEALING MODULE PATTERN because we can revel certain method from your module

const ItemCtrl=(function(){
    let data=[];

    function add(item){
        data.push(item);
        console.log('Item Added...');
    }

    function get(id){
        return data.find((item)=>{
            return item.id===id;
        });
    }

    return{
        //Revealing private method
        add:add,
        get:get
    }
})();

//Can directly call private method because it's revealled
ItemCtrl.add({id:1,name:'John'});//Item Added...
console.log(ItemCtrl.get(1));//{id: 1, name: "John"}