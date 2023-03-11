// 로드구역
window.addEventListener("DOMContentLoaded",loadFn);

// loadFn 함수
function loadFn(){
    /*********************************************
        [ 슬라이드 이동기능 ]
        0. li 순번설정
        1. 버튼 클릭시 다음슬라이드 이동
        2. 슬라이드순번과 같은 li에 on클래스 주기
    *********************************************/

    /*
        setAttribute
        : 선택한 요소의 속성값을 지정한다.
        element.setAttribute( 'attributename', 'attributevalue' )
    */
   
    // 0. li 순번설정

    // (1) 대상선정
    let slist = document.querySelectorAll(".slide li");

    // (2) li 순번지정
    slist.forEach((ele,idx)=>{
        // data-seq 사용자정의 속성에 순번넣기
        ele.setAttribute("data-seq",idx);
    }); // forEach

    // 1. 버튼 클릭시 다음슬라이드 이동
    
    // (1) 대상선정
    // 이벤트대상 : .sbtn
    const sbtn = document.querySelectorAll(".sbtn");
    // 변경대상 : .slide
    const slide = document.querySelector(".slide");

    // (2) 슬라이드 변경함수
    const goSlide = () => {

    }; // goSlide 함수

    // (3) 이동버튼에 이벤트 설정하기
    sbtn.for
    
} // loadFn 함수