var request = require('request')

module.exports = {
    /*
    ** This method returns a promise
    ** which gets resolved or rejected based
    ** on the result from the API
    */
    item_api: function(id){
        let url = "https://api.mercadolibre.com/items/" + id;
        return new Promise((resolve, reject) => {
            request(url, { json: true }, (err, res, body) => {
                if (err) 
                    reject(err)
                
                let item = ({
                    "id": body.id,
                    "title": body.title,
                    "price": {
                        "currency":body.currency_id,
                        "amount": body.price,
                        "decimals": getDecimals(body.price),
                    },
                    "picture": body.pictures[0].url,
                    "condition": body.condition,
                    "free_shipping": body.shipping.free_shipping,
                    "sold_quantity": body.sold_quantity,
                    "description": "",
                });
                
                this.item_description_api(id).then(response => {
                    item.description = response;

                    resolve({item: item});
                }).catch(error => {
                    resolve({item: item});
                })

            });
        })
    },

    item_description_api: function(id){
        let url = "https://api.mercadolibre.com/items/" + id + "/description";
        return new Promise((resolve, reject) => {
            request(url, { json: true }, (err, res, body) => {
                if (err) 
                    reject(err)
                
                resolve(body.plain_text)
            });
        })
    },

    serch_api : function(query){
        let url = "https://api.mercadolibre.com/sites/MLA/search?q=" + query;
        return new Promise((resolve, reject) => {
            request(url, { json: true }, (err, res, body) => {
                if (err) reject(err)

                //first four items
                let items = [];
                for (i = 0; i < 4; i++) {
                    items.push({
                        "id": body.results[i].id,
                        "title": body.results[i].title,
                        "price": {
                            "currency": body.results[i].currency_id,
                            "amount": body.results[i].price,
                            "decimals": getDecimals(body.results[i].price)
                        },
                        "picture": body.results[i].thumbnail,
                        "condition": body.results[i].condition,
                        "free_shipping": body.results[i].shipping.free_shipping
                    });
                }

                //Find categories
                var categories = body.filters.find(function(elem){
                    return elem.id == "category" ? true : false;
                }).values[0].path_from_root.map(function(elem){
                    return elem.name;
                });

                resolve({items: items, categories: categories});
            });
        })
    }
}

function getDecimals(price){
    var splited = price.toString().split('.');
    if(splited[1] == undefined){
        return 0;
    }else{
        return splited[1].length;
    }
}