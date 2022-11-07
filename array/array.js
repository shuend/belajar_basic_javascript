// Manipulasi Array

// 1. Menambah isi array
//    var arr = [];
// arr[0] = "Dwiky";
// arr[1] = "Ramadhan";
// arr[2] = "Kei";
// arr[3] = "Warren";

// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Dwiky", "Ramadhan", "kei"];
// arr[1] = undefined;
// console.log(arr);


// menampilkan isi array
// var arr = ["Dwiky", "Ramadhan", "Kei"];

// for ( var i = 0; i < arr.length; i++) {
//  console.log('Mahasiswa ke-' + (1+i) + ' : ' + arr[i]);
// }

// Method pada array
var arr = ['Dwiky', 'Ramadhan', 'Kei'];
// 1.join
// console.log(arr.join(' - '));

// 2. push and pop
// arr.push('Waren');
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 3. Unshift & shift
// arr.unshift('Kei');
arr.shift();
console.log(arr.join(' - '))