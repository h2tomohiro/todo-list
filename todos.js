const onClickAdd = () => {
  // get textbox and inicialize
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// delete elements in imcomplete list
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target)
};

const createIncompleteList = (text) => {
  // set div
  const div = document.createElement("div");
  div.className = "list-row";

  // set li
  const li = document.createElement("li");
  li.innerText = text;

  // set complete button
  const completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  completeButton.addEventListener("click", () => {
    // remove completed div from imcomplete list
    deleteFromIncompleteList(completeButton.parentNode);

    // elements to add complete list
    const addTarget = completeButton.parentNode;

    // get texts of todo
    const text = addTarget.firstChild.innerText;

    // inicilize following div
    addTarget.textContent = null;
    console.log(addTarget);

    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "Undo";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText
      createIncompleteList(text);
    })

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  // set delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  })

  // Set elements as sub elements in div
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // add todos in incomplete list
  document.getElementById("incomplete-list").appendChild(div);
};

document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());
