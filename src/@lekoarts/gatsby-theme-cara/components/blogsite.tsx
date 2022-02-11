/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from 'theme-ui'
import Divider from '@lekoarts/gatsby-theme-cara/src/elements/divider'
import Inner from '@lekoarts/gatsby-theme-cara/src/elements/inner'
import Content from '@lekoarts/gatsby-theme-cara/src/elements/content'
import { UpDown, UpDownWide } from '@lekoarts/gatsby-theme-cara/src/styles/animations'

import { hidden, iconpos } from '../styles/utils'

import BlogMDX from '../sections/blog.mdx'

import Background from '../assets/backgrounds/city.svg'

// import CocktailIcon from '../assets/icons/cocktail.svg'
import CoffeeIcon from '../assets/icons/coffee.svg'
import WebsiteIcon from '../assets/icons/website.svg'
import PhotoIcon from '../assets/icons/photo.svg'
import IceCreamIcon from '../assets/icons/ice-cream.svg'
import BooksIcon from '../assets/icons/books.svg'
import BicepsIcon from '../assets/icons/email.svg'
import RubikIcon from '../assets/icons/Rubik.svg'

const BlogSite: React.FC<{ offset: number; factor?: number }> = ({ offset, factor = 1 }) => (
  <div>
    <Divider bg="divider" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={offset} factor={factor} />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <img
        src={Background}
        alt="about background"
        sx={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '100%',
          opacity: 0.1
        }}
      />
      <UpDown>
        <BicepsIcon sx={iconpos(64, '50%', '75%', hidden)} />
        <CoffeeIcon sx={iconpos(32, '60%', '20%', hidden)} />
      </UpDown>
      <UpDownWide>
        <RubikIcon sx={iconpos(48, '5%', '80%', hidden)} />
        <PhotoIcon sx={iconpos(16, '85%', '15%', hidden)} />
        <BooksIcon sx={iconpos(16, '45%', '10%', hidden)} />
      </UpDownWide>
      {/* <CocktailIcon sx={iconpos(16, '70%', '60%')} /> */}
      <IceCreamIcon sx={iconpos(16, '20%', '30%', hidden)} />
      <WebsiteIcon sx={iconpos(16, '80%', '70%')} />
    </Divider>
    <Inner>
      <Content speed={0.4} offset={offset} factor={factor}>
        <BlogMDX />
      </Content>
    </Inner>
  </div>
)

export default BlogSite
