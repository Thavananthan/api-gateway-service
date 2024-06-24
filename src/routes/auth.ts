import { SignUp } from '@gateway/controllers/auth/signup';
import { SignIn } from '@gateway/controllers/auth/signin';
import { Password } from '@gateway/controllers/auth/password';
import express, { Router } from 'express';

class AuthRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.post('/auth/signup', SignUp.prototype.create);
    this.router.post('/auth/signin', SignIn.prototype.read);
    this.router.put('/auth/forgot-password', Password.prototype.forgotPassword);
    this.router.put('/auth/reset-password/:token', Password.prototype.resetPassword);
    this.router.put('/auth/change-password', Password.prototype.changePassword);

    return this.router;
  }
}
export const authRoutes: AuthRoutes = new AuthRoutes();
