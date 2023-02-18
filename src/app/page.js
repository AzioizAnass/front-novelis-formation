import Image from 'next/image'
import { Inter } from '@next/font/google'
import SignInSide from '../pages/login'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
    <SignInSide/>
    </main>
  )
}
