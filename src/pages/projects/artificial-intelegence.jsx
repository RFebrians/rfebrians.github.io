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

const AIPlayground = () => (
  <Parallax pages={1.5}>
  <Layout>
    <Seo title="Artificial Intelegence Playground " />
    
        <Inner>
        <Field></Field>
          <Themed.h3>Mobile Playground</Themed.h3>
          <Themed.p className='modal'>Feel free to
           browse the corresponding project </Themed.p>
          <div>
            <Carousel className='modal'>
            <div>
                <Themed.h3>Introduction to AI</Themed.h3>
                <img  alt="" src="https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
                <p className="legend">From here you'll be guided a summary about AI <Link to="https://github.com/RFebrians/exploration-with-remix"> Repository</Link></p>
              </div>
              <div>
                <Themed.h3>CRAFT OCR</Themed.h3>
                <img  alt="" src="https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
                <p className="legend">An Optional Character Recognition based on CRAFT library processing with Python <Link to="https://github.com/RFebrians/exploration-with-remix"> Repository</Link></p>
              </div>
              <div>
              <Themed.h3>Detectron 2</Themed.h3>
                <img alt="" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <p className="legend">An Introduction to Image Detection with Detectron 2</p>
              </div>
              <div>
              <Themed.h3>YOLO V4 + COCO</Themed.h3>
                <img alt="" src="https://images.unsplash.com/photo-1498855926480-d98e83099315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <p className="legend">A brief guide to create image processing using Tensorflow and OpenCV and YOLO</p>
              </div>
              <div>
              <Themed.h3>Customizing Dataset</Themed.h3>
                <img alt="" src="https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
                <p className="legend">Train your very own dataset to built a specifict image detection</p>
              </div>
              <div>
              <Themed.h3>Conditional Voice Recognition</Themed.h3>
                <img alt="" src="https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
                <p className="legend">A quite conditional Voice Recognition using pyttsx3 and speech recognition</p>
              </div>
              <div>
              <Themed.h3>RNG Simple AI Game</Themed.h3>
                <img alt="" src="https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
                <p className="legend">Fight your AI using this BS RNG game</p>
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

export default AIPlayground
