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

import ProjectsResearchA from '../../@lekoarts/gatsby-theme-cara/components/projects-res-a'
import Footer from '../../@lekoarts/gatsby-theme-cara/components/footer'

const ResearchAct = () => (
  <Layout>
    <Seo title="Research Activity " />

    <Inner>
      <Parallax pages={2}>
        <Content>
          <Content>
            <ProjectsResearchA />
            <Themed.p>
              Go back to <Link to="/">homepage</Link>.
            </Themed.p>
          </Content>
        </Content>
        <Footer></Footer>
      </Parallax>
    </Inner>
  </Layout>
)

export default ResearchAct
