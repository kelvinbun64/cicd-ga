const app = require('./server') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)


it('Call the /sonar endpoint', async done => {
    const res = await request.get('/sonar')
    expect(res.status).toBe(200)
    expect(res.text).toBe('Hello, Sonar !!!')
    done()
})
it('Call the / endpoint', async done => {
    const res = await request.get('/')
    expect(res.status).toBe(200)
    expect(res.text).toBe('Hello This is Project CI/CD')
    done()
})
  

  