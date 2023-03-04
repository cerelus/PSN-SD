// news.html - linksys JS
 
 ///////// 로드구역 //////////////
 window.addEventListener("DOMContentLoaded",()=>{
            
    // 로딩확인
    console.log("로딩완료!");

    // 1. 이벤트 대상선정 : .gnb a
    // .gnb 하위 첫번째 li요소 제외
    const gnb = document.querySelectorAll(".gnb li+li a");
    // console.log(gnb);

    // 2. 클릭이벤트 설정
    for(let x of gnb){
        x.onclick = () => {

            // (1) 클릭된 a요소 텍스트 가져오기
            let atxt = x.innerText;
            console.log(atxt);

            // (2) 전달할 페이지에 Get방식으로 데이터 전송하기
            location.href = "sub.html?cat=" + encodeURIComponent(atxt);
        }; ///// click /////
    }

    // (3) 로고 클릭이벤트 설정 : 메인페이지로 연결
    const logo = document.querySelector(".gnb a");
    // console.log(logo);

    logo.onclick = () => {
        location.href = "news.html";
    }; ///// click /////
    
}); ///////// 로드구역 //////////////