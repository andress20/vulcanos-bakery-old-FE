import type { NextApiRequest, NextApiResponse } from 'next'

type Product = {
  name: string
  description: string
  price: number
  image: string
  category: any
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const url = 'https://vulcanos-backend.onrender.com/categories'
  // const url = '127.0.0.1:8000/products'
  try {
    const response = await fetch(url)
    const categories = await response.json()
    res.status(200).send(categories)
  } catch (error: any) {
    res.status(400).json({ message: `catch ${error}` })
  }
}
