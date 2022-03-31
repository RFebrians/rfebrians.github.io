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
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../../@lekoarts/gatsby-theme-cara/styles/modal.css'

import Field from '../../@lekoarts/gatsby-theme-cara/components/field'
import Footer from '../../@lekoarts/gatsby-theme-cara/components/footer'

const MobilePlayground = () => (
  <Parallax pages={1.5}>
  <Layout>
    <Seo title="Mobile Playground " />
    
        <Inner>
        <Field></Field>
          <Themed.h3>Mobile Playground</Themed.h3>
          <Themed.p className='modal'>Feel free to
           browse the corresponding project </Themed.p>
          <div>
            <Carousel className='modal'>
              <div>
                <Themed.h3>Introduction to React Native</Themed.h3>
                <img  alt="" src="https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
                <p className="legend">An Example Website fundamental using HTML , CSS and JS . <Link to="https://github.com/RFebrians/exploration-with-remix"> Repository</Link></p>
              </div>
              <div>
              <Themed.h3>Notepad App</Themed.h3>
                <img alt="" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <p className="legend">An Example Website fundamental using HTML , CSS and JS</p>
              </div>
              <div>
              <Themed.h3>Journey App</Themed.h3>
                <img alt="" src="https://images.unsplash.com/photo-1498855926480-d98e83099315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <p className="legend">Legend 3</p>
              </div>
              <div>
              <Themed.h3>E-Commerce & News App</Themed.h3>
                <img alt="" src="https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
                <p className="legend">Legend 4</p>
              </div>
            </Carousel>
          </div>
        </Inner>
        <Themed.p>
              Go back to <Link to="../../">Research Playground</Link>.
            </Themed.p> 
  </Layout>
  </Parallax>
)

export default MobilePlayground
