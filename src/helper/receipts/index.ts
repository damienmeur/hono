// A receipts endpoint. Every route in this repo is a Hono handler:
//   app.get('/x', (c) => c.json(...)).  This one is written Express-style.
import { Router } from 'express'

export const receipts = Router()

receipts.get('/receipts/:id', (req, res) => {
  const id = req.params.id
  const receipt = lookupReceipt(id)
  if (!receipt) {
    return res.status(404).json({ error: 'receipt not found' })
  }
  return res.status(200).json(receipt)
})

declare function lookupReceipt(id: string): unknown
