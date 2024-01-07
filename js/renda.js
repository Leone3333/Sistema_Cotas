function calculoRendaPerCapita() {
    
    let qttFamilia = parseInt(document.getElementById('qttFamilia').value) || 0;
    let rendaPai = parseFloat(document.getElementById('rendaPai').value) || 0;
    let rendaMae = parseFloat(document.getElementById('rendaMae').value) || 0;
    let rendaSua = parseFloat(document.getElementById('rendaSua').value) || 0;
    let rendaOutro = parseFloat(document.getElementById('rendaOutro').value) || 0;

    rendaFamilia = rendaPai + rendaMae + rendaSua + rendaOutro;

    rendaPerCapita = rendaFamilia / qttFamilia;

    if (rendaPerCapita < 1412) {
        let mensagemSucesso = "Renda por capita: " +  rendaPerCapita.toFixed(1) + " Você tem direito a cota";
        alert(mensagemSucesso);
        
    } else {
        let mensagemNegado = "Renda por capita: " +  rendaPerCapita.toFixed(1) + " Você não tem direito a cota";
        alert(mensagemNegado);
 
    }

    return false
}

