
var controller = require(‘./controllers’);
var router = require(‘express’).Router();



router.get(‘/products/:product_id/’, controller.products.getProductData);

/* Connect controller methods to their corresponding routes
 * Example:
 * router.get('(endpoint starting with /)', name-of-function); */

