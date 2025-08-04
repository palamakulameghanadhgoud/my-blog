let user = {
    name:"KLH",
    age : 8,
    sizes:{
        h : 20,
        w : 10
    }
}
user1 = user;
user2=Object.assign({}, user);
user3 = structuredClone(user);
user2.name = "yash";
user3.name = "yashwanth";
console.log(user2); 
console.log(user3);
console.log(user1);
user2.sizes.h = 30;
console.log(user2);




