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
        <Inner>
          <Themed.h3>Judul</Themed.h3>
          <div>
            <Carousel autoPlay>
              <div>
                <Themed.h1>Test Gambar Judul Mountain</Themed.h1>
                
                <img alt="" src="https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <img alt="" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img alt="" src="https://images.unsplash.com/photo-1498855926480-d98e83099315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
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
          <Themed.h1>sjdfkslfj</Themed.h1>
        </Inner>
  </Layout>
)

export default GalleryPage
