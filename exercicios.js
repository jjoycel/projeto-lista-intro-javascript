// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
    // implemente sua lógica aqui
    return num1 + num2
  }
  
  // EXERCÍCIO 0B
  function imprimeMensagem() {
    // implemente sua lógica aqui
    const mensagem = prompt('Digite uma mensagem!')
  
    console.log(mensagem)
  }
  
  // EXERCÍCIOS PARA FAZER ------------------------------------------------------------------
  
  // EXERCÍCIO 01
  function calculaAreaRetangulo() {
    // implemente sua lógica aqui
    const altura = prompt(Number("Altura"))
    const largura = prompt(Number("largura"))
    
    const areaDoRetangulo = altura*largura
      console.log(areaDoRetangulo)
  }
  
  
  // EXERCÍCIO 02
  function imprimeIdade() {
    // implemente sua lógica aqui
      
      const anoAtual = prompt(Number("Ano Atual"))
      const anoDeNascimento = prompt(Number("Ano de nascimento"))
      const idade = anoAtual-anoDeNascimento
    
      console.log(idade)
  
  }
  
  // EXERCÍCIO 03
  function calculaIMC(peso, altura) {
    // implemente sua lógica aqui
  
    // const peso = prompt("peso em kg")
    // const altura = prompt("Altura em metros")
    const imc = peso / (altura*altura)
      return imc
  }
  
  // EXERCÍCIO 04
  function imprimeInformacoesUsuario() {
    // implemente sua lógica aqui
    const nomeUsuario = prompt("Nome de Usuário")
    const idadeUsuario = prompt("Idade do Usuario")
    const emailUsuario = prompt("email do Usuário")
    console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
  }
  
  
  // EXERCÍCIO 05
  function imprimeTresCoresFavoritas() {
    // implemente sua lógica aqui
  
      
      const corFavorita1 = prompt("cor favorita 1")
      const corFavorita2 = prompt(" cor favorita 2")
      const corFavorita3 = prompt(" cor favorita 3")
      
      const arrayCores = [corFavorita1,corFavorita2,corFavorita3]
  
    console.log(arrayCores)
  }
  
  
  // EXERCÍCIO 06
  function retornaStringEmMaiuscula(string) {
    // implemente sua lógica aqui
  
  const stringMaiuscula = string.toUpperCase()
  
  return stringMaiuscula
  }
  
  // EXERCÍCIO 07
  function calculaIngressosEspetaculo(custo, valorIngresso) {
      // implemente sua lógica aqui
    return custo/valorIngresso
  }
  console.log(calculaIngressosEspetaculo())
  
  
  // EXERCÍCIO 08
  function checaStringsMesmoTamanho(string1, string2) {
    // implemente sua lógica aqui
   
    const verifica = string1.length === string2.length
    return verifica
   }
  
  // EXERCÍCIO 09
  function retornaPrimeiroElemento(array) {
    // implemente sua lógica aqui
   primeiroElemento = array[0]
   return primeiroElemento
  }
  
  // EXERCÍCIO 10
  function retornaUltimoElemento(array) {
    // implemente sua lógica aqui
    
     return array[array.length-1]
  }
  
  // EXERCÍCIO 11
  function trocaPrimeiroEUltimo(array) {
    // implemente sua lógica aqui
    const ultimoNumero = array[array.length-1] 
    const primeiroNumero = array[0]
    
    array.pop()
    array.shift()
    
    array.unshift(ultimoNumero)
    array.push(primeiroNumero)
    
    return array
  }
  
  // EXERCÍCIO 12
  function checaIgualdadeDesconsiderandoCase(string1, string2) {
    // implemente sua lógica aqui
  
  return string1.toUpperCase() === string2.toUpperCase()
  
  }
  
  // EXERCÍCIO 13
  function checaRenovacaoRG(anoAtual, anoNascimento, anoEmissaoRg) {
    // implemente sua lógica aqui
    anoAtual = prompt("ano atual")
    console.log("Ano atual:", anoAtual)
  
    anoNascimento = prompt("ano de nascimento")
    console.log("ano de nascimento:", anoNascimento)
    
    anoEmissaoRg = prompt("ano emissão do RG")
    console.log("ano de emissão do RG")
  
    
  }
  
  // EXERCÍCIO 14
  function checaAnoBissexto(ano) {
    // implemente sua lógica aqui
  
  }
  
  // EXERCÍCIO 15
  function checaValidadeInscricaoLabenu() {
    // implemente sua lógica aqui
  }