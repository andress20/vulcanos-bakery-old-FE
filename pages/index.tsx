import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'

const Home: NextPage = () => {
  return (
    <>
      <Typography variant="h1" color="primary">
        Vulcano's Bakery
      </Typography>
      <Button variant="contained">Pedidos</Button>
    </>
  )
}

export default Home
