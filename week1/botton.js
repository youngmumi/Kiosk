const eatIn = document.querySelector(".eat-in");
const takeOut = document.querySelector(".take-out");

//이벤트 리스너 추가
eatIn.addEventListener('click', moveToOrder);
takeOut.addEventListener('click', moveToOrder);

//페이지 이동 함수
function moveToOrder() {
  console.log("페이지 이동"); //콘솔 출력
  location.href = "./order.html";
}
