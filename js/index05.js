let str =`
010-1234-5678
020
0b0
0$0
Edit the Expression & Text to see matches. Roll over matches or the expression for details.
the aabbccddeeffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
`

const re2 = /\.$/gm;
console.log(str.match(re2));

const re3 = /8$/gm;
console.log(str.match(re3));

const re4 = /0.0/g;
console.log(str.match(re4));

