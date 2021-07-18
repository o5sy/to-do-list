export const TodoItem = (content) => {
  // 요소 생성
  const wrap = document.createElement("li"),
    contentP = document.createElement("p"),
    removeButton = document.createElement("button");

  // 클래스 추가
  wrap.classList.add("item");
  contentP.classList.add("item__content");
  removeButton.classList.add("item__button--remove");

  // 데이터 대입
  contentP.innerHTML = content;

  // 요소 연결
  wrap.appendChild(contentP);
  wrap.appendChild(removeButton);

  return { wrap: wrap, content: contentP, removeButton: removeButton };
};
