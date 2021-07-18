import { TodoItem } from "./item/todo.item.js";

// 요소 초기화
const addButton = document.querySelector("#addButton");
const inputfield = document.querySelector("#inputfield");
const holdList = document.querySelector("#holdList");
const completedList = document.querySelector("#completedList");

// 추가 버튼 클릭 이벤트
addButton?.addEventListener("click", () => {
  const content = inputfield.value;
  if (!content) return;

  const item = TodoItem(content);
  item.content.addEventListener("click", (e) => {
    if (!e.target.classList?.contains("item__content")) return;

    const target = item.content;
    target.classList.toggle("checked");

    // 체크 여부에 따라 부모 변경
    if (target.classList.contains("checked")) {
      completedList.appendChild(item.wrap);
    } else {
      holdList.appendChild(item.wrap);
    }
  });

  // 삭제 버튼 클릭 이벤트
  item.removeButton.addEventListener("click", () => {
    // 요소 삭제
    item.wrap.remove();
  });

  // 리스트에 아이템 추가
  holdList?.appendChild(item.wrap);

  // 입력란 초기화
  inputfield.value = "";
  inputfield.focus();
});
