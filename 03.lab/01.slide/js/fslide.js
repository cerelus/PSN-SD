// fade_slide.html - 메인JS

/*
    [ 페이드 효과 슬라이드 기능정의 ]
    -> 슬라이드 순번에 대한 전역변수를 사용한다!
    1. 오른쪽 버튼클릭시 다음 순번슬라이드에
    클래스 "on"을 줘서 opacity:1, z-index:1
    로 보이며 맨위로 설정해준다!(트랜지션적용)
    ->나머지 li는 모두 "on"을 지워서 초기화!
    2. 왼쪽버튼은 이전순번이 나오며 위와 동일
    3. 끝번호에 가서는 처음은 마지막으로 
    마지막은 처음으로 슬라이드가 다시 반복된다.
    4. 블릿은 현재 슬라이드와 일치된 순번표시
*/

// 로드구역
window.addEventListener("DOMContentLoaded",loadFn);

// 로드함수
function loadFn(){
    // 1. 버튼클릭시 다음순번 슬라이드 나타나기

    // (1) 대상선정
    // 이벤트대상
    const slist = document.querySelectorAll(".slide li");
    // 슬라이드번호 변수
    let snum = 0;
    let scnt = document.querySelectorAll(".slide li").length;
    
    function goFade() {
        for (let x of slist) x.classList.remove("on");
        
        slist[snum].classList.add("on");

        snum++;

        if(snum===scnt) snum=0;
    }
    goFade();
setInterval(goFade,5000);
    // }
    // // (2) 이벤트함수 생성
    // // function goFade(){

    // // } // goFade
    // slist.forEach((ele,idx)=>{
    //     ele.
    // });

    // // (3) 이벤트 설정
    // // 클래스on 초기화
    // for (let x of slist) x.classList.remove("on");
    // // 클래스on 넣기
    // slide.classList.add("on");


} // loadFn 함수