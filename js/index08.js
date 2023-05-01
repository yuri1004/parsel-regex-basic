let str =`
010-1234-5678
Edit the Expression & Text to see matches. Roll over matches or the expression for details.
the aabbccddeeffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
`

const re = /@gmail/gi;
console.log(str.match(re));
console.log(str.replace(re,'@naver'));
console.log(str.match(/m$/gm));
console.log(str.match(/t.e/gm));
console.log(str.match(/^foe?/gm));