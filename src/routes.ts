import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { FindAllUserController } from "./controllers/FindAllUserController";
import { UpdatedUserController } from "./controllers/UpdatedUserController";

const router = Router();

const createUserController = new CreateUserController();
const findAllUserController = new FindAllUserController();
const updatedUserController = new UpdatedUserController();

router.post("/users", createUserController.handle);
router.get("/users", findAllUserController.handle);
router.put("/users/:id", updatedUserController.handle);
export {router}