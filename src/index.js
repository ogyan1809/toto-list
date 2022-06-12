import "./styles.css";

const AppendInCmpArea = (text) => {
  // div生成
  const div = document.createElement("ul");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;
  const cmp_btn = document.createElement("button");
  cmp_btn.innerText = "完了";
  cmp_btn.className = "complete-button";
  cmp_btn.addEventListener("click", () => {
    const parent_ = cmp_btn.parentNode;
    document.getElementById("incmp").removeChild(parent_);
    AppendCompArea(text);
  });

  const del_btn = document.createElement("button");
  del_btn.innerText = "削除";
  del_btn.className = "delete-button";
  del_btn.addEventListener("click", () => {
    const parent_ = del_btn.parentNode;
    document.getElementById("incmp").removeChild(parent_);
  });

  div.appendChild(li);
  div.appendChild(cmp_btn);
  div.appendChild(del_btn);
  console.log(div);
  const imcmp = document.getElementById("incmp");

  console.log(imcmp);
  imcmp.appendChild(div);
};

const AppendCompArea = (text) => {
  // 完了済みのリストを取得し、parent_をそこに追加する
  const ul = document.createElement("ul");
  ul.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  const back_btn = document.createElement("button");
  back_btn.innerText = "戻す";
  back_btn.addEventListener("click", () => {
    // 戻すを推されたら、要素自身は消して、
    // incmpに追加する。
    const parent_ = back_btn.parentNode;
    document.getElementById("comp-area").removeChild(parent_);
    AppendInCmpArea(text);
  });

  ul.appendChild(li);
  ul.appendChild(back_btn);

  document.getElementById("comp-area").appendChild(ul);
};

// 追加ボタン押下時
const onClickAdd = () => {
  const input_edit = document.getElementById("input-edit").value;
  document.getElementById("input-edit").value = "";

  AppendInCmpArea(input_edit);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
