// A receipts endpoint, written the way this repo writes handlers.
import { Hono } from '../../hono'

export const receipts = new Hono()

receipts.get('/receipts/:id', (c) => {
  const id = c.req.param('id')
  const receipt = lookupReceipt(id)
  if (!receipt) {
    return c.json({ error: 'receipt not found' }, 404)
  }
  return c.json(receipt)
})

declare function lookupReceipt(id: string): unknown
