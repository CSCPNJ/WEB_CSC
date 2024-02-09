import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import dataset from '@/lib/dataset.json'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CSC PNJ',
  description: 'Explore the vibrant world of technology and innovation with the Computer Student Club (CSC) at Politeknik Negeri Jakarta. As a dynamic organization under the umbrella of HIMATIK (Himpunan Mahasiswa TIK), we are dedicated to fostering a collaborative community within the School of Computer and Informatics Engineering. Join us in shaping the future of IT through student initiatives, educational activities, and engaging technology events. Connect with like-minded individuals, network with IT professionals, and access valuable learning resources. Discover your passion for computer science and informatics engineering with CSC PNJ!',
  icons: 'https://cdn.discordapp.com/attachments/879733859372130376/1182186716480688168/favicon.ico?ex=6583c82d&is=6571532d&hm=d02c2f94d86dda8edc2370f1d47e91b25ca2c233e9ef3347afcd5b974246205d&',
  authors: { 'name': 'CSC Software Development Division' },
  publisher: 'Computer Student Club Politeknik Negeri Jakarta',
  keywords: dataset.metadata
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className + ' bg-blue-geo-pattern'}>
          <Navbar />
        {children}
        <footer className='bg-blue-geo-pattern'>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
