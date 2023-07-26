// Boolean
let isVisible = true;
let isConnected: boolean = false;

console.log(isVisible);
console.log(isConnected);

//Number
let decimal: number = 6;
let hex: number = 0xf00f;
let binary: number = 0b1110;
let octal: number = 0o724;

//String
let animalBig: string = 'Tiger';
let animalSmall = 'Fly';

//Null, undefined
let z: null = null;
let x: undefined;

//Array
let miles: number[] = [30, 40, 50];
let students: string[] = ['Mary', 'John', 'Michael'];

console.log(miles[2]);
console.log(students[0]);

let bikes: Array<string> = ['Honda', 'Yamaha', 'KTM'];
console.log(bikes[2]); // KTM

//Tuples
let phoneInfo: [string, boolean];
phoneInfo = ['Iphone', true];

console.log(phoneInfo[0]); //Iphone
phoneInfo[0] = 'Huawei';
console.log(phoneInfo[0]); //Huawei

//enum
enum notebook {
  Dell="Dell",
  Lenovo="Lenovo new value",
  Acer="Acer",
}

let current: notebook = notebook.Dell;
console.log(current);
current = notebook.Lenovo; //изменяем значения
console.log(current);

// any
let theThing: any = 'Steven King';
console.log(theThing); // сейчас theThing - это string
theThing = 20;
console.log(theThing); // сейчас theThing - это number

// complex Objects
let student = {name: 'Mary', hobby: 'painting', age: 17};
console.log(student.hobby);
// альтернативный вариант получения свойства
console.log(student.age);

student = {name: 'Vasiliy', hobby: 'fencing', age: 20}; // ошибка так как объект должен соотвтствовать назвниям, типу и кол ичеству свойств.
console.log(student.name);
