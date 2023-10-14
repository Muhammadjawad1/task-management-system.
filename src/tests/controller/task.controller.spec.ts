import request from 'supertest';
import app from '../../app'; 
import jwt from 'jsonwebtoken';
import {Express} from 'express-serve-static-core';
import { User } from '../../model/user.interface';
import { SECRET_KEY } from '../../services/user.service';
let server: Express;
let token: string;

describe('Unit test for task rest Aps', () => {
  beforeAll(() => {
    server = app;    
    let users: User = {
      id: 1,
      name: "developer",
      role: "admin",
      password: "abctest"
      }
    token = jwt.sign({ id: users.id, name: users.name }, SECRET_KEY, {
      expiresIn: '2 days',
    });
  });

  it('Get all tasks',  (done) => {
    request(server)
      .get('/api/tasks/')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .end((err : any, res: any) => {
        if (err) return done(err)
         expect(res.body).toBeDefined();
        done()
      })
  });

  it('get task by id ',  (done) => {
    request(server)
      .get('/api/task/1')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .end((err : any, res: any) => {
        if (err) return done(err)
         expect(res.body).toBeDefined();
        done()
      })
  });

  it('POST task should create an task', async () => {
    const response = await request(app)
      .post('/api/task/')
      .set('Authorization', `Bearer ${token}`)
      .send({
        "title": "jawad",
        "description": "Jawad123",
        "assigned_To": "Muhammad",
        "category": "normal",
        "status": "Completed"
    });
    expect(response.status).toBe(201);
    expect(response.body).toBeDefined();
  });

  it('delete task by id ',  (done) => {
    request(server)
      .delete('/api/task/1')
      .set('Authorization', `Bearer ${token}`)
      .expect(204)
      .end((err : any, res: any) => {
        if (err) return done(err)
         expect(res.body).toBeDefined();
        done()
      })
  });

  it('Put task should update an task', async () => {
    const response = await request(app)
      .put('/api/task/1')
      .set('Authorization', `Bearer ${token}`)
      .send({
        "title": "jawad updated",
        "description": "Jawad123",
        "assigned_To": "Muhammad",
        "category": "normal",
        "status": "Completed"
    });
    expect(response.status).toBe(201);
    expect(response.body).toBeDefined();
  });

  it('get task by assigned to ',  (done) => {
    request(server)
      .get('/api/task?assignedTo=Jawad')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .end((err : any, res: any) => {
        if (err) return done(err)
         expect(res.body).toBeDefined();
        done()
      })
  });

});
