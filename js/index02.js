let str =`
010-1234-5678
Edit the Expression & Text to see matches. Roll over matches or the expression for details.
the aabbccddeeffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
`
// 리터널 방식(표현식)
const re = /see/gi;
const re1 = /naber/gi;
const re2 = /gmail/gi;
const re3 = /naver/gi;
// match()
console.log(str.match(re));
console.log(str.match(re1));
console.log(str.match(re2));
// test
console.log(re1.test(str));
console.log(re2.test(str));
console.log(re3.test(str));

// 출력문 바꾸기
console.log(str.replace(re3,'gmail'));
console.log(str);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           