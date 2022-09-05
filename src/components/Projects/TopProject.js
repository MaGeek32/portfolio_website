import React from 'react'

import { TopBlogCard, CardInfo, ExternalLinks, TopGridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { projects, topProject } from '../../constants/constants'

const TopProject = () => (
  <Section nopadding id="topProject">
    <SectionDivider />
    <SectionTitle main>Personal Project</SectionTitle>
    <TopGridContainer>
      {topProject.map((p, i) => {
        return (
          <TopBlogCard key={i}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <br />
            <br />
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={'https://apps.apple.com/au/app/windfish-cafe/id1632996971'}>Appstore</ExternalLinks>
              <ExternalLinks href={'https://play.google.com/store/apps/details?id=com.cafe.windfish'}>Google Play</ExternalLinks>
            </UtilityList>
          </TopBlogCard>
        )
      })}
    </TopGridContainer>
  </Section>
)

export default TopProject