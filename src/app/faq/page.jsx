
import { questions } from '@/lib/dataset.json'
import Header from './Header'
import { Comfortaa } from 'next/font/google'
import styles from "./faq.module.css"

const comfortaa = Comfortaa({ subsets: ['latin'] })

const faqPage = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <div className="wrapper" >
          {questions.map((quest, index) => (
            <div className='text-xl font-semibold collapse collapse-plus border-4 mb-5' key={index}>
              <input type="checkbox" />
              <h3 className={'text-2xl font-semibold collapse-title ' + comfortaa.className}>{quest.question}</h3>
              <p dangerouslySetInnerHTML={{ __html: quest.answer }} className='collapse-content'></p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default faqPage