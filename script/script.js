$(function(){
    const cells = $('.cell').toArray()
    let textoJogadaX = document.getElementById('btnX')
    let textoJogadaO = document.getElementById('btnO')
    // Função que cria um elemento HTML X
    const elementHTMLX = () => {
        let elementHtmlImgx = document.createElement("img")
        elementHtmlImgx.setAttribute("class", "imageX")
        elementHtmlImgx.setAttribute("src", "../assets_arquivos/x.png")
        elementHtmlImgx.setAttribute("alt", "Imagem_X")
        elementHtmlImgx.style.display = 'block'
        return elementHtmlImgx
    }
    // Função que cria um elemento HTML O
    const elementHTMLO = () => {
        let elementHtmlImgo = document.createElement("img")
        elementHtmlImgo.setAttribute("class", "imageO")
        elementHtmlImgo.setAttribute("src", "../assets_arquivos/circle.png")
        elementHtmlImgo.setAttribute("alt", "Imagem_O")
        elementHtmlImgo.style.display = 'block'
        return elementHtmlImgo
    }
    // Função que verifica se uma célula está vazia ou com o valor X
    const cellsEmptyValidationX = (cell) => {
        if ($('.cell').is(':empty')) {
            let iconX = elementHTMLX();
            $('.cell').append(iconX);
        } else if ($('.cell').find('img.imageO').length === 1) {
            alert(`Célula já preenchida com o valor O`);
        }
    }
    
    // Função que verifica se uma célula está vazia ou com o valor O
    const cellsEmptyValidationO = (cell) => {
        if ($('.cell').is(':empty')) {
            let iconO = elementHTMLO();
            $('.cell').append(iconO);
        } else if ($('.cell').find('img.imageX').length === 1) {
            alert(`Célula já preenchida com o valor X`);
        }
    }
    textoJogadaX.addEventListener("click", () => {
        JogadorAtual = 'X';
        document.querySelector("#textoJogada").textContent = 'Jogada X';
    });
    
    textoJogadaO.addEventListener("click", () => {
        JogadorAtual = 'O';
        document.querySelector("#textoJogada").textContent = 'Jogada O';
    });
    
    $.each(cells, function (index, element) {
        $(element).on('click', () => {
            if (JogadorAtual === 'X') {
                cellsEmptyValidationX(element);
                JogadorAtual = 'O';
                document.querySelector("#textoJogada").textContent = 'Jogada O';
            } else if (JogadorAtual === 'O') {
                cellsEmptyValidationO(element);
                JogadorAtual = 'X';
                document.querySelector("#textoJogada").textContent = 'Jogada X';
            }
        });
    });
    
});