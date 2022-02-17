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

import Hero from '../@lekoarts/gatsby-theme-cara/components/hero'

const GalleryPage = () => (
  <Layout>
    <Seo title="Gallery Page " />
    <Parallax pages={2}>
      <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={0} factor={1}>
        <Inner>
          <div>
            <Themed.h1>Welcome to BlogSite</Themed.h1>
            <Themed.h4>This is a Blog Section </Themed.h4>

            <Carousel autoPlay>
              <div>
                <img alt="" src="https://i.imgur.com/MZljwLL.jpeg" />
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
                <p className="legend">Legend 3</p>
              </div>
              <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
                <p className="legend">Legend 4</p>
              </div>
              <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
                <p className="legend">Legend 5</p>
              </div>
              <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
                <p className="legend">Legend 6</p>
              </div>
              <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
                <p className="legend">Legend 7</p>
              </div>
              <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
                <p className="legend">Legend 8</p>
              </div>
              <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
                <p className="legend">Legend 9</p>
              </div>
              <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
                <p className="legend">Legend 10</p>
              </div>
              <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-11.jpg" />
                <p className="legend">Legend 11</p>
              </div>
              <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-12.jpg" />
                <p className="legend">Legend 12</p>
              </div>
              <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-13.jpg" />
                <p className="legend">Legend 13</p>
              </div>
              <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg" />
                <p className="legend">Legend 14</p>
              </div>
            </Carousel>
          </div>
        </Inner>
      </Content>
    </Parallax>
  </Layout>
)

export default GalleryPage
