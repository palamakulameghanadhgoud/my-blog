user ={
    name: "yash",
    age: 18,
    mymeth: function() {
        console.log("Hello, this is my method");
    },
    mymeth2(){
        console.log("Hello, this is my second method");
    }  
}
function myfunc() {
    console.log("Hello, this is my function");
}
user.myfunc= myfunc;
user.mymeth()
user.mymeth2()
user.myfunc();
