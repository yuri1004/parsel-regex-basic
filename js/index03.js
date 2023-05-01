let str2 = 'aaa@daum.net';
const sam01 = /daum/gi;

console.log(str2.replace(sam01,'gmail'));
const sam02 = str2.replace(sam01,'gmail');
str2 = sam02;
console.log(sam02);

let name1 = `aaa@naver.com bbb@naver.com ccc@naver.com`;
const str4 = /naver/gi;
let num = name1.replace(str4,'gmail');
console.log(num);
name1 = num;
console.log(name1);