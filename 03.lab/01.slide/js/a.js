// btn_slide.html - 메인JS

// 캐릭터 데이터 셋팅
const cat = [
    {
        name: "Lightning McQueen",
        description:
            "Number 95 Lightning McQueen is still a hotshot race car, but his rookie days are past him. Now a permanent resident of Radiator Springs, Lightning has become a bona fide worldwide celebrity as winner of four Piston Cups.",
    },
    {
        name: "Acer",
        description:
            "Number 95 Lightning McQueen is still a hotshot race car, but his rookie days are past him. Now a permanent resident of Radiator Springs, Lightning has become a bona fide worldwide celebrity as winner of four Piston Cups.",
    },
    {
        name: "Finn McMissile",
        description:
            "Finn McMissile is a master British spy. Though charming and eloquent, it’s his stealth maneuvering, intelligence, and years in the field that enable him to thwart unexpected attacks from bad guys and make quick daredevil escapes.",
    },
    {
        name: "Professor Z",
        description:
            "Professor Z, aka The Professor, is an internationally wanted weapons designer in a small, sophisticated German package. He's a brilliant—but mad—monocle-wearing scientist who's plotting to sabotage the World Grand Prix.",
    },
];

// 로드구역
window.addEventListener("DOMContentLoaded", loadFn);

// 로드함수
function loadFn() {
    console.log(cat[0].name);
}
