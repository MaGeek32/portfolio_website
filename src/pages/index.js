import Acomplishments from '../components/Acomplishments/Acomplishments'
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import Timeline from '../components/TimeLine/TimeLine'
import { Layout } from '../layout/Layout'
import { Section } from '../styles/GlobalComponents'
import TopProject from '../components/Projects/TopProject'

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <TopProject />
      <Projects />
      <br></br>
      <br></br>
      <Technologies />
      <br></br>
      <br></br>
      <Timeline />
      <br></br>
      <br></br>
      <Acomplishments />
      <br></br>
      <br></br>
    </Layout>
  )
}

export default Home
