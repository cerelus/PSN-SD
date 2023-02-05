const title = document.getElementById("hello");

console.log(title);
// 출력 : <div class="hello" id="hello">...</div>
// -> element로 리턴

const title2 = document.getElementsByClassName("hello");

console.log(title2);
// 출력 : HTMLCollection [div.hello]
// -> array로 리턴

const title3 = document.querySelector(".hello h1");
// 단 하나의 element를 return 해준다.
// 조건에 맞는 요소가 여러개 있어도 첫번째 요소(element)만 리턴

console.log(title3);
// 출력 : <h1>Grab me!</h1>
// -> element로 리턴

const title4 = document.querySelectorAll(".hello h1");
// 조건에 맞는 요소를 두개이상 리턴할때 사용한다.

console.log(title4);
// 출력 : NodeList [h1, h1. h1]
// -> array로 리턴
