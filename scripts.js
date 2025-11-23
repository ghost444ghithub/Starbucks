/*  
    JavaScript NÃO é Java
    Variáveis (Qualquer Linguagem de Programação)

    - Algoritmo (Receita de Bolo)
        [x] Descobrir quando o usuário clicou no botão
        [x] Assim que o botão for clicado...
        [ ] Trocar a cor de fundo
        [ ] Trocar a imagem principal

    - Funções 
      - Pedacinhos de código QUE, só executam quando são chamados
*/

// HTML = document
// QuerySeclector -> Selecionar ou Puxar o que eu pedir

let circulo = document.querySelector('.circulo')
let imagem = document.querySelector('.copo')


function trocarACor(cor){
    circulo.style.background = cor
}

function trocarImagem(endereco){
    imagem.src = endereco
}

    function selecionarProduto(nome, imagem, cor) {
            document.getElementById("resumoProduto").innerText = nome;
            document.getElementById("imgProduto").src = imagem;
            document.getElementById("produtoSelecionado").value = nome;
            document.getElementById("imagemSelecionada").value = imagem;
            document.getElementById("bgCirculo").style.background = cor;
        }


   function mostrarMensagem() {
            document.getElementById("mensagem").classList.toggle("mensagem-oculta");
        }

        document.getElementById("formCompra").addEventListener("submit", function(event) {
    event.preventDefault(); // impede envio automático

    const pagamento = document.querySelector('select[name="pagamento"]').value;

    if (pagamento === "Pix") {
        document.getElementById("qrPix").classList.remove("mensagem-oculta");
    } else {
        alert("Compra finalizada com " + pagamento);
        // se quiser enviar o formulário de verdade, descomente abaixo:
        // this.submit();
    }
});
