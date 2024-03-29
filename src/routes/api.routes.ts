import cryptoController from "../controllers/crypto.controller";
import keygenController from "../controllers/keygen.controller";
import { Router } from "express";

const router: Router = Router();

router.post("/encrypt", (req,res,next) =>{
    console.log("encrypt called in router");
    next()
})

router.post("/encrypt", cryptoController.encryptData);
router.post("/decrypt", cryptoController.decryptData);
router.get("/keygen", keygenController.keygen);

export default router;
