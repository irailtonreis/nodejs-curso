// Obter usuário
// Obter o número de telefone de um usuário a parti do id 
// Obter endereço de usuário por id 
// Importamos um modulo interno do node.js
const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);
function obterUsuario(){
    // Quando der algum problema -> reject(error)
    // Quando sucessso -> resolve 
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function(){
            // return reject(new Error('DEU RUIM DE VERDADE'))
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000);
    })

}

function obterTelefone(idUsuario){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            return resolve({
                telefone: '97987987980',
                ddd: '11'
            });
        }, 2000);

    })

}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: "rua dos bobos",
            numero: 0,
        })
    }, 2000);
}
// Adicionar async e automaticamente ela retorna uma promise

async function main(){

    try {
        console.time('medida-promise');
        const usuario = await obterUsuario();
        // const telefone = await obterTelefone(usuario.id);
        // const endereco = await obterEnderecoAsync(usuario.id);

        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ]);

        const endereco = resultado[1]
        const telefone = resultado[0]

        console.log(`
        Nome: ${usuario.nome},
        Telefonr: (${telefone.ddd}) ${telefone.telefone},
        Endereço: ${endereco.rua} ${endereco.numero}
        `);
        console.timeEnd('medida-promise');
    } catch (error) {
       console.error("DEU RUIM", error);
    }
}

main();
// const usuarioPromise = obterUsuario();
// // Para manipular o sucesso usamos .then 
// // Para manipular erros usamos o .catch
// usuarioPromise
// .then(function(usuario){
//     return obterTelefone(usuario.id)
//     .then(function resolverTelefone(result){
//         return {
//             usuario: {
//                 name: usuario.nome,
//                 id: usuario.id
//             },
//             telefone: result
//         }
//     }).then(function(resultado){
//         const endereco = obterEnderecoAsync(resultado.usuario.id);
//         return endereco.then(function resolverEndereco(result){
//             return {
//                 usuario: resultado.usuario,
//                 telefone: resultado.telefone,
//                 endereco: result,
//             }      
//         })
//     })
// })
// .then(function(resultado){
//     console.log(`
//         Nome: ${resultado.usuario.nome},
//         Endereço: ${resultado.endereco.rua} ${resultado.endereco.numero}
//         Telefone: (${resultado.telefone.ddd})${resultado.telefone.telefone}
//     `);
// })
// .catch(function(error){
//     console.error('DEU RUIM', error);
// })

// obterUsuario(function resolverUsuario(error, usuario){
//     if(error){;
//         console.error("DEU RUIM Usuario", error);
//         return;
//     }
//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
//         if(error1){;
//             console.error("DEU RUIM Telefone", error);
//             return;
//         }
//         obterEndereco(usuario.id, function obterEndereco(error2, endereco){
//             if(error2){;
//                 console.error("DEU RUIM endereco", error);
//                 return;
//             }
//             console.log(`
//             nome: ${usuario.nome},
//             Endereço: ${endereco.rua} ${endereco.numero},
//             Telefone: ${telefone.ddd} ${telefone.telefone},
//             `)
//         });

//     });
 
// });
// const telefone = obterTelefone(usuario.id);

// console.log("telefone", telefone);