//1.implicit(infer) type
// let userName="Shikku";
// userName=true;

//Defining Types (Explicit Types)
// let salary:number=30000;
// let userName:string="Shariq";
// let isActive:boolean=true;
// let marks:number[]=[10, 30, 40, 50];
// let players:string[]=["Abd", "kohli", "dhoni"];
// let emptyArr:[]=[];
// let skills:(string | number)[]=["js","ts","css",100]
// let skill :(string|boolean|number )[]=["js", "ts", true, false, 100]


//Interface
// interface Details {
//     user_name:string;
//     salary:number;
//     isAdmin:boolean;
// }

//Types
// type Details={
//     user_name:string;
//     salary:number|string;
//     isAdmin:boolean;
//     age?:number;
// }

// let userDetail:Details={
//     user_name:"Bhagya",
//     salary:3000,
//     isAdmin:false,
//     age:100
// }

// let adminDetail:Details={
//     user_name:"Shikku",
//     salary:"3000",
//     isAdmin:true,    
// }

//functions

// type Details={
//     user_name:string;
//     salary:number|string;
//     isAdmin:boolean;
//     age?:number;
// }

// let adminDetail:Details={
//     user_name:"Shikku",
//     salary:"3000",
//     isAdmin:true,    
// }

// let userDetail:Details={
//     user_name:"Bhagya",
//     salary:3000,
//     isAdmin:false,
//     age:100
// }

// function getUsername(adminDetail:Details, userDetail:Details):number{
//     return 2
// }


// const val=getUsername(adminDetail, userDetail)







//Named types/custom types

// Types
// type StatusType = "completed1" | "pending1" | "failed1" | "hey"

// let currentStatus:StatusType="pending1";

// //fetching API
// const response =200;

// if(response===200){
//     currentStatus="completed1"
// }

// type ToggleSwitch ="on"| "off"

// let tgswtch:ToggleSwitch="off"

// tgswtch="on"

//function overloading

// function add(num1:number|string, num2:number|string):number|string{
    
//     if(typeof num1==="string"||typeof num2==="string"){
//         return num1+""+num2;
//     }else{

//         return num1+num2
//     }
// }



//overriding
// function add(num1:string|number, num2:string|number):string|number;
// function add(num1:any, num2:any):any{
//     return num1+num2
// }


// generics
// type Addable= string| number|boolean
// function add<T extends Addable>(num1:T, num2:T):T{
//     return (num1 as any) + (num2 as any);
// }

// console.log(add<number>(30, 30))
// console.log(add<string>("30", "30"))
// console.log(add<boolean>(false, false))

//usecase

// type UserDetail={
//     name:string;
//     salary:number
// }

// const userDetail:UserDetail={
//     name:"neeraj",
//     salary:30000
// }

// type AdminDetail={
//     firstname:string;
//     role:string
// }

// const adminDetail:AdminDetail={
//     firstname:"sharik",
//     role:"admin"
// }

// function getDetails<T>(details:T):T{
//     return details
// }

// const userVal= getDetails<UserDetail>(userDetail)
// const adminVal= getDetails<AdminDetail>(adminDetail)

//combining two types or two interfaces

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

// interface UserDetail{
//     name:string;
//     salary:number;
// }

// interface AdminDetail extends UserDetail{
//     role:string
// }

//ENUM
//Enums are used when you need to represent a collection of related values that can be used as a type.

// type StatusType = "pending" | "completed" | "failed"

// enum StatusType {
//     PENDING=100,
//     COMPLETED=200,
//     FAILED=400,
//     SERVERFAILED=500
// }

// function getStatus(orderID:string, status:StatusType):void{
//     console.log(orderID,"==",status)
// }

// getStatus("1234",StatusType.SERVERFAILED)

//as const (Type Casting)

// let userName="1123" as string;

// userName="124"


// const config = {
//     apiUrl: "https://api.cricketclub.com",
//     timeout: 5000
// } as const;

// config.apiUrl="aaa";


//keyof/typeof

// type StatusType = "pending" | "completed" | "failed"
// const StatusType = {
//         PENDING:100,
//         COMPLETED:200,
//         FAILED:400
// } as const;

// function getStatus(orderID:string,status:keyof typeof StatusType):void{
//         console.log(`Order ${orderID} is currently ${status}`);
// }
    
// getStatus("1231","COMPLETED")

//utility types

//1.read only
type UserDetail = {
    name:string;
    age:number;
    salary?:number
} 

const user1:UserDetail={
    name:"neeraj",
    age:20,
    
}

//Readonly for all properties
const user2:Readonly<UserDetail> ={
    name:"shikku",
    age:20,
    
}

//3.Partial
const user3:Partial<UserDetail> ={
    age:20
}

//4.Required
const user4:Required<UserDetail> ={
    name:"shikku",
    age:20,
    salary:200000
}

//5.Pick
const user5:Pick<UserDetail, "name"> = {
    name:"shikku",
}

//6.Omit
const user6:Omit<UserDetail, "name"> = {
    age:20,
    salary:3000
}

//7.Exclude
type StatusType="pending" | "completed" | "failed"
const currentStatus:Exclude<StatusType, "pending"> = "failed"

//8.Record
type Food = Record<string, any>

//api call repsonse
const food:Food={
    CHICKEN:"sdas",
    PIZZA:"20",
    KFC:200,
    HEELO:200,
}

//any/ unknown/never/void/null
//any
let val:string="string"
val.toLowerCase

//unknown
let apiData:unknown = "10"
let value=apiData as string
value.length

//never/void
function logMsg(message:string):void{
    console.log(message)
}

function throwError(message:string):never{
    throw new  Error(message)
}

//null
let variable:null|string=null;
username="string"














































