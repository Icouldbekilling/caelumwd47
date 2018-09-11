const btn = document.querySelector('#btnMudaLayout')

function mudaLayout(){ 
    console.log("teste");
}

function mudaTexto(){
    if (this.textContent == 'Linhas'){
        this.textContent = 'Blocos'
    }
    else {
        this.textContent = 'Linhas'
    }
}
btn.onclick = mudaTexto