const sheet = new CSSStyleSheet();
sheet.insertRule(`.h1 {
                  color: green;
                }`
);
document.adoptedStyleSheets = [sheet];  

function inicio() {
        let nome = window.prompt('Qual é o seu nome?')
        let resultado = window.document.getElementById('resultado')
        
        let mes = window.prompt('Digite o mês que você nasceu: ')
        let resultado2 = window.document.getElementById('resultado2')

        let ano = window.prompt('Digite o ano que você nasceu: ')
        let resultado4 = window.document.getElementById('resultado4')

        var idade = 2023 - ano

        if (mes==1){
            mes = "janeiro"
            msmes = "Você é forte, apenas se esqueceu disso. Estou com você, não desista!"
        }else if (mes==2){
            mes = "fevereiro"
            msmes = "Cada um brilha de um jeito. Descubra a sua maneira e projete brilho para o mundo!"
        }else if(mes==3){
            mes = "março"
            msmes = "Bom dia! Que hoje você acredite na sua força, nos seus objetivos, na sua determinação, na sua coragem e em você!"
        }else if(mes==4){
            mes = "abril"
            msmes = "O projeto mais importante da sua vida é você!"
        }else if(mes==5){
            mes = "maio"
            msmes = "Você só vence amanhã se não desistir hoje."
        }else if(mes==6){
            mes = "junho"
            msmes = "Comece apenas acreditando que tudo dará certo."
        }else if(mes==7){
            mes = "julho"
            msmes = "Pensamentos felizes fazem a gente voar."
        }else if(mes==8){
            mes = "agosto"
            msmes = "Calma. Amanhã você continua. A vida é cíclica, deixa ela girar."
        }else if(mes==9){
            mes = "setembro"
            msmes = "Sim, você consegue. Não deixe que os pensamentos negativos te digam o contrário."
        }else if(mes==10){
            mes = "outubro"
            msmes = "Não deixe a maldade do mundo endurecer seu coração e tirar o melhor de você."
        }else if(mes==11){
            mes = "novembro"
            msmes = "Quando for a hora certa, você vai entender porque demorou tanto."
        }else if(mes==12){
            mes = "dezembro"
            msmes = "“E se eu cair?” Minha querida e se você voar?"
        }else{
            mes = "Mês inválido"
        }

        resultado.innerHTML = `<p>Olá, <strong>${nome}</strong>! É um grande prazer te conhecer! &#x1F596;`
        resultado2.innerHTML = `<p><strong>${nome}</strong>, tenho uma mensagem para você que nasceu em <strong>${mes} de ${ano}<strong>: </p> `
        resultado3.innerHTML = `<h1 class="h1">${msmes}</h1>`
        resultado4.innerHTML = `<p>Você terá <strong>${idade}</strong> anos de idade ao terminar o ano!</p>`
}

