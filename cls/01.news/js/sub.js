// sub.html - sub JS

// 1. Get방식으로 넘어온 값 받기
// location.href는 url주소를 읽어온다.
let pm = location.href;
console.log(pm);

// 2. url자르기
pm = pm.split("?")[1].split("=")[1];

pm = decodeURIComponent(pm);
console.log(pm);

/////////// 로딩구역 ///////////(
window.addEventListener("DOMContentLoaded",()=>{
    console.log("loadFn 함수");

    // DOM 선택함수
    const qs = (x) => document.querySelector(x);

    // 1. 변경대상 선정
    const tit = qs(".top h1");
    console.log(tit);

    // 2. 뉴스데이터 카테고리 선택
    const ndata = ndata[pm];

    // 2. 변경대상 적용
    //(1) 제목
    tit.innerText += pm;
});

