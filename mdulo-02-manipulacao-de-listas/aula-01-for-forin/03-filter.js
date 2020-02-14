const { obterPessoas } = require('./service');

Array.prototype.meuFilter = function(callback){
    const lista = [];
    for(index in this){
        const item = this[index]
        const result = callback(item, index, this)
        // 0, "", null, undefinid === false
        if(!result) continue;
        lista.push(item)
    }
    return lista;
}
async function main(){
    try {
        const {results} = await obterPessoas('a');
      
        // const familiaLars = results.filter(function(item){
        //     // Por padrão deve retornar um booleano
        //     // para informar se deve remover ou não da lista
        //     // False -> remove da lista True-> mantém 
        //     // Não encontrou =-1
        //     // Encontrou = posiçaoNoArray
        //     const result = item.name.toLowerCase().indexOf('lars') !== -1
        //     return result
        // });
        const familiaLars = results.meuFilter((item, index, lista) =>{
            console.log(`Index ${index} `, lista.length);
           return item.name.toLowerCase().indexOf('lars') !== -1
        })
        const names = familiaLars.map((pessoa)=> pessoa.name);
        console.log(names);
    } catch (error) {
        console.error("Deu Ruim", + error)
    }
}

main();