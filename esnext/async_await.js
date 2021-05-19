function esperarPor(tempo = 2000) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, tempo);
    });
  }
  
// esperarPor(2000)
//   .then(() => console.log("Executando promisse"))
//   .then(esperarPor)
//   .then(() => console.log("Executando promisse"))
//   .then(esperarPor)
//   .then(() => console.log("Executando promisse"))


function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    }
    )
}

async function executar() {
    let valor = await retornarValor()

    await esperarPor(2000)
    console.log(`Async 1 ${valor} ...`) 
    await esperarPor(2000)
    console.log(`Async 2 ${valor + 1} ...`) 
    await esperarPor(2000)
    console.log(`Async 3 ${valor + 2} ...`) 

    return valor + 3
//FAZ AWAIT EM UMA FUNCAO PROMISSE
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()