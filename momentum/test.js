/* 
    [연산자 '==' 와 '===' 비교]
    1.'==' : [값]만 비교함. 두 변수가 서로 다른 자료형이여도 됨.
    2.'===' : [값 & 자료형]을 함께 비교함. 두 변수가 같은 자료형이여야 함.

    => 변수를 비교할때 자료형까지 비교해주는 '==='연산자를 사용하는것이 좋다.
*/

// 예제1
0 == false  // 출력 : true
0 === false // 출력 : false

console.log(typeof 0);  // 출력 : number
console.log(typeof false);  // 출력 : boolean

// 예제2
2 == "2"  // 출력 : true
2 === "2" // 출력 : false

console.log(typeof 2);  // 출력 : number
console.log(typeof "2");  // 출력 : string

// 예제3
123 != "123"  // 출력 : false
123 !== "123"  // 출력 : true