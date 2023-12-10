import { Inter } from 'next/font/google'
import '../styles/app.scss'
const inter = Inter({ subsets: ['latin'] })
import Header from './header'
import { ContextProvider } from '@/components/Clients'

export const metadata = {
  title: 'Todo App',
  description: 'This is a todo app project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <>
          <Header/>
        {children}
          </>
        </ContextProvider>
        
        
        </body>
    </html>
  )
}
