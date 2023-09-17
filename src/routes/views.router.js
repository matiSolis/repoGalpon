import { Router } from 'express';
import ViewsController from '../controllers/views.controllers.js';
import { adminSession, premiumSession, privateAcces, publicAcces } from '../middlewares/middlewareAccess.js';

const router = Router();
const viewsController = new ViewsController();

router.get('/register', publicAcces, viewsController.registerRender);
router.get('/login', publicAcces, viewsController.loginRender);
router.get('/current', privateAcces, viewsController.currentRender);
router.get('/admin', adminSession, viewsController.adminRender);
router.get('/', privateAcces, viewsController.homeRender);
router.get('/carts/:cid', privateAcces, viewsController.cartRender);
router.get('/products', privateAcces, viewsController.productsRender);
router.get('/product/:pid', privateAcces, viewsController.productRender);
router.get('carts/:cid/purchase', privateAcces, viewsController.purchaseRender);
router.get('/premium', premiumSession, viewsController.premiumRender);

export default router;
