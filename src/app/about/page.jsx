
import { about } from '@/lib/dataset.json'
import Header from './AboutHeader'
import styles from './about.module.css'


const AboutPage = () => {

  const { profile, history, organization } = about;
  const { kabinet, structure } = organization;
  const { Division } = structure;

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
                <div>{profile.content}</div>
                <div style={{ clear: 'both' }}></div>
              </div>
            </div>
            <div className="collapse collapse-arrow border-4">
              <input type="checkbox" />
              <h2 className='collapse-title text-4xl font-light'>Our Vision</h2>
              <div className='collapse-content'>
                {profile.vision}
              </div>
            </div>
            <div className="collapse collapse-arrow border-4">
              <input type="checkbox" />
              <h2 className='text-4xl font-light collapse-title'>Our Mission</h2>
              <div className='collapse-content'>
                {profile.mission.map((mission, index) => (
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
                {history.map((history, index) => (
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
      <div className='container'>
        <section className='wrapper'>
          <div className='text-lg flex flex-col space-y-5 text-justify'>
            <div>
              <h2 className='text-5xl font-light my-5 text-center'>Struktur Organisasi CSC</h2>
              <h3 className='text-5xl font-light mb-14 text-center'>Kabinet {kabinet.name} {kabinet.period}</h3>
              <div className='flex flex-col space-y-5 text-justify'>
                <div className='grid grid-cols-2 gap-12 text-center'>
                  {structure.leader.map((lead, index) => (
                    <div className='text-xl font-semibold flex flex-col items-center' key={index}>
                      <img src={lead.pict} alt="pict" width={820} />
                      CSC {lead.position} <br />
                      {lead.name}
                    </div>
                  ))}
                </div>
                <div className='grid grid-cols-2 gap-12 text-center'>
                  {structure.administration.map((admin, index) => (
                    <div className='text-xl font-semibold flex flex-col items-center' key={index}>
                      <img src={admin.pict} alt="pict" width={360} />
                      {admin.position} <br />
                      {admin.name}
                    </div>
                  ))}
                </div>
                <div className='grid grid-cols-3 gap-12 text-center'>
                  {structure.Creative.map((creative, index) => (
                    <div className='text-xl font-semibold flex flex-col items-center' key={index}>
                      <img src={creative.pict} alt="pict" width={360} />
                      {creative.position} <br />
                      {creative.name}
                    </div>
                  ))}
                </div>
                <div className='grid grid-cols-3 gap-12 text-center'>
                  {Division.cybersec.map((cybersec, index) => (
                    <div className='text-xl font-semibold flex flex-col items-center' key={index}>
                      <img src={cybersec.pict} alt="pict" width={360} />
                      {cybersec.position} <br />
                      {cybersec.name}
                    </div>
                  ))}
                </div>
                <div className='grid grid-cols-3 gap-12 text-center'>
                  {Division.softdev.map((softdev, index) => (
                    <div className='text-xl font-semibold flex flex-col items-center' key={index}>
                      <img src={softdev.pict} alt="pict" width={360} />
                      {softdev.position} <br />
                      {softdev.name}
                    </div>
                  ))}
                </div>
                <div className='grid grid-cols-3 gap-12 text-center'>
                  {Division.explore.map((explore, index) => (
                    <div className='text-xl font-semibold flex flex-col items-center' key={index}>
                      <img src={explore.pict} alt="pict" width={360} />
                      {explore.position} <br />
                      {explore.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutPage
