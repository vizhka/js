"use strict"

if (4==10) {
    console.log('Ok!');
}   else {
    console.log('Error!');
}
const num = 50;
if (num < 5){
    console.log('Error!');
} else if (num > 100){
    console.log('Много');
}   else {
    console.log('OK!');
}

(num === 50) ? console.log('Ok!'):console.log('Errr!');


const numb = 52;
switch (numb){
    case 49:
        console.log('errrrrrrror!');
        break;
    case 100:
        console.log('errrrrrrror!');
        break;
    case 54:
        console.log('Succes!');
        break;
        default:
            console.log('Not today!');
        
}