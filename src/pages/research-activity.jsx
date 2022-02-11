import * as React from 'react'
import { Link } from 'gatsby'
import { Parallax } from '@react-spring/parallax'
import { Themed } from 'theme-ui'
import Layout from '@lekoarts/gatsby-theme-cara/src/components/layout'
import Divider from '@lekoarts/gatsby-theme-cara/src/elements/divider'
import { UpDown, UpDownWide } from '@lekoarts/gatsby-theme-cara/src/styles/animations'
import Svg from '@lekoarts/gatsby-theme-cara/src/components/svg'
import Seo from '@lekoarts/gatsby-theme-cara/src/components/seo'
import Content from '@lekoarts/gatsby-theme-cara/src/elements/content'
import Inner from '@lekoarts/gatsby-theme-cara/src/elements/inner'
import ScrollArea from 'react-scrollbar'

import ProjectsResearchA from '../@lekoarts/gatsby-theme-cara/components/projects-res-a'

const ResearchAct = () => (
  <Layout>
    <Seo title="Research Activity " />

    <Inner>
      <Parallax pages={2}>
        <Content>
          <Themed.h4> hello</Themed.h4>

          <ProjectsResearchA />
          <ScrollArea speed={0.8} horizontal={true} vertical={false} />
        </Content>
      </Parallax>
    </Inner>
  </Layout>
)

export default ResearchAct
