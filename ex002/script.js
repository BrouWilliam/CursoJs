function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Digita os valores certos amigão!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto');
            if(fsex[0].checked){
                genero = 'Homem'
                if(idade >= 0 && idade < 10){
                    img.setAttribute('src', 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/53393897_2107637965992504_8796106972261777408_n.jpg?_nc_cat=104&_nc_oc=AQl0f3m92H3vybqbrvpxufliPMAEPy1tPSl1Fzq1bB6mUiqSmQSCR4KKuHsjOJn9-ys&_nc_ht=scontent-gru2-2.xx&oh=3c7ca1e07180a90472a9ef0b05a6b104&oe=5DFB95B4')
                }
                else if(idade < 21){
                    img.setAttribute('src', 'https://img.quizur.com/f/img5ce062becf8f78.94197283.jpeg?lastEdited=1558209233')
                }
                else if (idade <50){
                    img.setAttribute('src', 'https://images.uncyc.org/pt/d/d1/Irineu1.jpg')
                }
                else{
                   img.setAttribute('src', 'http://paradasp.org.br/wp-content/uploads/2019/09/bolsonaro-familia-homem-mulher-lixo.jpg') 
                }
            }
            else if(fsex[1].checked){
                genero = 'Mulher'
                if(idade >= 0 && idade <= 10){
                    img.setAttribute('src', 'https://cdn.pixabay.com/photo/2014/12/30/13/16/baby-583914_960_720.jpg')
                }
                else if(idade < 21){
                    img.setAttribute('src', 'https://www.seligaalagoinhas.com.br/wp-content/uploads/2018/08/Desafio-da-Momo-preocupa-pais-ao-redor-do-pa%C3%ADs-entenda.jpg')
                }
                else if (idade <50){
                    img.setAttribute('src', 'https://cdn.destakjornal.com.br/images/2019-06/img_797x448$2019_06_04_11_44_22_50997.jpg')
                }
                else{
                    img.setAttribute('src', 'https://image.freepik.com/fotos-gratis/mulher-idosa-que-sorri-com-dois-dedos-levantados_1187-2566.jpg')
                }
            }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}