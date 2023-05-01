let str =`
010-1234-5678
0102
0103
Edit the Expression & Text to see matches. Roll over matches or the expression for details.
the aabbccddeeffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
http://www.naver.com
https://www.naver.com
htp://www.naver.com
h2p://www.naver.com
aaa.css
aaa.scss
`
console.log(str.match(/^01/gm));
console.log(str.match(/^010/gm));
console.log(str.match(/^01./gm));
console.log(str.match(/^010?/gm));

console.log(str.match(/h.p/gm));
console.log(str.match(/h..p/gm));
console.log(str.match(/h..ps?/gm));
console.log(str.match(/f....../gm));

console.log(str.match(/\.?css/gi));
console.log(str.match(/\.s?scss/gm));
console.log(str.match(/for|to|abc/gm));
console.log(str.match(/...@naver.com|...@gmail.com/gm));


// ^ $ . | ?