
//lista de filmes
let biblioteca = [];

//butão para adicionar filme ao obj
const btn = document.querySelector(".adcLivro");
const btnPegar = document.querySelector(".pegarLivro");
const btnDevolver = document.querySelector(".devolverLivro");
const btnDisponivel = document.querySelector(".disponivel");
const btnEmprestado = document.querySelector(".emprestado")
let divLista = document.createElement('div');

//adicionando filme na biblioteca ao clicar no botão
btn.addEventListener("click", function(){
    //objeto filme
    let livro = {
        titulo: '',
        autor: '',
        disponivel: true,
        emprestimos: 0
    }
    let nomeFilme = document.querySelector(".nomeLivro").value.toLowerCase();
    let nomeAutor = document.querySelector(".nomeAutor").value.toLowerCase();

    //completando o objeto
    livro.titulo = nomeFilme;
    livro.autor = nomeAutor;
    console.log(livro);

    biblioteca.push(livro);
    console.log(biblioteca);

    limparCampos();
})

// emprestando livro
btnPegar.addEventListener("click", function(){
    if(biblioteca.length === 0){
        alert("biblioteca vazia");
    }
    else{
        let nomeFilme = document.querySelector(".nomeLivro").value.toLowerCase();
        let nomeAutor = document.querySelector(".nomeAutor").value.toLowerCase();

        let livroEncontrado = false;
        
        for(let i = 0; i<biblioteca.length; i++){
            if(nomeFilme == biblioteca[i].titulo.toLowerCase() && nomeAutor == biblioteca[i].autor.toLowerCase()){
                if(biblioteca[i].disponivel){
                    biblioteca[i].disponivel = false;
                    biblioteca[i].emprestimos += 1;
                    alert(`O livro "${biblioteca[i].titulo}" foi emprestado com sucesso!`);
                }
                livroEncontrado = true;
                break;
            }
        }
        if(livroEncontrado === false){
            alert("Este livro não está presente na biblioteca");
        }
        
    }
    limparCampos();
    console.log(biblioteca);
})

//devolver livro
btnDevolver.addEventListener("click", function(){
    let nomeFilme = document.querySelector(".nomeLivro").value.toLowerCase();
    let nomeAutor = document.querySelector(".nomeAutor").value.toLowerCase();
    
    let livroEncontrado = false;
        
    for(let i = 0; i<biblioteca.length; i++){
        if(nomeFilme == biblioteca[i].titulo.toLowerCase() && nomeAutor == biblioteca[i].autor.toLowerCase()){
            if(biblioteca[i].disponivel === false){
                biblioteca[i].disponivel = true;
                alert(`O livro "${biblioteca[i].titulo}" foi devolvido com sucesso!`);
            }
            livroEncontrado = true;
            break;
        }
    }
    if(livroEncontrado === false){
        alert("Este livro não pertence a biblioteca");
    }
    limparCampos();
    console.log(biblioteca);
})

btnDisponivel.addEventListener("click", function(){
    divLista.innerHTML = '';
    let lista = document.createElement('ul');
    let titulo = document.createElement('h3');
    titulo.textContent = "Livros disponíveis: ";
    lista.appendChild(titulo);
    let livorsDisponiveis = biblioteca.filter(livro => livro.disponivel);

    if(livorsDisponiveis.length > 0){
        livorsDisponiveis.forEach(function(livro){
            let listaItem = document.createElement('li');
            listaItem.textContent = `Livro: ${livro.titulo}, Autor: ${livro.autor}`
            lista.appendChild(listaItem);
        })
    }
    else{
        alert("Nenhum livro disponível");
    }
    divLista.appendChild(lista)
    document.body.appendChild(divLista);
})

btnEmprestado.addEventListener("click", function(){
    divLista.innerHTML = '';
    let lista = document.createElement('ul');
    let titulo = document.createElement('h3');
    titulo.textContent = "Livros emprestados: ";
    lista.appendChild(titulo);
    let livrosEmprestados = biblioteca.filter(livro => !livro.disponivel);

    if(livrosEmprestados.length > 0){
        livrosEmprestados.forEach(function(livro){
            let listaItem = document.createElement('li')
            listaItem.textContent = `Livro: ${livro.titulo}, Autor: ${livro.autor}`;
            lista.appendChild(listaItem);
        })
    }
    else{
        alert("Nenhum livro emprestado");
    }
    divLista.appendChild(lista)
    document.body.appendChild(divLista);

})

function limparCampos(){
    document.querySelector(".nomeLivro").value = '';
    document.querySelector(".nomeAutor").value = '';
}





