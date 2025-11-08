import { Router } from 'express';
import { registrerUser } from '/controllers/user.controller.js';

const router = Router()

router.route('/register').post(registerUser)

export {
  registerUser,
}