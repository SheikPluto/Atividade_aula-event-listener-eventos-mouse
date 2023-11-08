const produtoInfo = {
  quantidade: 1,
  valor: 11.66,
};

const addButton = document.getElementById('btn-adicionar-produto-01')
const input = document.getElementById('quantidade-produto-01')
const inputSubtrair = document.getElementById('btn-subtrair-produto-01')
const valorSubtotal = document.getElementById('valor-subtotal')
const quantTotal = document.getElementById('quantidade-subtotal')


function subtotalUpdate() {
  const total = produtoInfo * input.value

  const itensText = input.value > 1 ? ' itens' : ' item'

  valorSubtotal.innerText = (produtoInfo.valor * input.value).toFixed(2)

  quantTotal.innerText = input.value + itensText
}


// Adicionar Itens
addButton.addEventListener('click', () => {
  input.value = Number(input.value) + 1

  subtotalUpdate()
})

//Subtrair Itens
inputSubtrair.addEventListener('click', () => {
  if (input.value > 0) {
    input.value = Number(input.value) - 1
    subtotalUpdate()
  }
})







