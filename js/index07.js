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
aaaaaaa
aaaaa
aa
tro
tros
가나다라마바사
가공갗난하다타핳
`

console.log(str.match(/a{2}/g));
console.log(str.match(/a{3,}/g));
console.log(str.match(/a{2,4}/g));
console.log(str.match(/[tro]/g));
console.log(str.match(/tro./g));
console.log(str.match(/tro?/g));
console.log(str.match(/tro$/gm));
console.log(str.match(/[1-3]/g));
console.log(str.match(/[a-c]/g));
console.log(str.match(/[가-다]/g));
// console.log(str.match(//g));