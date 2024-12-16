const item = document.getElementById("item")
const todobox = document.getElementById("to-do-list")


item.addEventListener(
    "keyup", 
            function(event){
            if(event.key == "Enter"){
            addTodo(this.value)
            this.value = ""
        }

    }
)

const addTodo = (item) =>{
    const listitem = document.createElement("li");
    listitem.innerHTML = ` 
         ${item}
    <i class="fa-solid fa-xmark"></i>
    `;
    listitem.addEventListener("click",
        function(){
            this.classList.toggle("done");
        }
    )
    listitem.querySelector("i").addEventListener(
        "click",
        function() {
            listitem.remove()
        }
    )

    todobox.appendChild(listitem)
}