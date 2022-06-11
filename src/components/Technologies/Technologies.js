import React from 'react'
import { DiFirebase, DiReact, DiZend } from 'react-icons/di'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles'

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Focus on Front-End technologies.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React ⋅ WordPress ⋅ Shopify
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Servers&Domains</ListTitle>
          <ListParagraph>
            Experience with <br />
            AWS ⋅ cPanel
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Testing</ListTitle>
          <ListParagraph>
            Experience with <br />
            Android ⋅ iOS testing
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
)

export default Technologies
