import express from 'express';
import { getUser, update, deleteUser, follow, unfollow } from "../controllers/user.js";
import { verifyToken } from '../verifyToken.js';
const router = express.Router();


//update user
router.put('/:id',verifyToken,update);

//find user
router.get('/find/:id', getUser);

//delete user
router.delete('/:id',verifyToken,deleteUser);

//follow user
router.put('/follow/:id',verifyToken,follow);

//unfollow user
router.put('/unfollow/:id',verifyToken,unfollow);

export default router;