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


const Web = () => (
  <Parallax pages={1.5}>
  <Layout>
    <Seo title="Web Playground " />
    
        <Inner>
        <Field></Field>
        <Themed.h3>Web Playground</Themed.h3>
          <Themed.p className='modal'> Feel free to browse the Corresponding Project , otherwise go back to<Link to="../../"> Home</Link></Themed.p>
          <div>
            <Carousel className='modal'>
              <div>
                <Themed.h3>React Basic</Themed.h3>
                <img  alt="" src="https://matob.web.id/random/wp-content/uploads/sites/2/2021/12/react-JS-NEW.jpg" />
                <p className="legend">Website fundamental that focused on React . See <Link to="https://github.com/RFebrians/react-presentation"> Repository</Link> or <Link to="https://rfebrians.github.io/react-presentation">Quick Presentation</Link></p>
              </div>
              <div>
              <Themed.h3>React Hooks Implementation</Themed.h3>
                <img alt="" src="https://devdotcode.com/wp-content/uploads/2020/12/REACT-HOOKS-1-1024x576.png" />
                <p className="legend">Implementation React Hooks based on common practice <Link to="https://github.com/RFebrians/react-hooks-example"> Repository</Link> or <Link to="https://github.com/RFebrians/react-hooks-example"> Live Example</Link> </p>
              </div>
              <div>
              <Themed.h3>Hello React</Themed.h3>
                <img alt="" src="https://raw.githubusercontent.com/RFebrians/hello-react/main/Preview.png" />
                <p className="legend">Your first prototoype site using <Link to="https://github.com/RFebrians/hello-react"> Repository</Link> or <Link to="https://codesandbox.io/s/hello-2297-py13q"> Live Playground</Link></p>
              </div>
              <div>
              <Themed.h3>React Search Engine</Themed.h3>
                <img alt="" src="https://raw.githubusercontent.com/RFebrians/search-engine-react/main/react-library.png" />
                <p className="legend">Build a Library Website that simulate a search engine with React <Link to="https://github.com/RFebrians/search-engine-react"> Repository</Link> or <Link to="https://codesandbox.io/s/github/RFebrians/EntryPoint-Front"> Live Example</Link> </p>
              </div>
              <div>
              <Themed.h3>Explore with Remix Run</Themed.h3>
                <img alt="" src="https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
                <p className="legend">Build a Fullstack App using React and Remix-run<Link to="https://github.com/RFebrians/exploration-with-remix"> Repository </Link> or <Link to="https://codesandbox.io/s/github/remix-run/remix/tree/main/examples/jokes">Live Playground</Link></p>
              </div>
              <div>
              <Themed.h3>React Presentation</Themed.h3>
                <img alt="" src="https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
                <p className="legend">Make a Presentation Design using Impress JS </p>
              </div>
              <div>
              <Themed.h3>REST API</Themed.h3>
                <img alt="" src="https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/Web-Service-What-is-REST-API-And-How-Does-it-Work-1024x576.png" />
                <p className="legend">An Introduction to REST API </p>
              </div>
              <div>
              <Themed.h3>Node.Express</Themed.h3>
                <img alt="" src="https://wc.wallpaperuse.com/wallp/15-151030_s.jpg" />
                <p className="legend">Create a Backend using Node.Express . Please visit the <Link to="https://github.com/RFebrians/simple-node.express-backend"> Repository </Link> <Link to="https://codesandbox.io/s/github/remix-run/remix/tree/main/examples/jokes">, Live </Link> and Deployment <Link to="https://backendrest3.herokuapp.com"> Route</Link></p>
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

export default Web
