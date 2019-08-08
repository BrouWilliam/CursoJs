# Curso de JavaScript - Curso em vídeo

- [ ] No final do ano de 2019 saber programar em JavaScript e não copiar mais código


Anotações do Curso:
# Aula #4

**1º Parte**<br><br>

**Como criar alertas no navegador?**<br><br>
 Os mais utitlizados:<br><br>
1º `window.alert('Meu primeiro alerta');` - Esse alerta você obrigador a clicar em Ok para fechar.<br>
2º `window.confirm('Meu primeiro alerta')` - Esse alerta te dar 2 opções: Ok ou Cancelar.<br>
3º `window.prompt('Qual o seu nome?')` - Esse alerta possui input para receber valor.<br>

---

# Aula #6


**1º Parte**<br>

**Como armazenar valor de um alert?**<br>
 `var nome = window.prompt('Digite um nome');`
 
**Como imprimir esse valor?**<br>
`window.alert('Seu nome é ' + nome?')`

---

**2º Parte**<br><br>

O valor digitado no campo do alert sempre será uma String, caso o valor seja numero e queira somar eles é preciso converter para numero, 
caso contrário ficará assim:<br><br>
Antes de converter: (5 + 5 = 55)<br>
Depois de converter: (5 + 5 = 10)<br><br>

**Como converter de String para Numero?**<br>

 Você pode utilizar 2 métodos:<br><br>
  1º  `Number.ParseInt();` que ficaria assim: `var numero = Number.parseInt(window.prompt('Digite um número'));` <br> ou  `var numero = Number.parseInt`<br><br>
  2º  `Number` apenas escrever (Number) kkkk que ficaria assim: `var numero = Number(window.prompt('Digite um número'));`<br><br>
  
  **Como converter de Numero para String?**<br>
    Você pode utilizar 2 métodos:<br><br>
  1º `String(nome_da_variavel)` que ficaria assim: `String(numero)`<br>
  2º `nome_da_variavel.toString()` que ficaria assim: `numero.toString()`<br>
  
  ---
  
**3º Parte**<br><br>
**Tipos de formatação de saida**<br><br>
 
 **Quando for imprimir os valores das variaveis existe 2 formas:**<br>
  
 1º `'Meu nome é: '+ nome` que ficará assim:  **Meu nome é William**<br>
 2º `Meu nome é ${nome}:` que ficará assim: **Meu nome é William** é a mesma coisa, mas esse é mais bonito kkkk<br>
 3º Caso você faça você não coloque o `+` ou `${}` não vai aparecer o seu nome que ficará assim: **Meu nome é nome**<br><br>
 
 
Sempre que utilizar o `${nome}` inserir **´** e não **'**, pois isso é um objeto!

---

**4º Parte**<br><br>

 **Como inserir casa decimal na formatação de número flutuante?**<br><br>
`nome_da_variavel.toFixed(2);`<br>
Caso queira trocar o **(.)** por **(,)**: `nome_da_variavel.toFixed(2).replace('.', ',');`<br>
Caso queira colocar valor da moeda local: `nome_da_variavel.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});`<br>

---
