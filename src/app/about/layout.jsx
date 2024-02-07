// components/layout/AboutLayout.tsx

import Navbar from '@/components/navbar/Navbar'
import AboutHeader from './AboutHeader'

const AboutLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header className={'bg-blue-geo-pattern'}>
          <Navbar />
          <AboutHeader />
        </header>
        <div className='container'>
          <div className='wrapper'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

export default AboutLayout
