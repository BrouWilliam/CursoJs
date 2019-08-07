# CursoJs
A meta é: No final do ano saber programar em JavaScript e não copiar mais código

Anotações do Curso:


# Aula #6


1º Parte<br>

Como armazenar valor de um alert?<br>
 `var nome = window.prompt('Digite um nome');`
 
Como imprimir esse valor?<br>
`window.alert('Seu nome é ' + nome?')`

---

2º Parte<br><br>

O valor digitado no campo do alert sempre será uma String, caso o valor seja numero e queira somar eles é preciso converter para numero, 
caso contrário ficará assim:<br>
Antes de converter: (5 + 5 = 55)<br>
Depois de converter: (5 + 5 = 10)<br> 

---

Como converter de String para Numero?<br><br>
  Você pode usar 2 métodos:<br>
  1º  `Number.ParseInt` que ficaria assim: `var numero = Number.parseInt(window.prompt('Digite um número'));` <br> ou  `var numero = Number.parseInt`<br>
  2º  `Number` apenas escrever (Number) kkkk que ficaria assim: `var numero = Number(window.prompt('Digite um número'));`<br>
  
  Como converter de Numero para String?<br>
    Você pode usar 2 métodos:<br>
  1º `String(nome_da_variavel)` que ficaria assim: `String(numero)`<br>
  2º `nome_da_variavel.toString()` que ficaria assim: `numero.toString()`<br>
  
 Tipos de formatação de saida<br>
  Quando for imprimir os valores das variaveis existe 2 formas:<br>
 1º `'Meu nome é: '+ nome` que ficará assim:  **Meu nome é William**<br>
 2º `Meu nome é ${nome}:` que ficará assim: **Meu nome é William** é a mesma coisa, mas esse é mais bonito kkkk e mais usando kkkk<br>
 3º Caso você faça você não coloque o `+` ou `${}` não vai aparecer o seu nome que ficará assim: **Meu nome é nome**<br>
