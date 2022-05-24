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
import '../@lekoarts/gatsby-theme-cara/styles/styles.css'

// below are required to import
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

//note for development . Ignore the warn , code may unstable but still works

const Test = () => (
  <Layout>
    <Seo title="Works" />
    <Themed.h2 className='top-background'>Works</Themed.h2>
            
    <Parallax pages={3}>
      <div>
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
        <Content sx={{ variant: `texts.smaller` }} speed={1} offset={0} factor={1}>
          {/*<Inner>
            <Themed.h1>Works</Themed.h1>
            <Themed.p>
              Go back to <Link to="/">homepage</Link>.
            </Themed.p>
</Inner>*/}
            <Divider>
            <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="May 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Reactivity</h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://zenodo.org/record/6555479">Zenodo</Link> , Open Access Journal</h4>
    <p>
    Reactivity adalah Jurnal Ilmiah yang berfokus pada React yang ditujukan sebagai pengenalan , pembuktian dan metode Common case dalam membangun Web Application dalam Bahasa Indonesia .
    </p>
    <img 
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=140"
      alt="img"
      />
      <img 
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=140"
      alt="img"
      />
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="March 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Journey 3</h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://snack.expo.dev/@zegveld/coffee">Expo</Link> , React Native</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="April 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Open AI Tools</h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://snack.expo.dev/@zegveld/developer-test">Expo</Link> , React Native</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="February 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Artefact</h3>
    <h4 className="vertical-timeline-element-subtitle">Cloudflare , Remix.run</h4>
    <p>
      A Fullstack App that designed to create a Note on Billboard
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="December 2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">AI Assistant</h3>
    <h4 className="vertical-timeline-element-subtitle">GitHub , Python </h4>
    <p>
      Voice Recognition 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Hello React</h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://rfebrians.github.io/hello-react">GitHub Pages</Link> , React</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Journey 2</h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://snack.expo.dev/@zegveld/journey">Expo</Link> , React Native</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Database Demo</h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://github.com/RFebrians/simple-node.express-backend">GitHub</Link> , REST API's</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
  />
</VerticalTimeline>
</Divider>
        </Content>
      </div>
    </Parallax>
  </Layout>
)

export default Test

/*
Reactivity - May 2022

Open Access Journal 

Machine Learning


React Native - Journey 3


React Native - Open AI Tools


Remix.run - Artefact


Python - AI Assistant


React Native - Journey 2


React - Gallery


React - Search Engine React


Express - REST API


Automation Script 


React Native - News


React Native - Diary


React Native - Market App


Yolo V4

Detectron

CRAFT - PYTorch
*/