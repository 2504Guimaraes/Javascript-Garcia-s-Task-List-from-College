/* 
    Lista 01 Garcia - treinando para a P1 - 14/05/2020 ------------
*/

/*
   Anotação de como funciona uma função JS dada em aula:
*/

// let idadeIvan = 21;
// let idadeNathalia = 24;

// function somaIdade_IvNa(idade_a, idade_b) {
  
//   let soma = idade_a + idade_b;
//   console.log(`A soma de ${idade_a} + ${idade_b} = ${soma} .`);
// }

// somaIdade_IvNa(idadeIvan, idadeNathalia);

// somaIdade_IvNa(12, 12);

// somaIdade_IvNa(15, 15);


// -----> Function To Watch something:

function to_watch(another_funct) {
    console.log(another_funct);
  }
  
  
  // Ex. 01 ------------------------------------------------------
  
  /*
  
    1. palavra chave = function => sinaliza o computador q tu quer fazer uma função.
    2. nome da função = nome qualquer que vc escolhe pra sua função, pode ser qualquer nome
    , por uma questão de bom senso, use um nome que tenha haver com a tarefa.
  
  */
  
  // let string = 'IvanGuimaraes12345';
  
  // function get_vowelsAnd_Numbers(string) {
  
  //   let vogais = 0;
  //   let numeros = 0;
    
  //   for (let symb of string) {
  //     if (   symb === 'A' || symb === 'a' 
  //         || symb === 'E' || symb === 'e'
  //         || symb === 'I' || symb === 'i'
  //         || symb === 'O' || symb === 'o'
  //         || symb === 'U' || symb === 'u' ) 
  //         {
  //             vogais += 1;
  //         }
  
  //     else if ( symb == 1 || symb == 2 || symb == 3 ||
  //               symb == 4 || symb == 5 || symb == 6 ||
  //               symb == 7 || symb == 8 || symb == 9 ||
  //               symb == 0 ) 
  //               {
  //                 numeros += 1;
  //               }
  //   }  
  
  //   console.log('numero vogais: ',vogais);
  //   console.log('numeros presentes: ', numeros);
  //   console.log('nº de vogais somado ao de números: ', vogais + numeros);
  // }
  
  // get_vowelsAnd_Numbers(string);
  
  
  // Ex. 02: ------------------------------------------------------------
  
  
  // function corHeader(arg) {
  
  //   let h1 = document.querySelector('#h1');
    
  //   if (arg === 0) {
  //     h1.style.backgroundColor = 'blue';
  //   }
  //   else if (arg === 1) {
  //     h1.style.backgroundColor = 'red';
  //   }
  
  //   else if (arg === 2) {
  //     h1.style.backgroundColor = 'yellow';
  //   }
  //   else {
  //     h1.innerText = 'ERRO - Nenhuma das cores foi escolhida! :P';
  //   }
  // }
  
  // corHeader(0);
  
  // Ex. 03: ------------------------------------------------------------
  
  
  //---------------------------------------------------------------------
  // -----> Jeito mais Inteligente:
  // --------------------------------------------------------------------
  
  // function criarLista_e_conteudo() {
  
  //   let lista = document.createElement('ul');
  //   lista.setAttribute('id', 'lista-exe03');
  
  //   let repetir = 0;
  
  //   while( repetir < 3) 
  //   {
  //     let indiceLista = document.createElement('li');
  //     indiceLista.setAttribute('class', 'idc-lista-ex03');
  //     indiceLista.appendChild(document.createTextNode(`${repetir + 1}º indice da lista.`));
  
  //     lista.appendChild(indiceLista);
  
  //     repetir += 1;
  //   }
    
  //   document.body.appendChild(lista);
  // }
  
  // criarLista_e_conteudo();
  
  //---------------------------------------------------------------------
  // -------> Jeito do Garcia:
  //---------------------------------------------------------------------
  
  // function criarLista_e_conteudo_B() {
  
  //   document.open();
  //   document.write('<ul id="lista_ex03">');
  //   document.write('<li>Primeiro indice lista.</li>');
  //   document.write('<li>Segundo Indice lista. </li>');
  //   document.write('<li>Terceiro Indice Lista.</li>');
  //   document.write('</ul>');
  //   document.close();
  // }
  
  // criarLista_e_conteudo_B();
  
  
  // Ex. 04: ------------------------------------------------------------
  
  
  // function paint_Paragraths_Using_Length() {
  
  //   let p1 = document.getElementById('a1'),
  //       p2 = document.getElementById('a2');
  
  //   let p1_compri = p1.innerText.length,
  //       p2_compri = p2.innerText.length;
    
  //   if (p1_compri > p2_compri) {
  //     p1.style.backgroundColor = 'green';
  //     p2.style.backgroundColor = 'red';
  //   }
  
  //   else if (p2_compri > p1_compri) {
  //     p2.style.backgroundColor = 'green';
  //     p1.style.backgroundColor = 'red';
  //   }
  
  // }
  
  // paint_Paragraths_Using_Length();
  
  
  // Exercício 05:
  
  // Ex. 5.1: ------------------------------------------------------------
  
  // function getNumbers() {
  
  //   let a1 = document.getElementById('a1'),
  //       a2 = document.getElementById('a2');
  
  //   a1 = parseInt(a1.innerText);
  //   a2 = parseInt(a2.innerText);
  
  //   if (a1 > 0 && a2 > 0) 
  //   {
  //     return a1 + a2;
  //   }
  // }
  
  // to_watch(getNumbers());
  
  // Ex. 5.2: ------------------------------------------------------------
  
  // let listA = [1,2,3,4,5,8];
  
  // function getList(lista) {
    
  //   let count = 0;
  
  //   for(let numero of lista) {
  
  //     if (numero % 2 == 0) 
  //     {
  //       count += 1;
  //     }
  //   }
  
  //   return count;
  // }
  
  // to_watch(
  //   `${getList(listA)} números pares.`
  // );
  
  // Ex. 5.3: ------------------------------------------------------------
  
  // let lista = [-21,21];
  
  // function getListINT(integerList) {
  
  //   let c = 0, cn = 0;
  
  //   for (let int of integerList ) {
  //     c += 1;
  
  //     if ( int < 0) {
  //       cn += 1;
  //     }
  //   }
  
  //   let regra_de_tres = (cn, c) => {
  
  //     let conta = (cn * 100) / c;
  //     return conta; 
  //   };
  
  //   return `${regra_de_tres(cn, c).toFixed(2)}% de números negativos.`;
  // }
  
  // to_watch(getListINT(lista));
  
  // Ex. 5.4: ------------------------------------------------------------
  
  // let palavra = 'Nathalia Caroline';
  
  // function readString(string) {
    
  //   let reverso = '';
  
  //   for (let i  = string.length -1; i >= 0; i--) {
  //     reverso += string[i];
  //   }
  
  //   return reverso;
  // }
  
  // to_watch(readString(palavra));
  
  
  
  // Exercício 06:
  
  // Ex. 6.1: ------------------------------------------------------------
  
  // function getAllParagraths() {
  
  //   let lista = document.querySelectorAll('p');
    
  //   lista.forEach( p => {
  //     document.write(p.innerHTML, '<br>');
  //   })
  // }
  
  // getAllParagraths();
  
  // Ex. 6.2: ------------------------------------------------------------
  
  // function repaint_AllParagraths() {
  
  //   let lista = document.querySelectorAll('p');
    
  //   lista.forEach( p => {
  //     p.style.color = 'blue';
  //   })
  // }
  
  // repaint_AllParagraths();
  
  
  
  // Exercício 07:
  
  // Ex. 7.1: ------------------------------------------------------------
  
  // Essa é igual a 6.1 - Bugada...
  
  // Ex. 7.2: ------------------------------------------------------------
  
  // function changeBtn_value() {
  
  //   let btnEl = document.createElement('button');
  //   btnEl.appendChild(document.createTextNode('OK'));
  
  //   document.body.appendChild(btnEl);
  
  //   let clicou = false;
  
  //   btnEl.addEventListener('click', () => {
  
  //     if (clicou === false) 
  //     {
  //       btnEl.innerHTML = 'CLICADO';
  //       clicou = true;
  //     }
  //     else if (clicou === true) 
  //     {
  //       btnEl.innerHTML = 'OK';
  //       clicou = false;
  //     }
  
  //   })
  // }
  
  // changeBtn_value();
  
  
  
  // Exercício 08:
  
  // let list_string = [
  //   'string 1',
  //   'string 2',
  //   'string 3',
  // ];
  
  // function tablelize(listString) {
  
  //   // 1. Montar a Tabela:
  
  //   let table = document.createElement('table');
  
  //   let th = document.createElement('th');
  //   th.appendChild(document.createTextNode('Header'));
  
  //   table.appendChild(th);
  
  //   let tbody = document.createElement('tbody');
  
  //   listString.forEach( index => {
  
  //     let nv_linha = document.createElement('tr');
  //     let nv_cel = document.createElement('td');
  
  //     nv_cel.appendChild(document.createTextNode(index));
  //     nv_linha.appendChild(nv_cel);
  //     tbody.appendChild(nv_linha);
  //   })
  
  //   table.appendChild(tbody);
    
  //   document.body.appendChild(table);
  
  //   // 2. Dar CSS à Tabela:
  
  //   table.style.border = '1px solid black';
  //   th.style.border = '1px solid black';
  
  //   let tds = document.querySelectorAll('td');
  //   tds.forEach( td => {
  //     td.style.border = '1px solid black';
  //   })
  
  // }
  
  // tablelize(list_string);
  
  // Exercício 09:
  
  // let email = 'guimaraes.ivan@hotmail.com';
  
  // function validateEmail(seu_email) {
  
  //   let isCorrect = false;
  
  //   for (let caracter of seu_email) 
  //   {
  //     if (caracter === '@') 
  //     {
  //       isCorrect = true;
  //     }
  //   }
  
  //   if (isCorrect != false) 
  //   {
  //     console.log('Seu email é valido! :D');
  //     document.write(seu_email);
  //   }
  //   else {
  //     console.warn('ERRO: Email inválido.');
  //   }
  // }
  
  // validateEmail(email);
  
  
  
  // Exercício 10:
  
  // let vetor = [
  //   'String 01',
  //   'String 02',
  //   'String 03',
  // ];
  
  // function buildTableof(list) {
  
  //   // Montar Tabela.
  
  //   let table = document.createElement('table');
  
  //   let tr = document.createElement('tr'),
  //       th = document.createElement('th'),
  //       th2 = document.createElement('th');
  
  //   th.appendChild(document.createTextNode('ID'));
  //   th2.appendChild(document.createTextNode('Valor'));
  
  //   tr.appendChild(th);
  //   tr.appendChild(th2);
  //   table.appendChild(tr);
  
  //   list.forEach((index, id) => {
  
  //     let nv_tr = document.createElement('tr'),
  //         nv_th = document.createElement('th'),
  //         nv_th2 = document.createElement('th');
  
  //     nv_th.appendChild(document.createTextNode(id));
  //     nv_th2.appendChild(document.createTextNode(index));
  //     nv_tr.appendChild(nv_th);
  //     nv_tr.appendChild(nv_th2);
  //     table.appendChild(nv_tr);
  //   })
  
  //   // por na DOM:
  
  //   document.body.appendChild(table);
  
  //   // Definir Estilo CSS.
  
  //   let ths = document.querySelectorAll('th');
  
  //   table.style.border = '1px solid';
  
  //   ths.forEach( th => {
  //     th.style.border = '1px solid';
  //   })
  
  // }
  
  
  // buildTableof(vetor);
  
  
  
  // Exercício 11:
  
  // Ex. 11.1: ------------------------------------------------------------
  
  // let string = "É um ótimo dia para aprender Javascript. Aprender é uma força.";
  
  // function returnLetter_Aa_in(list) {
  
  //   let count_A = 0,
  //       count_a = 0;
    
  //   for (let letra in list) 
  //   {
  //     if (list[letra] === 'A') 
  //     {
  //       count_A += 1;
  //     } 
      
  //     else if (list[letra] === 'a') 
  //     {
  //       count_a += 1;
  //     }
  //   }
  
  //   return { 'Maiusculas': count_A,'Minusculas': count_a };
  // }
  
  
  // Ex. 11.2: ------------------------------------------------------------
  
  
  let string = "É um ótimo dia para aprender Javascript. Aprender é uma força.";
  
  function buildTableOf_A(myString) {
  
    let table = document.createElement('table');
  
    let tr = document.createElement('tr'),
        th = document.createElement('th'),
        th2 = document.createElement('th'),
        th3 = document.createElement('th');
  
    th.appendChild(document.createTextNode('Palavra:'));
    th2.appendChild(document.createTextNode('Quantidade de letras (A ou a):'));
    th3.appendChild(document.createTextNode('Porcentagem de letras A:'));
  
    tr.appendChild(th);
    tr.appendChild(th2);
    tr.appendChild(th3);
    table.appendChild(tr);
    
    // Separar palavras por 1 ou + pontos; vírgulas e espaços, e por num array.
  
    const separar = (myString) => {
      
      let list_words = myString.split(/[., ]+/);
      let captured_words = [];
  
      for(let word of list_words) 
      {
        if (word.length > 0) 
        {
          captured_words.push(word);
        }
      }
  
      return captured_words;
    }
  
    let words = separar(myString);
  
    // Capturar dados desejados como: 
    // 1.Porcentagem (%)
    // 2. Palavra
    // 3. Número de letras A ou a (nº Aa)
  
    words.forEach( word => {
  
      let c_Aa = 0;
  
      for(let letter of word) 
      {
        if (letter === 'A' || letter === 'a') 
        {
          c_Aa += 1;
        }
      }
  
      let percent_Aa = (c_Aa * 100)/ word.length;
  
      let data_w = {
          palavras: word, 
          letras_Aa: c_Aa,
          porcentagem_letras_Aa: parseFloat(percent_Aa.toFixed(2)), 
      };
  
      // Montar linha da palavra usando seus dados:
  
      let nv_tr = document.createElement('tr'),
          nv_th = document.createElement('th'),
          nv_th2 = document.createElement('th'),
          nv_th3 = document.createElement('th');
    
      nv_th.appendChild(
        document.createTextNode(`"${data_w.palavras}"`)
      );
      nv_th2.appendChild(
        document.createTextNode(`${data_w.letras_Aa}`)
      );
      nv_th3.appendChild(
        document.createTextNode(`${data_w.porcentagem_letras_Aa}%`)
      );
  
      nv_tr.appendChild(nv_th);
      nv_tr.appendChild(nv_th2);
      nv_tr.appendChild(nv_th3);
      table.appendChild(nv_tr);
    })
  
    return table;
  }
  
  // // Ex. 11.3: ------------------------------------------------------------
  
  // // OBS: 11.3 testa e poe na tela a funçao do ex. 11.2
  
  function makeScript() {
  
    let btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Executar 11.2'));
    btn.style.margin = '10px 0';
    
    let executed = false;
  
    document.body.appendChild(btn);
  
    btn.addEventListener('click', () => {
      
      if (executed === false) {
        
        // Põe a Tabela na DOM:
        
        document.body.appendChild(buildTableOf_A(string))
  
        // Dar estilo a tabela:
  
        let table = document.querySelector('table');
        table.style.border = '1px solid';
  
        let trs = document.querySelectorAll('tr'),
            ths = document.querySelectorAll('th');
  
        trs.forEach( tr => tr.style.border = '1px solid');
        ths.forEach( th => th.style.border = '1px solid');
  
  
        executed = true;
      }
  
    });
  }
  
  makeScript();