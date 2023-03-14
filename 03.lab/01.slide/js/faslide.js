// 쇼핑몰 배너 JS - 03.페이드효과 //

// 로딩후 loadFn함수 호출 //////////
window.addEventListener("DOMContentLoaded", loadFn);

/******************************************** 
 * 
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
********************************************/

/****************************************** 
    함수명: loadFn
    기능: 로딩후 이벤트설정 및 슬라이드 기능
******************************************/
 /////////////// loadFn 함수 //////////////

 function loadFn(){
    const slide = document.querySelectorAll("#slide li");
    const abtn = document.querySelectorAll(".abtn");
    let snum = 0;

    abtn.forEach((ele,idx) => {
        ele.onclick = () => {
            for(let x of slide) x.classList.remove("on");
            if(idx){
                if(snum === slide.length-1) snum = -1;
                slide[snum+1].classList.add("on");
                snum++;
            }
            else{
                if(snum===0) snum = 5;
                slide[snum-1].classList.add("on");
                snum--;
            }

            //끝다음->처음
        };
        console.log(snum);
        
    });


 }