$(function(){
    const buttonX = $('.buttons > #btnX')
    const buttonO = $('.buttons > #btnO')
    const cells = $('.cell').toArray()

    // Função que cria um elemento HTML X
    const elementHTMLX = () => {
        let elementHtmlImgx = document.createElement("img")
        elementHtmlImgx.setAttribute("class", "imageX")
        elementHtmlImgx.setAttribute("src", "../assets/x.png")
        elementHtmlImgx.setAttribute("alt", "Imagem_X")
    }
    // Função que cria um elemento HTML O
    const elementHTMLO = () => {
        let elementHtmlImgo = document.createElement("img")
        elementHtmlImgo.setAttribute("class", "imageO")
        elementHtmlImgo.setAttribute("src", "../assets/circle.png")
        elementHtmlImgo.setAttribute("alt", "Imagem_O")
    }
    // Função que verifica se uma célula está vazia ou com o valor X
    const cellsEmptyValidationX = ()=>{
        if ($('.cell').is(':empty')) {
            $('.cell').append(elementHTMLX())
        } else {
            if($('.cell').find('img.imageO').length === 0) {
                $('.cell').append(elementHTMLX())
            } else {
                alert(`Célula já preenchida com o valor X`)
            }
        }
    }
    // Função que verifica se uma célula está vazia ou com o valor O
    const cellsEmptyValidationO = ()=>{
        if ($('.cell').is(':empty')) {
            $('.cell').append(elementHTMLO())
        } else {
            if($('.cell').find('img.imageX').length === 0) {
                $('.cell').append(elementHTMLO())
            } else {
                alert(`Célula já preenchida com o valor O`)
            }
        }
    }
    // Iterando sobre o array de células
    $.each(cells, function(index, element){
        $(element).on('click', ()=>{
            cellsEmptyValidationX()
        })
    })
});