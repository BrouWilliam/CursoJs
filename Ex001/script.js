function carregar(){

    var msg = document.querySelector("#msg");
    var img = document.querySelector("#image");
    var data = new Date();
    var hora = data.getHours();
    
    msg.innerHTML = `Agora são ${hora} horas`
    
    if(hora >= 0 && hora < 12 ){
        img.src = 'https://www.frasesparawhats.com.br/wp-content/uploads/2019/02/bom-dia-viva-supere.jpg'
        document.body.style.background = 'blue'
    }
    else if(hora >=12 && hora < 18){
        img.src = 'https://www.frasesparawhats.com.br/wp-content/uploads/2019/01/boa-tarde-felicidade-meta.jpg'
        document.body.style.background = 'orange'
    }
    else{
        img.src = 'https://www.frasesparawhats.com.br/wp-content/uploads/2018/10/boa-noite-plante-fe.jpg'
        document.body.style.background = 'black'
    }
    
}
