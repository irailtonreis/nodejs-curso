const service = require('./service');
Array.prototype.meuMap = function(callback){
    const novoArrayMapeado = []
    for (let indice = 0; indice < this.length-1; indice++) {
        const result = callback(this[indice], indice);
        novoArrayMapeado.push(result);
    }
    return novoArrayMapeado;
}
 async function main(){
     try {
        const results = await service.obterPessoas('a');
        // const names = []
        // results.results.array.forEach(item => {
        //     names.push(item.names)
        // }); 

    //    const names = results.results.map((pessoa)=>{
    //         return pessoa.name;
    //     })

        // const names = results.results.map((pessoa)=> pessoa.name);

        const names = results.results.meuMap(function(pessoa, indice){
            return `[${indice}]${pessoa.name}`;
        })
        console.log('names', names);
     } catch (error) {
         console.error("DEU RUIM", error);
     }
 }

main();

