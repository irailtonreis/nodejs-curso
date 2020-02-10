const EventEmmitter = require('events');
class MeuEmissor extends EventEmmitter {

}

const meuEmissor = new EventEmmitter();
const nomeEvento =  'usuario:click'
meuEmissor.on(nomeEvento, function(click){
    console.log('um usuário clicou', click);
})

// meuEmissor.emit(nomeEvento, 'Clicou na barra de rolagem');
// meuEmissor.emit(nomeEvento, 'Clicou no ok ');

// let contador = 0;
// setInterval(() => {
//     meuEmissor.emit(nomeEvento, 'no ok'+ contador++)
// }, 1000);

const stdin = process.openStdin()
stdin.addListener('data', function(value){
    console.log(`Você digitou: ${value.toString().trim()}`);
})