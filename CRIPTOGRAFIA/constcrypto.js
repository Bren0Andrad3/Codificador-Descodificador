const texto =  //INSERÇÃO DA VARIÁVEL
`

breno
`
//CODIFICADOR
const transformerA = texto  => texto.replace(modificadorletraA, '1')
const transformerB = texto  => texto.replace(modificadorletraB, '2')
const transformerC = texto  => texto.replace(modificadorletraC, '3')
const transformerD = texto  => texto.replace(modificadorletraD, '4')
const transformerE = texto  => texto.replace(modificadorletraE, '5')
const transformerF = texto  => texto.replace(modificadorletraF, '6')
const transformerG = texto  => texto.replace(modificadorletraG, '7')
const transformerH = texto  => texto.replace(modificadorletraH, '8')
const transformerI = texto  => texto.replace(modificadorletraI, '9')
const transformerJ = texto  => texto.replace(modificadorletraJ, '10')
const transformerK = texto  => texto.replace(modificadorletraK, '11')
const transformerL = texto  => texto.replace(modificadorletraL, '12')
const transformerM = texto  => texto.replace(modificadorletraM, '13')
const transformerO = texto  => texto.replace(modificadorletraO, '14')
const transformerP = texto  => texto.replace(modificadorletraP, '15')
const transformerQ = texto  => texto.replace(modificadorletraQ, '16')
const transformerR = texto  => texto.replace(modificadorletraR, '18')
const transformerS = texto  => texto.replace(modificadorletraS, '19')
const transformerT = texto  => texto.replace(modificadorletraT, '20')
const transformerU = texto  => texto.replace(modificadorletraU, '21')
const transformerV = texto  => texto.replace(modificadorletraV, '22')
const transformerW = texto  => texto.replace(modificadorletraW, '23')
const transformerX = texto  => texto.replace(modificadorletraX, '24')
const transformerY = texto  => texto.replace(modificadorletraY, '25')
const transformerZ = texto  => texto.replace(modificadorletraZ, '26')
const transformerspace = texto  => texto.replace(modificadorESPACO, '27')

//FILTRAGEM DAS LETRAS
const modificadorletraA = /a/gi
const modificadorletraB = /b/gi
const modificadorletraC = /c/gi
const modificadorletraD = /d/gi
const modificadorletraE = /e/gi
const modificadorletraF = /f/gi
const modificadorletraG = /g/gi
const modificadorletraH = /h/gi
const modificadorletraI = /i/gi
const modificadorletraJ = /j/gi
const modificadorletraK = /k/gi
const modificadorletraL = /l/gi
const modificadorletraM = /m/gi
const modificadorletraN = /n/gi
const modificadorletraO = /o/gi
const modificadorletraP = /p/gi
const modificadorletraQ = /q/gi
const modificadorletraR = /r/gi
const modificadorletraS = /s/gi
const modificadorletraT = /t/gi
const modificadorletraU = /u/gi
const modificadorletraV = /v/gi
const modificadorletraW = /w/gi
const modificadorletraX = /x/gi
const modificadorletraY = /y/gi
const modificadorletraZ = /z/gi
const modificadorESPACO = /\s/gi



const composicao = (...fns) => (arg) => fns.reduce((acc, fn) => fn(acc), arg);

const gerarResultado = composicao(
  transformerA,
  transformerB,
  transformerC,
  transformerD,
  transformerE,
  transformerF,
  transformerG,
  transformerH,
  transformerI,
  transformerJ,
  transformerK,
  transformerL,
  transformerM,
  transformerO,
  transformerP,
  transformerQ,
  transformerR,
  transformerS,
  transformerT,
  transformerU,
  transformerV,
  transformerW,
  transformerX,
  transformerY,
  transformerZ,
  transformerspace,
  );


console.log(gerarResultado(texto))






/*VBO TTec:

Linha inteira + poesia aleatoria

CODIFICADOR 

1 - Função recebe texto

2 - Função ler cada caractere do texto

3 - Função que transforme cada caracter em outro caracter

4 - Função que imprime o texto




DECOFICIADOR:

Pensar em usar uma lista com slice + regex

1 - Pegar função do código convertido

2 - Função que decodifica o texto

3 - Printar o texto decodificado






SISTEMA DE CRIPTOGRAFIA:*/