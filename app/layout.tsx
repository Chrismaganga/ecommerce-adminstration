// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { ModalProvider } from '@/providers/modal-provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce-Admin',
  description: 'Generated by Codelovers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ModalProvider/>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
