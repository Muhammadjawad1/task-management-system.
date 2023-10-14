import express, { Request, Response } from 'express';
import * as userServices from '../services/user.service';
// import { CustomRequest } from '../middleware/auth';

export const authentication = express.Router();

authentication.get("/login", async (req: Request, res: Response) => {
 try {
   const foundUser = await userServices.login();
   res.status(200).send(foundUser);
 } catch (error) {
   return res.status(500).send(error);
 }
});