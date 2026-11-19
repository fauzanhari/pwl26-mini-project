import {Router} from "express";import {orderController} from "../controllers/orderController";import {orderSchema} from "../validators/orderValidator";import {validate} from "../utils/validate";
const router=Router();router.get("/",orderController.list);router.get("/:id",orderController.get);router.post("/",validate(orderSchema),orderController.create);export default router;
