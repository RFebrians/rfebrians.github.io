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
import Field from '../../../@lekoarts/gatsby-theme-cara/components/field'

import '../../../@lekoarts/gatsby-theme-cara/styles/styles.css'


const AIPage = () => (
  <Layout>
    <Seo title="Artificial Intelegence Section " />
    <Parallax pages={1.2}>

        <Divider speed={0.2} offset={0} factor={1}>
          <UpDown>
            <Svg icon="triangle" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%" />
            <Svg icon="hexa" width={48} stroke color="icon_red" left="60%" top="70%" />
            <Svg icon="box" width={6} color="icon_darker" left="60%" top="15%" />
          </UpDown>
          <UpDownWide>
            <Svg icon="arrowUp" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
            <Svg icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
            <Svg icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
            <Svg icon="triangle" width={16} stroke color="icon_darkest" left="30%" top="65%" />
            <Svg icon="cross" width={16} stroke color="icon_pink" left="28%" top="15%" />
            <Svg icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
            <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
          </UpDownWide>
          <Svg icon="circle" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
          <Svg icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
          <Svg icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
          <Svg icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
          <Svg icon="upDown" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
          <Svg icon="triangle" width={8} stroke color="icon_darker" left="25%" top="5%" />
          <Svg icon="circle" width={64} color="icon_green" left="95%" top="5%" />
          <Svg icon="box" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
          <Svg icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
          <Svg icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
          <Svg icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" />
          <Svg icon="hexa" width={8} stroke color="icon_darker" left="80%" top="70%" />
        </Divider>
      <Content sx={{ variant: `texts.smaller` }} speed={0.4} offset={0} factor={1}>
        <Inner>
        <Themed.h3>This is an Artificial Intelegence Section</Themed.h3>
          <Themed.h4>  </Themed.h4>
          <br></br>
          <Themed.p>
              Go to <Link to="../../research-paper/web-fundamental">Voice Recognition</Link>.
            </Themed.p>
            <Themed.p>
              Go to <Link to="../../research-paper/web-fundamental">Image Processing</Link>.
            </Themed.p>
            <Themed.p>
              Go to <Link to="../../research-paper/web-fundamental">Creating Dataset Object</Link>.
            </Themed.p>
            <Themed.p>
              Go to <Link to="../../research-paper/web-fundamental">Automated Things</Link>.
            </Themed.p>
        </Inner>
        <Themed.h4>
              Go back to <Link to="../">Research Activity</Link>.
            </Themed.h4>
      </Content>
      <Field></Field>
    </Parallax>
  </Layout>
)

export default AIPage