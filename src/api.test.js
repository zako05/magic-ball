const request = require('supertest')
const app = require('./app.js')

describe('GET /ball/prediction', () => {
  it('GET 200 Successfull', async () => {
    const res = await request(app).get('/ball/prediction')
    expect(res.statusCode).toEqual(200)
  })

  it('GET 400 Not found', async () => {
    const body = {}
    const res = await request(app).post('/ball/prediction').send(body)
    expect(res.statusCode).toEqual(404)
  })
})

describe('POST /ball/prediction', () => {
  it('200 Successfull', async () => {
    const res = await request(app).post('/ball/prediction').send({ id: 22, text: 'Definitelly!'})
    expect(res.statusCode).toEqual(200)
    expect(res.body)
  })
})

describe('GET /ball/prediction/:id', () => {
  it('200 successfull', async () => {
    const res = await request(app).get('/ball/prediction/1')
    expect(res.statusCode).toEqual(200)
  })

  it('404 not found', async () => {
    const res = await request(app).get('/ball/prediction/100')
    expect(res.statusCode).toEqual(404)
  })
})

describe('DELETE /ball/prediction/:id', () => {
  it('200 successfull', async () => {
    const res = await request(app).delete('/ball/prediction/15')
    expect(res.statusCode).toEqual(200)
  })

  it('404 not found', async () => {
    const res = await request(app).delete('/ball/prediction/100')
    expect(res.statusCode).toEqual(404)
  })
})

describe('PUT /ball/prediction/:id', () => {
  it('200 successfull', async () => {
    const res = await request(app).put('/ball/prediction/19').send({id: 19, text: 'foo'})
    expect(res.statusCode).toEqual(200)
  })

  it('404 not found', async () => {
    const res = await request(app).put('/ball/prediction/100').send({id: 100, text: 'foo'})
    expect(res.statusCode).toEqual(404)
  })
})

describe('POST /ball/ask', () => {
  it('200 successfull', async () => {
    const res = await request(app).post('/ball/ask').send('Do I win a car?')
    expect(res.statusCode).toEqual(200)
  })
})
