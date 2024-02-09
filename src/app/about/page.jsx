
import { about } from '@/lib/dataset.json'
import Header from './AboutHeader'

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='wrapper'>
          <section>
            <div className='text-lg'>
              <h2 className='text-4xl font-semibold pb-4'>Profile CSC</h2>
              <div>
                {about.profile}
              </div>
              <div className="collapse collapse-arrow">
                <input type="checkbox" />
                <h2 className='collapse-title text-4xl font-light pt-8 pb-4'>Our Vision</h2>
                <div className='collapse-content'>
                  {about.vision}
                </div>
              </div>
              <div className="collapse collapse-arrow">
                <input type="checkbox" />
                <h2 className='text-4xl font-light pt-8 pb-4 collapse-title'>Our Mission</h2>
                <div className='collapse-content'>
                  {about.mission.map((mission, index) => (
                    <li key={index}>{mission}</li>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section>
            
          </section>
        </div>
      </div>
    </>
  )
}

export default AboutPage
