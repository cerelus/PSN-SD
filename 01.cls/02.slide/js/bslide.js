// 로드구역
window.addEventListener("DOMContentLoaded",loadFn);

// loadFn 함수
function loadFn(){
    /*********************************************
        [ 슬라이드 이동기능 ]
        0. li 순번설정
        1. 버튼 클릭시 다음슬라이드 이동
        2. 슬라이드순번과 같은 블릿 li에 on클래스 주기
    *********************************************/

    /*
        setAttribute
        : 선택한 요소의 속성값을 지정한다.
        element.setAttribute( 'attributename', 'attributevalue' )
    */

    // 0. li 순번설정 - 블릿
    // li를 잘라내는 과정에서 순번이 섞일수 있기때문에 처음부터 li의 속성에 순번을 부여해서 블릿버튼과 연결한다.

    // (1) 대상선정
    let slist = document.querySelectorAll(".slide li");

    // (2) li 순번지정
    slist.forEach((ele,idx)=>{
        // data-seq 사용자정의 속성에 순번넣기 -> w3에서 사용자정의함수는 data-로 시작하도록 권고
        ele.setAttribute("data-seq",idx);
    }); // forEach

    // 1. 버튼 클릭시 다음슬라이드 이동
    
    // (1) 대상선정
    // 이벤트대상 : .sbtn
    const sbtn = document.querySelectorAll(".sbtn");
    // 변경대상 : .slide
    const slide = document.querySelector(".slide");

    // 광클금지변수 : 0 혀용, 1 불허용
    let prot = 0;

    // (2) 슬라이드 변경함수
    const goSlide = (seq) => {

        // 광클금지 설정
        if(prot) return;
        prot = 1; // 잠금
        // 슬라이드 이동시간이 0.4초이기때문에 이동완료후 잠금을 풀어준다.
        setTimeout(()=>{
            prot = 0; // 잠금해제
        }, 400);

        // 현재의 슬라이드 li - 첫번째li 자르기 위해서
        let clist = slide.querySelectorAll("li");

        // 방향에 따른 분기
        // 오른쪽버튼 클릭시
        if(seq){
            // 슬라이드 이동
            slide.style.left = "-100%";
            slide.style.transition = "left .4s ease-in-out";

            // 슬라이드 이동후 첫번째li잘라 맨뒤로 보내기
            setTimeout(()=>{
                // 첫번째 li 잘라 맨뒤로 보내기
                slide.appendChild(clist[0]);
                // 동시에 left값 0으로 변경
                slide.style.left = 0;
                // left값 0으로 변하는것에 대한 트랜지션 없애기
                slide.style.transition = "none";
            }, 400); // setTimeout
            // 400 = 0.4s - 슬라이드 이동후(0.4초) 동작하도록 설정
        } // if //
        // 왼쪽버튼 클릭시
        else{
            // 슬라이드 이동전 마지막li잘라 맨앞으로 보내기
            // 마지막li를 첫번째li 앞으로 이동시키기
            slide.insertBefore(clist[clist.length-1], clist[0]);
            // 동시에 left값을 -100%로 바꾸기
            slide.style.left = "-100%";
            // 트랜지션 없애기
            slide.style.transition = "none";

            // 그 이후 슬라이드 이동
            /* 동일속성인 left가 같은 코딩처리공간에 있기때문에 left가 동시에 실행되서 트랜지션이 적용되지않는다.
               따라서 setTimeout을 사용해 두 코드의 실행공간을 분리해야 효과가 나타난다.
                -> setTimeout, setInterval 등 타이밍함수를 주게되면 현재 메모리(스택)에서 처리되지않고
                   별도의 메모리 공간(큐)에서 처리되기 때문에 동시에 실행되지 않는다. */
            setTimeout(()=>{
                slide.style.left = "0";
                slide.style.transition = "left .4s ease-in-out";
            },0);
        } // else //


        // 2. 슬라이드순번과 같은 블릿 li에 on클래스 주기

        // (1) 대상선정 : .indic li
        const indic = document.querySelectorAll(".indic li");

        // (2) 현재슬라이드 순번과 같은 블릿 표시하기
        // 현재 베너리스트 업데이트 -> 이벤트발생 후 이기때문이다.
        clist = slide.querySelectorAll("li");
        // 첫번째 슬라이드 순번 읽어오기
        console.log("현재순번:",clist[0].getAttribute("data-seq"));
        /* 오른쪽 버튼 클릭시 슬라이드 이동후 기존의 첫번째 슬라이드 잘라지기때문에 두번째 슬라이드 번호를 읽어야한다.
            -> seq값과 일치함 */

        // 현재 슬라이드 번호 읽어오기
        let cseq = clist[seq].getAttribute("data-seq");

        
    }; // goSlide 함수

    // (3) 이동버튼에 이벤트 설정하기
    sbtn.forEach((ele,idx)=>{
        ele.onclick = () => {
            goSlide(idx);
        }; // click
    }); // forEach
    
} // loadFn 함수