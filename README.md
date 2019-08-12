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

# Aula #5

**Operadores**<br><br>

Aritiméticos e Atribuição<br><br>

 ***Ordem de precedência***<br><br>
`()`<br>
`**`<br>
`* / %`<br>
`+ -`<br><br><br>
 
 ***Atribuição Simples***<br><br>
`var a = 5 + 3`<br>
`var b = a % 5`<br>
`var c = 5 * b **2`<br>
`var d = 10 - a / 2`<br>
`var e = 6 * 2 / d`<br>
`var f = b % e + 4 / e`<br><br>
 
 ***Auto-atribuições***<br><br>
`var n = 3`<br>
`var n + 4`<br>
`var n - 5`<br>
`var n * 4`<br>
`var n / 2`<br>
`var n + ** 2`<br>
`var n % 5`<br>

 ***Simplificado***<br><br>
`var n +=4`<br>
`var n -=4`<br>
`var n *=4`<br>
`var n /=2`<br>
`var n **=2`<br>
`var n %=5`<br>

***Incremento***<br><br>
 `var n++`<br>
 `var n--`<br>
 `var --n`<br>
 `var ++n`<br>
 
 ---
 
 Relacionai, Lógicos e Ternário<br<br>
 
 ***Relacionais***<br><br>
 `> | 5 > 2 = true`<br>
 `< | 7 < 4 = false`<br>
 `>= | 5 > 2 = true`<br>
  `>= | 5 >= 2 = true`<br>
  `<= | 9 <= 7 = false`<br>
  `== | 5 == 5 = true`<br>
  `!= | 4 != 4 = false`<br><br>
  
  ***Lógicos***<br><br>
`!  Negação`<br>
`&&  Conjução`<br>
`|| Disjunção`<br><br>

***Ternário***<br><br>
`? :`<br><br>

 ***Identidade***<br><br>
 `5 == 5 = true`<br>
 `5== '5' = true`<br>
 `5 === '5' = false`<br>
 `5 === 5 == true`<br><br>
 
 ***Precedência***<br><br>
 `() ** / ...`<br>
 `> < >= ...`<br>
 `! && ||`<br>
 
 ---
