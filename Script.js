const addBtn = document.getElementById('add');
addBtn.addEventListener('click', () => 
{
    addNewNote();
});

function addNewNote(){
    const note = document.createElement('div');
    note.classList.add('note')

    note.innerHTML=`
        <div class="notes">
            <div class="tools">
                <button class="edit"><i class="fas fa-clipboard"></i></button>
                <button class="delete"><i class="fas fa-trash"></i></button>
            </div>
            <div class="main hidden">

            </div>
            

            <textarea style="background-color:rgb(211, 240, 236);"></textarea>
        </div>
        `;
        

const editBtn =note.querySelector(".edit");
const deleteBtn =note.querySelector(".delete");

const main = note.querySelector(".main");
const textArea = note.querySelector("textarea");

editBtn.addEventListener("click", ()=>{
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
});
deleteBtn.addEventListener("click",() =>{
    note.remove();
});

textArea.addEventListener("input",(e) =>{
const {value}=e.target;


main.innerHTML=marked(value);
});

    document.body.appendChild(note);
}
