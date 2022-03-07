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

import ProjectsResearchP from '../../../@lekoarts/gatsby-theme-cara/components/projects-res-play'

const ResearchPlay = () => (
  <Layout>
    <Seo title="Research Playground " />

    <Inner>
      <Parallax pages={2}>
        <Content>
          <Content>
            <Themed.h2>This is a research Playground </Themed.h2>
            <Themed.h5>This is a subtitile </Themed.h5>
            <Themed.h6>requirements</Themed.h6>
            <div>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            </div>
            <Themed.h6>objective</Themed.h6>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <p>an embed codesandbox</p>
            <Themed.p>
              Go back to <Link to="/">homepage</Link>.
            </Themed.p>
          </Content>
        </Content>
      </Parallax>
    </Inner>
  </Layout>
)

export default ResearchPlay
