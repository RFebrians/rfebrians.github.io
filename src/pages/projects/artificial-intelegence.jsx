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
          <Themed.h3>Artificial Intelegence Section</Themed.h3>
          <Themed.p className='modal'>Feel free to
           browse the corresponding project </Themed.p>
          <div>
            <Carousel className='modal'>
            <div>
                <Themed.h3>Introduction to AI</Themed.h3>
                <img  alt="" src="https://ethz.ch/en/news-and-events/eth-news/news/2022/01/controlling-complex-systems-with-artificial-intelligence/_jcr_content/news_content/fullwidthimage/image.imageformat.fullwidth.1246833626.jpg" />
                <p className="legend">From here you'll be guided a summary about AI <Link to="https://github.com/RFebrians/exploration-with-remix"> Repository</Link></p>
              </div>
              <div>
                <Themed.h3>CRAFT OCR</Themed.h3>
                <img  alt="" src="https://www.cloudsavvyit.com/p/uploads/2020/11/d70c487e.png?height=200p&trim=2,2,2,2" />
                <p className="legend">An Optional Character Recognition based on CRAFT library processing with Python <Link to="https://github.com/RFebrians/exploration-with-remix"> Repository</Link></p>
              </div>
              <div>
              <Themed.h3>Detectron 2</Themed.h3>
                <img alt="" src="https://neurohive.io/wp-content/uploads/2020/04/rsz_ddd-scaled.png" />
                <p className="legend">An Introduction to Image Detection with Detectron 2</p>
              </div>
              <div>
              <Themed.h3>YOLO V4 + COCO</Themed.h3>
                <img alt="" src="https://yazilimkaravani.net/wp-content/uploads/2021/07/Yolo-v4-Tiny.jpg" />
                <p className="legend">A brief guide to create image processing using Tensorflow and OpenCV and YOLO</p>
              </div>
              <div>
              <Themed.h3>Customizing Dataset</Themed.h3>
                <img alt="" src="https://neurohive.io/wp-content/uploads/2019/01/dd-e1547642312239.jpg" />
                <p className="legend">Train your very own dataset to built a specifict image detection</p>
              </div>
              <div>
              <Themed.h3>Basic Voice Recognition</Themed.h3>
                <img alt="" src="https://miro.medium.com/max/1000/1*-KFKfWa1aWwaiDh9SfeXTQ.jpeg" />
                <p className="legend">A quite conditional Voice Recognition using pyttsx3 and speech recognition</p>
              </div>
              <div>
              <Themed.h3>RNG Simple AI Game</Themed.h3>
                <img alt="" src="https://wallpaperaccess.com/full/636544.jpg" />
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
