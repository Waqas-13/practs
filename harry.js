// let a = {
//     name: "waqas",
//     city: "peshawar",
//     status: "active"
// }

// console.log(a["name"]);
// a['name'] = "shahzaib";

// a['id'] = 1
// console.log(a);

// console.log(a.name);
// console.log(a.city);
// console.log(a.status);


// template letrals 
// let fname = "waqas";
// let lname = "khan";
// function fullname(fname,lname){
//     return `${fname} ${lname}`
// }
// let a = `Hello ${fullname(fname,lname)}`
// console.log(a);

// Arrow function 
// function a (name,age){
//     return `my name is ${name}- ${age}`
// }
// console.log(a("waqas",23));

// let a = (name,age)=>{
//     return `my name is ${name}- ${age}`
// }
// console.log(a("waqas",23));

// let a = (name,age) => `my name is ${name} and my age is ${age}`
// console.log(a("khan waqas ali",23));


// REST OPERATOR 

// function sum (name,course,...args){
//     let sum = 0;
//     for(let i in args){
//         sum += args[i]
//     }
//     console.log(`my name is ${name} and i have enrolled in ${course}`);
//     console.log(sum);
// }
// sum("waqas","full stack :",20,30,40)
// sum("shahzaib","labortry :",20,30,40)


// SPREAD OPERATOR 
// function sum (name,...args){
//     let sum = 0;
//     for(let i in args){
//         sum += args[i]
//     }
//     console.log(`my name is ${name}`);
//     console.log(sum);
// }
// var arr = [2,3];
// console.log("waqas",...arr);


// let array = [10,20,30];
// let array1 = [...array]
// array1.push(40);
// let array2 = [...array,...array1]
// console.log(array2)
// console.log(array);

// object letrals 

// let n = "name";
// let obj = {
//     course: "full stack",
//     [n]:"waqas ali"
// }
// console.log(obj);

// let n = "student";
// let obj = {
//     course: "full stack",
//     [n + "name"]:"waqas ali"
// }
// console.log(obj);

// let n = "student";
// let obj = {
//     course: "full stack",
//     [n+"name"]:"waqas ali",
//     details:function(){
//         return `${this.studentname} and i have enrolled in ${this.course}`

//     }

// }
// console.log(obj.details());


// let fname = "waqas"
// let lname = "ali"
// let course = "full stack"

// function student(fname,lname,course){
//     let fullname = (fname + " " +lname);
//     return {fullname,course};

// }
// console.log(student(fname,lname,course));
// let s = student(fname,lname,course)
// console.log(s.fullname);
// console.log(s.course);

// DISTRUCTURING 

// let array =["waqas", ,"peshawar"];
// // let[name,age,city]=array;
// let [name,age=23,city]=array
// console.log(name,age,city);

// let array =["waqas", ,"peshawar",["male",200]];
// // let[name,age,city]=array;
// let [name,age=23,city,[gender,salary]]=array
// console.log(name,age,city,gender,salary);

// let array =["waqas", 23,"peshawar"];
// let [name,...args] = array;
// console.log(name,args);

// function user ([name,age,city]){
//     console.log(name,age,city);
// }
// user(["waqas",23,"peshawar"])

// function user(){
//     return ["waqas",23,"peshawar"]
// }
// let[name,age,city]=user();
// console.log(name,age,city);


// DISTRUCTURING IN OBJECT 
// let object = {
//     name:"waqas",
//     age: 23,
//     city: "peshawar"
// }
// let {name:n,age:a,city:c} = object;
// console.log(name,age,city);
// console.log(n,a,c);

// object oriented programming 
// class hello{
//     message(){
//         console.log("hello everyone");
//     }
//     name(){
//         console.log("hello i am waqas");
//     }
// }
// let a = new hello();
// a.message()
// a.name()


// class student {
//     constructor(name,age) {
//         this.studentname = name;
//         this.studentAge = age;

//     }
//     hello(){
//     console.log(`my name is ${this.studentname} and my age is ${this.studentAge} `);
// }
//     static staticMethod(){
//         console.log("its a static method");
//     }
// }
// let a = new student("waqas",23)
// let b = new student("shahzaib",22)
// a.hello()
// b.hello()
// student.staticMethod()

// filter 

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];
// let userbooks = books.filter( (bk) => bk.edition>=2000 && bk.title==="Book Eight" );
// console.log(userbooks);


// Map()

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let mynumbers = numbers.map( (num) => num*20 ).map( (num)=> num+1 ).filter((num)=> num >= 40);
// console.log(mynumbers);


// reduce ()

// let courses = [
//     {
//         id:1,
//         course:'full stack',
//         price:1000
//     },
//     {
//         id:1,
//         course:'full stack',
//         price:1000
//     },
//     {
//         id:1,
//         course:'full stack',
//         price:1000
//     },
//     {
//         id:1,
//         course:'full stack',
//         price:1000
//     },
// ]

// let shopingcart = courses.reduce( (acc,itemprice)=> acc + itemprice.price,0 );
// console.log(shopingcart);

// find and findIndex()

// let ages = [12,17,30,45]
// let Adultages = ages.find(checkadult);
// function checkadult(age){
//     return age >= 18
// }
// console.log(Adultages);

// let ages = [10,30,34];
// let adult = ages.findIndex(checkadult);
// function checkadult(age){
//     return age >= 18;
// }
// console.log(adult);
