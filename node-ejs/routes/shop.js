const path = require("path");

const express = require("express");

const router = express.Router();

const shopController = require('../controllers/shop')

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

//Must go before the dynamic product id path
//router.get("/products/delete");

//Dynamic path
router.get('/products/:productId', shopController.getProduct);

router.get("/cart", shopController.getCart);

router.get("/checkout", shopController.getCheckout);

router.get("/orders", shopController.getOrders)

module.exports = router;
