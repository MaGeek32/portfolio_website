import React from 'react'

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles'

const data = [
  { number: 3, text: 'Projects Experience' },
  { number: 7, text: 'Website Builds', },
  { number: 82, text: 'PTE Score', },
  { number: "1300+", text: 'Coding Hours', }
]

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
)

export default Acomplishments
