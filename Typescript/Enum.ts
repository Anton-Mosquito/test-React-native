 //enum
enum notebook { Dell, Lenovo, Acer };
let current:notebook = notebook.Dell;
console.log(current);
current = notebook.Lenovo;//Changing values
 
 //переопределяем значения в enum
enum notebook { Dell=0, Lenovo=1, Acer=2 };
enum notebook { Dell=7, Lenovo, Acer }//7 8 9
//получаем их
enum notebook { Dell=0, Lenovo=1, Acer=2 };
let newest:string = notebook[2];// 2 - числовое значение ACER
console.log(newest);
