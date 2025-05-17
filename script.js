const newTaskInput = document.querySelector(".newTask");
const addTaskBtn = document.querySelector(".addTaskBtn");
const displayTasks = document.querySelector(".displayTasks");

addTaskBtn.addEventListener("click", () => {
    const value = newTaskInput.value;

    if(value.trim() !== "") {
        const li = document.createElement("li");
       
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";

        const text = document.createTextNode(" " + value);

        checkBox.addEventListener("change", () => {
            if(checkBox.checked) {
                li.style.textDecoration = "line-through";
            } else {
                li.style.textDecoration = "none";
            }
        });


        //creating deleteBtn and appending it to displayTasks container
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.style.marginLeft = "10px";
            deleteBtn.addEventListener("click", () => {
                displayTasks.removeChild(li);
            })
            
        

        li.appendChild(checkBox);
        li.appendChild(text);
        li.appendChild(deleteBtn);

        displayTasks.appendChild(li);
        newTaskInput.value = "";
    }
    
 

});


