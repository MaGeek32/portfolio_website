import React from 'react'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Sheng's Personal Portfolio
        </SectionTitle>
        <SectionText>
          I plan to use my relevant IT knowledge, skills and experiences to advance my career as a Developer and in the process contribute as an integral part of the team. With proven React Native development and collaborative skills, coupled with working in a diverse culture will stand me in good stead to my career.
        </SectionText>

      </LeftSection>
    </Section>
  </>
)

export default Hero