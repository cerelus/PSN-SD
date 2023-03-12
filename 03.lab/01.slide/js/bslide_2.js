// btm_slide.html - 메인JS

// 로드구역
window.addEventListener("DOMContentLoaded", loadFn);

// 로딩함수
function loadFn() {
    // 1. 대상선정
    // 박스버튼
    const btns = document.querySelectorAll(".btns li");
    console.log(btns);
    // 슬라이드
    const slide2 = document.querySelectorAll(".slide2 li");
    // 화살표버튼
    const abtn = document.querySelectorAll(".abtn");

    // 슬라이드번호 변수
    let snum = 1;
    // 슬라이드개수
    const scnt = slide2.length;

    ///////////////////////////////////////////////////////////////////////
    // 2. 이벤트설정 - 함수호출
    // (1) 박스버튼 클릭이벤트
    btns.forEach((ele, idx) => {
        ele.onclick = () => {
            goChange(ele, idx);
        }; // click
    }); // forEach

    // (2) 화살표버튼 클릭이벤트
    abtn.forEach((ele, idx) => {
        ele.onclick = () => {
            goSlide(idx);
        }; // click
    }); // forEach

    // 3. 이벤트 함수생성 - 함수선언 //////////////////////////////////
    // (1) 박스버튼 함수
    function goChange(ele, idx) {
        clearAll();
        // 셋팅
        slide2[idx].classList.add("blk")
        ele.classList.add("op1");
    } // goChange()

    // (2) 화살표버튼 함수
    function goSlide(idx) {
      clearAll();
        // idx - 방향분기
        if (idx) {
          slide2[snum].classList.add("dbk");
          snum++;
        } // if
        else {
          snum--;
          slide2[snum].classList.add("dbk");
        } // else

        // 한계값
        if(snum===-1) snum = scnt-1;
        //끝다음->처음
        else if(snum === scnt) snum = 0;
    } // goSlide()

    // (3) 초기화함수
    function clearAll(){
        // slide2.length === btns.length
        for (i = 0; i < scnt; i++) {
          slide2[i].classList.remove("dbk");
          btns[i].classList.remove("op1");
      }
    }

} // loadFn()
