// Boolean
var isVisible = true;
var isConnected = false;
console.log(isVisible);
console.log(isConnected);
//Number
var decimal = 6;
var hex = 0xf00f;
var binary = 14;
var octal = 468;
//String
var animalBig = 'Tiger';
var animalSmall = 'Fly';
//Null, undefined
var z = null;
var x;
//Array
var miles = [30, 40, 50];
var students = ['Mary', 'John', 'Michael'];
console.log(miles[2]);
console.log(students[0]);
var bikes = ['Honda', 'Yamaha', 'KTM'];
console.log(bikes[2]); // KTM
//Tuples
var phoneInfo;
phoneInfo = ['Iphone', true];
console.log(phoneInfo[0]); //Iphone
phoneInfo[0] = 'Huawei';
console.log(phoneInfo[0]); //Huawei
//enum
var notebook;
(function (notebook) {
    notebook["Dell"] = "Dell";
    notebook["Lenovo"] = "Lenovo new value";
    notebook["Acer"] = "Acer";
})(notebook || (notebook = {}));
var current = notebook.Dell;
console.log(current);
current = notebook.Lenovo; //изменяем значения
console.log(current);
// any
var theThing = 'Steven King';
console.log(theThing); // сейчас theThing - это string
theThing = 20;
console.log(theThing); // сейчас theThing - это number
// complex Objects
var student = { name: 'Mary', hobby: 'painting', age: 17 };
console.log(student.hobby);
// альтернативный вариант получения свойства
console.log(student.age);
student = { name: 'Mary', hobby: 'fencing', age: 20 }; // ошибка так как объект должен соотвтствовать назвниям, типу и кол ичеству свойств.
console.log(student.name);
