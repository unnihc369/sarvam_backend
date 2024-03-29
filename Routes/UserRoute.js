import express from 'express'
import { deleteUser, followUser, getAllUsers, getUser, unfollowUser, updateUser, verifyUser } from '../controllers/UserController.js'

const router = express.Router()

router.get('/:id', getUser);
router.get('/',getAllUsers)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', unfollowUser)
router.post("/:id/verify", verifyUser);


export default router