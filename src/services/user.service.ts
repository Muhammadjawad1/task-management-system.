
import { User } from '../model/user.interface';
import jwt, { Secret } from 'jsonwebtoken';

export const SECRET_KEY: Secret = 'Task-Management-system';
let users: User = {
      id: 1,
      name: "developer",
      role: "admin",
      password: "abctest"
      }
export async function login() {
 try {
   const foundUser = users;
   if (!foundUser) {
    throw new Error('Name of user is not correct');
  }
  if (foundUser) {
    const token = jwt.sign({ id: foundUser.id, name: foundUser.name }, SECRET_KEY, {
      expiresIn: '2 days',
    });
    let uid = foundUser.id;
    let uname = foundUser.name;
    return { user: { uid, uname }, token: token };
  } else {
    throw new Error('Password is not correct');
  }
 } catch (error) {
   throw error;
 }
}