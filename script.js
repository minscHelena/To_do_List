feather.replace();

let contador = 0;
let input = document.querySelector("input");
let btnAdd = document.querySelector("button");
let main = document.querySelector("main");

let modal = document.querySelector("dialog");
let btnModal = document.querySelector("button");

let select = document.querySelector("select");

btnAdd.addEventListener("click", (e) =>{

let valorInput = input.value;


if (valorInput !== "" && valorInput !== null) {
  ++contador;

  let novoItem = `<div id = ${contador} class="task">
            <p id = ${contador} class="task-name">${valorInput}</p>
            <div>
                <select id = ${contador} class="rank" onchange="mudaCor(this, ${contador})">
                    <option value="">Prioridade</option>
                    <option id="pri" value="#F07474">Tá atrasado!</option>
                    <option id="pri" value="#ECF074">Se liga!</option>
                    <option id="pri" value="#749FF0">Tá tranquilo!</option>
                </select>
            </div>
            <div class="icons">
                <div class="complete-icon">
                    <img src="img/check-square.svg" alt="" onclick="openModal(${contador})">
                </div>
                <div class="edit-icon">
                    <img src="img/edit.svg" alt="">            
                </div>
                <div class="delete-icon">
                    <img src="img/trash-2.svg" alt="" onclick="openModal(${contador})"">            
                </div>
                </div>
            </div>`;
  main.innerHTML += novoItem;

  input.value = "";
  input.focus();
}
});

function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
  modal.close();
  
};
function openModal(id) {
  modal.showModal();
    
};
function fecharModal(){
  modal.close();
};

function mudaCor(pegaCor, id) {
  let bg = document.getElementById(id);

  let cor = pegaCor.value;

  bg.style.backgroundColor = cor;
  bgSelect.style.backgroundColor = cor;

};


input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btnAdd.click();
  }
});

