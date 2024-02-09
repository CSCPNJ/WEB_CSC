import Header from "@/components/header/Header";
import { Comfortaa } from 'next/font/google'


const comfortaa = Comfortaa({ subsets: ['latin'] })

export default function Page() {

  return (
    <>
      <header>
        <span className={comfortaa.className}>
          <Header />
        </span>
      </header>
      <div className='container'>
        <div className='wrapper'>
          <h1>
            Hello, Home page!
          </h1>
        </div>
      </div>
    </>
  )
}