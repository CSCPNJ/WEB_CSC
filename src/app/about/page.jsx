
import { about } from '@/lib/dataset.json'
import Header from './AboutHeader'
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <section className='wrapper'>
          <div className='text-lg flex flex-col space-y-5 text-justify mb-9 '>
            <div>
              <h2 className='text-5xl font-semibold mb-5 text-center'>Profile CSC</h2>
              <div>
                <img src="/laptop.webp" alt="image" width={200} className={styles.image} />
                <div>{about.profile.content}</div>
                <div style={{ clear: 'both' }}></div>
              </div>
            </div>
            <div className="collapse collapse-arrow border-4">
              <input type="checkbox" />
              <h2 className='collapse-title text-4xl font-light'>Our Vision</h2>
              <div className='collapse-content'>
                {about.profile.vision}
              </div>
            </div>
            <div className="collapse collapse-arrow border-4">
              <input type="checkbox" />
              <h2 className='text-4xl font-light collapse-title'>Our Mission</h2>
              <div className='collapse-content'>
                {about.profile.mission.map((mission, index) => (
                  <li key={index}>{mission}</li>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="new-section bg-blue-900 text-white">
        <section className="wrapper flex">
          <div className='text-lg flex flex-col space-y-5 text-justify'>
            <div>
              <h2 className='text-5xl font-semibold mb-5 text-center'>Sejarah CSC</h2>
              <img src="/book.webp" alt="image" width={200} className={styles.image} />
              <div className='flex flex-col space-y-5 text-justify'>
                {about.history.map((history, index) => (
                  <div key={index}>
                    <div className='text-xl'>
                      {history.title} {history.year ? "(" + (history.year) + ")" : null}
                    </div>
                    <ul className='list-outside list-square ml-5'>
                    {history.content.map((content, index) => (
                      <li key={index}>{content}</li>
                      ))}
                      </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        <section className="wrapper">
          
        </section>
      </div>
    </>
  )
}

export default AboutPage
