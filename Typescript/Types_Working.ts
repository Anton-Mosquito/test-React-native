 //Объединения
 let password : number | string;
password = "7lex";
console.log(password); // 7lex
password = 907;
console.log(password);  // 907

// Проверка типа
let amount: any;
amount = 50;

if (typeof amount === "number") {

    let res: number = amount / 5;
    console.log(res);
}
else{
    console.log("invalid operation");
}

// Псевдонимы типов
type someType = number |boolean| string|undefined;

let summary: someType = true;
if (typeof summary === "number") {
    console.log(summary / 4);
}

// Type assertion  (каст типов)
let anyValue: any = "hello students!";
let strLength: number = (<string>anyValue).length;
console.log(strLength); // 15


let someUnValue: string | number | boolean | null = "hi!";
strLength = (<string>someUnValue).length;
console.log(strLength); // 3
// С использованием оператора as
let anyValue: any = "hello students!";
let strLength: number = (anyValue as string).length;
console.log(strLength); // 15

let someUnValue: string | number | boolean | null = "hi!";
strLength = (someUnValue as string).length;
console.log(strLength); // 3
