feather.replace();

let contador = 0;
let input = document.querySelector("input");
let btnAdd = document.querySelector("button");
let main = document.querySelector("main");

btnAdd.addEventListener("click", (e) =>{
//PEGAR O VALOR DIGITADO NO INPUT
let valorInput = input.value;

//SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
  ++contador;

  let novoItem = `<div id = ${contador} class="task">
            <p id = ${contador} class="task-name">${valorInput}</p>
            <div>
                <select id = ${contador} class="rank">
                    <option value="">Prioridade</option>
                    <option value="p-alta">Tá atrasado!</option>
                    <option value="p-media">Se liga!</option>
                    <option value="p-baixa">Tá tranquilo!</option>
                </select>
            </div>
            <div class="icons">
                <div class="complete-icon">
                    <img src="img/check-square.svg" alt="">
                </div>
                <div class="edit-icon">
                    <img src="img/edit.svg" alt="">            
                </div>
                <div class="delete-icon">
                    <img src="img/trash-2.svg" alt="" onclick="deletar(${contador})">            
                </div>
                </div>
            </div>`;
  //ADICIONAR NOVO ITEM NO MAIN
  main.innerHTML += novoItem;

  //ZERAR OS CAMPINHOS
  input.value = "";
  input.focus();
}
});
  
function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

/*function marcarTarefa(id) {
  var item = document.getElementById(id);
  var classe = item.getAttribute("class");
  console.log(classe);

  if (classe == "item") {
    item.classList.add("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("mdi-circle-outline");
    icone.classList.add("mdi-check-circle");

    item.parentNode.appendChild(item);
  } else {
    item.classList.remove("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("mdi-check-circle");
    icone.classList.add("mdi-circle-outline");
  }
}*/

input.addEventListener("keyup", function (event) {
  //SE TECLOU ENTER (13)
  if (event.keyCode === 13) {
    event.preventDefault();
    btnAdd.click();
  }
});
