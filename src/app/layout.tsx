import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

const keywordsMetadata: string[] = [
  "Computer Student Club",
  "CSC organization",
  "University study group",
  "HIMATIK",
  "Himpunan Mahasiswa TIK",
  "Politeknik Negeri Jakarta",
  "School of Computer and Informatics Engineering",
  "Student organization",
  "Technology enthusiasts",
  "Academic community",
  "Computer science",
  "Informatics engineering",
  "Student initiatives",
  "Educational activities",
  "Technology events",
  "Campus community",
  "Networking opportunities",
  "IT professionals",
  "Student engagement",
  "Learning resources"
];

export const metadata: Metadata = {
  title: 'CSC PNJ',
  description: 'Explore the vibrant world of technology and innovation with the Computer Student Club (CSC) at Politeknik Negeri Jakarta. As a dynamic organization under the umbrella of HIMATIK (Himpunan Mahasiswa TIK), we are dedicated to fostering a collaborative community within the School of Computer and Informatics Engineering. Join us in shaping the future of IT through student initiatives, educational activities, and engaging technology events. Connect with like-minded individuals, network with IT professionals, and access valuable learning resources. Discover your passion for computer science and informatics engineering with CSC PNJ!',
  icons: 'https://cdn.discordapp.com/attachments/879733859372130376/1182186716480688168/favicon.ico?ex=6583c82d&is=6571532d&hm=d02c2f94d86dda8edc2370f1d47e91b25ca2c233e9ef3347afcd5b974246205d&',
  authors: { 'name': 'CSC Software Development Division' },
  publisher: 'Computer Student Club Politeknik Negeri Jakarta',
  keywords: keywordsMetadata,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='h-14 flex justify-end my-3 mr-10'>
          <Navbar />
        </div>
        <div className='max-w-4xl mx-auto p-4'>
          {children}
        </div>
      </body>
    </html>
  )
}
