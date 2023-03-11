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

    // 1. 뉴스데이터 카테고리 선택
    const ndata = snews[pm];
    // 2. 변경대상 선정 및 적용
    // (1) 제목
    const tit = qs(".top h1");
    console.log(tit);

    tit.innerText += ` - ${pm}`;

    // (2) 언론사, 기사제목
    const ntit = qs(".ntit");

    ntit.innerHTML = `
    <a href="${ndata["언론사"][0]}">
        <img src="./images/${ndata["언론사"][1]}" alt="언론사 바로가기" />
    </a>
    <h2>${ndata["기사제목"]}</h2>
    `;

    // (3) 기사이미지
    const aimg = qs(".aimg");

    aimg.innerHTML = `
        <figure>
            <img src="./images/${ndata["기사사진"][0]}" alt="기사이미지">
            <figcaption>${ndata["기사사진"][1]}</figcaption>
        </figure> 
    `;

    // (4) 기사내용
    const ncont = qs(".ncont");
    // 기사내용 변수에 배열로 저장
    const arti = ndata["기사내용"];

    for(let x of arti) ncont.innerHTML += `<p>${x}</p>`;

    // (5) 기자정보
    const rpt = qs(".rpt");

    rpt.innerHTML = `${ndata["기자"][0]}, ${ndata["기자"][1]}`;
    

    


    // 2. 변경대상 적용
    // (1) 제목
    

    // (2)

    
});

