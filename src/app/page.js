import Image from 'next/image'
import { Inter } from '@next/font/google'
import SignInSide from '../pages/login'
import { QueryClient, QueryClientProvider, } from 'react-query'
import Article from '@/pages/article/[id]'

const queryClient = new QueryClient()

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  
    <main >
    <SignInSide/>
    </main>
  )
}
