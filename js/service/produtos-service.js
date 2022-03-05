angular.module("listaTelefonica").service('produtosService', function ($http){
    const api = 'http://localhost:3000/products'; 
    
    this.cadastrarProduto = function (callback){
        var req = {
            method : 'GET',
            URL: api,
            headers: {
                'Content-Type': 'application/json', 
                Accept: 'application/json',
            },
         }
         var response = $http(req)

         response.then(function(data){
             callback({data:data})
            })
        response.catch(function(data){
            callback({msg: "error"})
        })
    }

})