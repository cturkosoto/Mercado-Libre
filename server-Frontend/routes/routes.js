const api_helper = require('./apiHelper');

var appRouter = function (app) {

    const author = ({
        name: "Carolina",
        lastname: "Turko Soto",
    });
 
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });

    app.get("/api/categories", function (req, res) {
        res.status(200).send(author);
    });

    app.get("/api/items/:id", function (req, res) {
        var id = req.params.id;

        if (id == undefined) res.status(400).send({ message: 'insert id' });
     
        api_helper.item_api(id)
            .then(response => {
                var rdo = ({
                    author: author,
                    item: response.item,
                });
                res.status(200).send(rdo)
            })
            .catch(error => {
                res.status(400).send({message: error})
            })
    });

    app.get("/api/items", function (req, res) {
        //validate required field
        if(req.query.q == undefined){
            res.status(400).send({message: "insert q"});
        }

        api_helper.serch_api(req.query.q)
            .then(response => {
                var rdo = ({
                    author: author,
                    categories: response.categories,
                    items: response.items,
                });
                res.status(200).send(rdo)
            })
            .catch(error => {
                res.status(400).send(error)
            })

    });
  }
  
  module.exports = appRouter;