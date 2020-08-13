//Singelton object is an immediate anonymous function and it can only return one instance of an objcet at a time
//Repeated calls of the constructor will return the same instance
//like module pattern it maintains a private reference which nothing from the outside can assess
//usecase- login user; same user can't login at two place at same time

const Singelton=(function(){
    let instance;

    function createInstance() {
        const object=new Object({name:'Brad'});
        return object;
    }

    return{
        getInstance:function () {
            if(!instance){
                instance=createInstance();
            }
            return instance;
        }
    }
})();

const instanceA=Singelton.getInstance();
const instanceB=Singelton.getInstance();
console.log(instanceA);//{name: "Brad"}

console.log(instanceA===instanceB);//true; single instance gets created for instanceA and instanceB
