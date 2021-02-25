import { ExperienceBar } from '../components/ExperienseBar';
import { Credits } from '../components/Credits';
import { Profile } from '../components/Profile';

import styles from '../pages/Home.module.css';



export default function Home() {
  return (<div className={styles.container}>
    
    <ExperienceBar />
    <h1 className="contrucao">Site em construção</h1>
    <section>
      <div>
        <Profile />
      </div>
      <div>
        <Credits />
      </div>
    </section>


  </div>
  )
}
