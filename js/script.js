function adicionar()
{
 var tarefa = document.getElementById('tar1').value;
 document.getElementById('tabletarefa').innerHTML +='<tr id="tarefapen">'+'<td>'+'</td>'+'<td>'+tarefa+'</td>'+'<td>'+'<button onclick=remover(event.target)>Concluir</button>'+'</td>'+'</tr>';
}

 function remover(elementoClicado) {
    elementoClicado.closest("tr").remove();
  }