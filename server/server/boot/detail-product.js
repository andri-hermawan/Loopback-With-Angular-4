'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get("/api/products/:ProductCartDesc",(req,res)=>{
		let ProductCartDesc = req.params.ProductCartDesc;
		console.log(ProductCartDesc);

	  	Build();
	  	function Build(){
	  		let service = new Service();
	  		service.get().then(product=>{
          // console.log(product);
	  			res.send(product);
	  		})

	  	}

	  	function Service(){
	  		this.get = function(){
	  			return server.models.products.find({
	  				where : {ProductCartDesc : ProductCartDesc}
	  			})
	  			.then(result=>{
	  				let product = result[0];

              product.ProductCartDesc = product.ProductCartDesc.replace(/-/g, " ");
              console.log(product);
	  				return product;
	  			})
	  		}
	  	}

  });
  server.use(router);
};
