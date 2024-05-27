//npm install typescript --save-dev
//npm i typescript -g

//?Infer types(Implicit types)
// let userName="Neeraj N G"
// let subscribers=30_000

// //?Defining types(Explicit types)
// let userName : string = "Neeraj";
// let subscribers : number =40_000;
// let isActive: boolean= true;
// let skills: string[]=["js","ts","css"]
// let count: number[]=[12,122,123]
// let emptyArr:[]=[];
// let userDetail: {name:string, age:number,salary:number }={name:"NG",age:21, salary:40_0000}
// console.log(subscribers)
//console

// //?interface(useful while defining more types )
// interface Details{
//     name:string; 
//     age:number; 
//     salary:number;
//     getName:()=>void;
// }

// let userDetail: Details={
//     name:"NG",
//     age:21, 
//     salary:40_0000,
//     getName(){
//         return this.name
//     }
// }
// console.log(userDetail.getName())

// //?Type(smiliar to interface; but slight differnce) and Optional(?) 
// type Details = {
//     name:string; 
//     age:number | string; //union(|) operator in typescript 
//     salary?:number;
//     getName?:()=>void;
// }

// let userDetail: Details={
//     name:"NG",
//     age:"12", 
//     salary:40_0000,
//     getName(){
//         return this.name
//     }
// }
// let skills:(string | number)[]=["js","ts","css",100]

// //?Functions

// type Detailss = {
//     name:string; 
//     age:number | string; 
//     salary:number;
//     getName?:()=>void;
// }

// let userDetails: Detailss={
//     name:"NG",
//     age:12, 
//     salary:40_0000,
//     getName(){
//         return this.name
//     }
// }

// function getUsername(userDetails:Detailss):string{
//     return "userDetails.salary"
// }

// const val=getUsername(userDetails)

// val.split("")

// let foo=123

//simple string
// function hi(foo:number):number{
//     return foo
// }

// console.log(hi(foo))

//Named types(custom types)

// type StatusType = "pending" | "completed" | "failed" 
// type ToggleSwitch ="on"| "off"

// let currentStatus:StatusType = "pending"
// let tgswtch:ToggleSwitch = "off"
// //from API
// const response= 200

// if(response=== 200){
//     currentStatus="completed"
// }

// currentStatus="completed"?render
// tgswtch=""  

//Function overloading
//A function can handle different parameters calls and return value.
///hard way
// function add(num1:string|number, num2:string|number):string|number{
//     if(typeof num1==="string" || typeof num2==="string" ){
//         return num1+""+num2
//     }
//     return num1+num2    
// }

//easy way 
///but this pattern is not so common in production;so we solve that with generics..
//MEANS code would lengthy when its comes more types.better approach is generics.
// function add(num1:string|number,num2:string|number):string|number;
// function add(num1:any, num2:any):any{
//     return num1+num2
// }

// console.log(add("2","2"))
// console.log(add(2,2))
// console.log(add(false,false))

//Generics

// function getAge<T>(age:T):T{
//     return age
// }

// getAge(true)///dont infer
// getAge<string>("20")//we need to explicitly type..this method is even better
// getAge<number>(20)

// usecase 
// type UserDetail={
//     name:string;
//     salary:number
// }

// type AdminDetail={
//     firstname:string;
//     role:string
// }

// const userDetail:UserDetail={
//     name:"neeraj",
//     salary:30000
// }

// const adminDetail:AdminDetail={
//     firstname:"sharik",
//     role:"admin"
// }

// function getDetails<T>(details:T):T{
//     return details
// }

// const userValue=getDetails<UserDetail>(userDetail)
// userValue.
// const adminValue=getDetails<AdminDetail>(adminDetail)
// adminValue.

//combining two types or interfaces

// type UserDetail={
//     name:string;
//     salary:number
// }

// type AdminDetail= UserDetail &{
//     role:string
// }

// const userDetail:UserDetail={
//     name:"neeraj",
//     salary:30000
// }

// const adminDetail:AdminDetail={
//     name:"sharik",
//     salary:30000,
//     role:"admin"
// }

// interface UserDetail {
//     name:string;
//     salary:number
// }

// interface AdminDetail extends UserDetail {
//     role:string
// }

//Enums
//Used in some cases where api repsonse  might be numbers instead of text based.
//Enums are used when you need to represent a collection of related values that can be used as a type.

// type StatusType = "pending" | "completed" | "failed"

// enum StatusType {
//     PENDING=100,
//     COMPLETED=200,
//     FAILED=400
// }///it became descriptive when we assign names to the status code

// function getStatus(orderID:string,status:StatusType):void{
//     console.log(`Order ${orderID} is currently ${status}`);
// }

// getStatus("1231",StatusType.COMPLETED)//dont memorize status code here

//As const(Type Casting)
//convert a variable to constant
// let user="neeraj" as const;
//user ="neeraj"
//as const make variable read only;not updates.

// let user=123 as number;
// user=122

// const config = {
//     apiUrl: "https://api.example.com",
//     timeout: 5000
// } as const;

// config.apiUrl = "https://api.newexample.com";


//keyof/typeof(start with getautosuggestion by comparing enum; also explain auto-suggestion of type in parameter)
// const StatusType = {
//     PENDING:100,
//     COMPLETED:200,
//     FAILED:400
// } as const;

// // type StatusType = "pending" | "completed" | "failed"

// function getStatus(orderID:string,status:keyof typeof StatusType):void{
//         StatusType.PENDING=10000
//         console.log(`Order ${orderID} is currently ${status}`);
// }    
// getStatus("1231","FAILED")

//Utility Types


// type UserDetail = {
//     readonly name:string;//1.readonly
//     age:number;
//     salary:number
// } 

// const user1:UserDetail={
//     name:"neeraj",
//     age:20,
//     salary:4000
// }
// user1.name="hello"//error

// const user2: Readonly<UserDetail> = { //2.Readonly for all
//     name:"shikku",
//     age:20,
//     salary:4000
// }
// user2.age=22//error

// const user3: Partial<UserDetail> = { //3.Partial(means optional for all)
//     //type ctrl+space here
// }

// const user4: Required<UserDetail> = {//4.Required(make all properties required even if there are optionals in types)
//     age:22,
//     name:"justaname",//if any of these properties removed error will occur.
//     salary:5000
// }

// const user5:Pick<UserDetail, "name"> = {//5.Pick(you can pick some of the properties from a type)
//     name:"john doe",
//     // age:20//adding age will throw error as only one type picked.you can add by "name" | "age"
// }

// const user6:Omit<UserDetail, "salary"> = {//6.Omit(omits specified properties)
//     age:25,
//     name:"sharik",
//     salary:3000//error as salary is omiited
// }

// //7.Exclude(excluding types from a inline type or union)

// type StatusType= "pending"|"completed"|"failed"

// const statusname:Exclude<StatusType, "failed"> = "completed"//check options; here failed excluded.

//8.Record(if u donno keys and values; we can create ey and values dynamic by record.)

// type Food={// we donno how many key-value pairs are there for an object from reponse.in such cases we can use REcord.
//     KFC:string;
//     PIZZA:string;
//     CHICKEN:string;
// }

//first way of Record
// type Food=Record<string, any>;//we can use any here as any type value would be there for keys.
//second way of Record
// type Food={
//     [index:string]:any
// }

// const food:Food={
//     CHICKEN:"sdas",
//     PIZZA:"20",
//     KFC:200,
//     HEELO:200
// }

//any/ unkown/ never/void/ null

//1.any
// maximum we should should avoid any. but there are scenarios we can't.

// issue of any(eg)

// let value:string="neeraj";
// value.toLowerCase()//if I give any as type , ts gives all methods to value.That shoul avoid

//2.unkown
//but you can use unknown instead of any.
//for eg you fetch an unknown data from api.

// let apiData:unknown = "10"//here we can give any values.
 
// const newValue = apiData as string ///if u have confidence of getting string you can typecast that.
// newValue.toLowerCase()//finally u could call string methods.

//3.never/void

// function throwError(message:string):never{
//     throw new  Error(message)
// }

// function logMsg(message:string):void{
//     console.log(message)
// }

//4.null
let username:string|null=null;
//use null type if initial value is null. 
//Also do union the later expected value which may string , number etc.



//how to use tsconfig.json?

// open terminal and type tsc --init
//Get a new tsconfig.json  




































