import { TodoItem } from "./item/todo.item.js";

// 요소 초기화
const addButton = document.querySelector("#addButton");
const inputfield = document.querySelector("#inputfield");
const holdList = document.querySelector("#holdList");
const completedList = document.querySelector("#completedList");

// 추가 버튼 클릭 이벤트
addButton?.addEventListener("click", () => {
  holdList?.appendChild(TodoItem(inputfield.value));

  // 입력란 초기화
  inputfield.value = "";
});
