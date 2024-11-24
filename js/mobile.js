/*pesquisar como fazer a pesquisa e filtro, puxar por um nome ou letra
fazer adiçã das traferas já formatadas no html na tag <div class="container-task-list">
fazer o alterar, excluir e concluir
no concluir, a tarefa tem de sumir
criar o alert modal antes de cada alteração*/


const openModal = document.querySelector("button");
const modal = document.querySelector("dialog");
const closeModal = document.querySelector("dialog button");

openModal.onclick = function(){
    modal.showModal();

}
closeModal.onclick = function (){
    modal.close();
}
