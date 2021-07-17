export const TodoItem = (content) => {
  // 요소 생성
  const wrap = document.createElement("div"),
    checkboxInput = document.createElement("input"),
    checkboxLabel = document.createElement("label");

  // 클래스 추가
  wrap.classList.add("item");

  // 속성값 설정
  checkboxInput.type = "checkbox";
  checkboxInput.id = "item";
  checkboxLabel.for = checkboxInput.id;

  // 데이터 대입
  checkboxLabel.innerHTML = content;

  // 요소 연결
  wrap.appendChild(checkboxInput);
  wrap.appendChild(checkboxLabel);

  return wrap;
};
