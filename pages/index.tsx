import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import { useRouter } from 'next/router'
import SignIn from '../src/components/SignIn'

const Home: NextPage = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/dashboard')
  }
  return (
    <>
      <div style={{ marginTop: '50px' }}>
        <Typography variant="h1" color="primary" align="center">
          Vulcano's Bakery
        </Typography>
        <div style={{ margin: 'auto', width: '5%' }}>
          <Button variant="contained" onClick={handleClick}>
            Pedidos
          </Button>
        </div>
        <SignIn />
      </div>
    </>
  )
}

export default Home
