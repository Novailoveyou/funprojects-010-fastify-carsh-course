const fastify = require('fastify')({ logger: true })
const PORT = 5000

const items = require('./Items')

fastify.get('/items', (req, reply) => {
  reply.send(items)
})

fastify.get('/items/:id', (req, reply) => {
  const { id } = req.params

  const item = items.find(item => item.id === id)
  reply.send(item)
})

const start = async () => {
  try {
    await fastify.listen(PORT)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

start()
