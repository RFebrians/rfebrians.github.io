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
            
    <Parallax pages={2.5}>
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
    Journey 3 , Created using React Native and Django REST for a backend .
Purposed to created an Application more interactive with human dailies .
Featured Fingerprint Auth , Localstorage and AI Toolkit .    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="April 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Open AI Tools</h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://snack.expo.dev/@zegveld/developer-test">Expo</Link> , React Native</h4>
    <p>
    Created using React Native , Expo .
That directly using an Open AI Engine .
It may have a variety engine and option that you can customize.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="February 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Artefact</h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://remix-cloudflare-workers.metreat3-22.workers.dev">Cloudflare</Link>, Remix.run</h4>
    <p>
    A Fullstack Web Application that created using Remix.run that connect on KV Workers as a Backend .
It purposed to created a note and share with other using billboard .    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="December 2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">AI Assistant</h3>
    <h4 className="vertical-timeline-element-subtitle">GitHub , Python </h4>
    <p>
    A Python Application that mimic an Artificial Intelegence using Voice Recognition and Conditional Statement Object .
It run wells on linux based kernel that can be recongized on speech command . 
It open , do and search any corresponding application . | Inspired by JARVIS
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
    A Static Application that may beautifully showcase your Portfolio or Gallery .
It has a SEO Optimization using React-Helmet .
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
    A predecessor from Journey . That has a more feature and Optimization.
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
    A Prototype sample REST API's that contain Databases using Node.Express .
This API will be used on React Search Engine .
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="October 2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">React Search Engine</h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://github.com/RFebrians/simple-node.express-backend">GitHub Page</Link> , React</h4>
    <p>
    A React Application that search the Schedule . It using "Databases Demo" as API resources 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="September 2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Automation Testing </h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://github.com/RFebrians/simple-node.express-backend">Kaggle</Link> , Jupyter Notebook</h4>
    <p>
      An Automated Testing using Python and Selenium Framework to make a subset of task .
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="August 2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">React Native News | Diary </h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://github.com/RFebrians/simple-node.express-backend">News</Link> | <Link to="https://github.com/RFebrians/simple-node.express-backend">Diary</Link>, React Native</h4>
    <p>
      Assignment Project using React Native that has a Webview , Route and Fetch using Hooks
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="June 2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Market App </h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://github.com/RFebrians/simple-node.express-backend">GitHub</Link> , React Native</h4>
    <p>
      The Very First Team Project
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="- 2020"
    iconStyle={{ background: 'rgb(255, 102, 102)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Earlier Years </h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://github.com/RFebrians/simple-node.express-backend">GitHub</Link> , Jupyter Notebook</h4>
    <p>
      Corresponding Project Yolo V4 , Detectron , CRAFT , AI Game 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2018 - "
    iconStyle={{ background: 'rgb(51, 153, 102)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Aikido </h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://github.com/RFebrians/simple-node.express-backend">Archive</Link> , Journal</h4>
    <p>
      Corresponding Project History of Aikido , Technique Aikido
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
            <Themed.p>
              Go back to <Link to="/">homepage</Link>.
            </Themed.p>
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