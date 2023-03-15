const addItem = document.querySelector("#addItem");
let counter = 0;
const input = document.querySelector("#input");
const listItem = document.querySelector("#listItem");
const editBox = document.querySelector(".edit--box");
const editButton = document.querySelector(".btn--ok");
const editText = document.querySelector(".input--edit");
const clearBtn = document.querySelector(".btn--clear");
let colors = [];
colors[0] = getComputedStyle(document.documentElement).getPropertyValue(
  "--color-task1"
);
colors[1] = getComputedStyle(document.documentElement).getPropertyValue(
  "--color-task2"
);
colors[2] = getComputedStyle(document.documentElement).getPropertyValue(
  "--color-task3"
);
colors[3] = getComputedStyle(document.documentElement).getPropertyValue(
  "--color-task4"
);
let whiteColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--color-white"
);
let i = 0;
clearBtn.addEventListener("click", () => {
  listItem.innerHTML = null;
});

addItem.addEventListener("click", () => {
  let color;
  if (input.value == "") return;
  if (i < 4) {
    color = colors[i];
    console.log(color);
    i++;
  } else {
    i = 0;
    color = colors[i];
    i++;
  }
  const newItem = `
  <div id=${counter} class="task" style="background:linear-gradient(to right, ${whiteColor}, ${color});">
  <h2 class="task__name" id="title">${input.value}</h2>
  <span>
    <img id="delete" class="icon icon--delete" src="./images/delete.svg" alt="" />
    <img id="edit" class="icon icon--delete" src="./images/edit.svg" alt="" />
    <img id="done" class="icon icon--delete" src="./images/ok.svg" alt="" />

  </span>
</div>`;

  listItem.innerHTML += newItem;
  input.value = "";
  counter++;
});

listItem.addEventListener("click", (e) => {
  if (e.target.id == "done") {
    const item = e.target.closest(".task");
    const title = item.querySelector("#title");
    title.classList.add("done");
  } else if (e.target.id == "edit") {
    editBox.style.display = "block";
    const item = e.target.closest(".task");
    const title = item.querySelector("#title");
    editText.value = title.textContent;
    editButton.addEventListener("click", () => {
      title.textContent = editText.value;
      editBox.style.display = "none";
    });
  } else if (e.target.id == "delete") {
    const item = e.target.closest(".task");
    item.remove();
  }
});
