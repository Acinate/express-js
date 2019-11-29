import app from '../app';
import supertest from 'supertest';
import {Response} from 'supertest';

const request = supertest(app);

it('Gets the home endpoint', async done => {
    // Sends GET Request to / endpoint
    const response: Response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Welcome to application.');
    done();
});
