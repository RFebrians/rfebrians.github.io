import * as React from 'react'
import clsx from  'clsx';
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


import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function App() {
  return (
    <div className="body">
    <h1 className='Example-header'><Link to="../">Works</Link> </h1>
    
    <VerticalTimelineElement
    className={ clsx("vertical-timeline-element--work" , "tilt" )}
    contentStyle={{ background: 'rgb(77, 53, 130)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(77, 53, 130)' }}
    date="Jul 2022"
    iconStyle={{ background: 'rgb(107, 65, 204)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Psychology - Suicidal Prediction | Machine Learning</h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://github.com/RFebrians/Augmented-Scaling-Management">Heroku</Link> , Streamlit</h4>
    <p>
    Created to take a prevention based on Psychology thought 
    </p>
  </VerticalTimelineElement> 
  <VerticalTimelineElement
    className={ clsx("vertical-timeline-element--work" , "tilt" )}
    contentStyle={{ background: 'rgb(77, 53, 130)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(77, 53, 130)' }}
    date="Jun 2022"
    iconStyle={{ background: 'rgb(107, 65, 204)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Medical Apps</h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://gitlab.com/RFebrians/medical-apps">Microservice</Link> , React | React Native</h4>
    <p>
    Open Source version of Medical Apps
    </p>
  </VerticalTimelineElement> 
      <VerticalTimeline>
        <VerticalTimelineElement
    className={ clsx("vertical-timeline-element--work" , "tilt" )}
    contentStyle={{ background: 'rgb(77, 53, 130)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(77, 53, 130)' }}
    date="May 2022"
    iconStyle={{ background: 'rgb(107, 65, 204)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Augmented Scaling Management</h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://github.com/RFebrians/Augmented-Scaling-Management">GitHub</Link> , React Native</h4>
    <p>
    Created to focus management expense income/out with easy scaling 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className={ clsx("vertical-timeline-element--work" , "tilt" )}
    contentStyle={{ background: 'rgb(77, 53, 130)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(77, 53, 130)' }}
    date=" 2022"
    iconStyle={{ background: 'rgb(107, 65, 204)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Reactivity</h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://zenodo.org/record/6555479">Zenodo</Link> , Open Access Journal</h4>
    <p>
    Reactivity adalah Jurnal Ilmiah yang berfokus pada React yang ditujukan sebagai pengenalan , pembuktian dan metode Common case dalam membangun Web Application dalam Bahasa Indonesia .
    </p>
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png"
      alt="img"
      />
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className={ clsx("vertical-timeline-element--work" , "tilt" )}
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
    className={ clsx("vertical-timeline-element--work" , "tilt" )}
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
    className={ clsx("vertical-timeline-element--work" , "tilt" )}
    date="February 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Artefact | Research Adventure </h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://artefact.magenta.workers.dev/">Cloudflare</Link>, Remix.run</h4>
    <p>
    A Fullstack Web Application that created using Remix.run that connect on KV Workers as a Backend .
It purposed to created a note and share with other using billboard .    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className={clsx("vertical-timeline-element--education" , "tilt" )}
    date="December 2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">AI Assistant</h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://github.com/RFebrians/AI-Assistant">GitHub</Link> , Python </h4>
    <p>
    A Python Application that mimic an Artificial Intelegence using Voice Recognition and Conditional Statement Object .
It run wells on linux based kernel that can be recongized on speech command . 
It open , do and search any corresponding application . | Inspired by JARVIS
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className={clsx("vertical-timeline-element--education" , "tilt" )}
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
    className={clsx("vertical-timeline-element--education" , "tilt" )}
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
    className={clsx("vertical-timeline-element--education" , "tilt" )}
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
    className={clsx("vertical-timeline-element--education" , "tilt" )}
    date="October 2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">React Search Engine</h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://github.com/RFebrians/search-engine-react">GitHub </Link> , React</h4>
    <p>
    A React Application that search the Schedule . It using "Databases Demo" as API resources 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className={clsx("vertical-timeline-element--education" , "tilt" )}
    date="September 2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Automation Testing </h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://github.com/RFebrians/experimental-python-automation-and-ai">GitHub</Link> , Jupyter Notebook</h4>
    <p>
      An Automated Testing using Python and Selenium Framework to make a subset of task .
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className={clsx("vertical-timeline-element--education" , "tilt" )}
    date="August 2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">React Native News | Diary </h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://snack.expo.dev/@zegveld/delicious-pretzels">Diary</Link>, React Native</h4>
    <p>
      Assignment Project using React Native that has a Webview , Route and Fetch using Hooks
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className={clsx("vertical-timeline-element--education" , "tilt" )}
    date="June 2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Market App </h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="#">GitHub</Link> , React Native</h4>
    <p>
      The Very First Team Project , contain UI and Routing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className={clsx("vertical-timeline-element--education" , "tilt" )}
    date="June 2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Wordpress </h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="http://www.al-halimiyah.com/">Al-Halimiyah Islamic School</Link> , Wordpress</h4>
    <p>
      Web Development using Wordpress CMS and MySql on Website School
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className={clsx("vertical-timeline-element--education" , "tilt" )}
    date="- 2019"
    iconStyle={{ background: 'rgb(255, 102, 102)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Earlier Years </h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://github.com/RFebrians/object-detection-playground">GitHub</Link> , Jupyter Notebook</h4>
    <p>
      Corresponding Project Yolo V4 , Detectron , CRAFT , AI Game 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className={clsx("vertical-timeline-element--education" , "tilt" )}
    date="2018 - "
    iconStyle={{ background: 'rgb(51, 153, 102)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Aikido </h3>
    <h4 className="vertical-timeline-element-subtitle"><Link to="https://drive.google.com/drive/folders/16HUd1JB4E1YbGe9JT0hzUVvK8oVXxv14">Archive</Link> , Journal</h4>
    <p>
      Corresponding Project History of Aikido , Technique Aikido , And Visual Story about Aikido
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
    </div>
  );
}
