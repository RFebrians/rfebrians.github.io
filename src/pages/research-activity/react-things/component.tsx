/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from 'theme-ui'
import Divider from '@lekoarts/gatsby-theme-cara/src/elements/divider'
import Inner from '@lekoarts/gatsby-theme-cara/src/elements/inner'
import Content from '@lekoarts/gatsby-theme-cara/src/elements/content'
import { UpDown, UpDownWide } from '@lekoarts/gatsby-theme-cara/src/styles/animations'

import { hidden, iconpos } from './utils'
import BlogMDX from './blog.mdx'

const Component: React.FC<{ offset: number; factor?: number }> = ({ offset, factor = 1 }) => (
  <Inner>
    <Content speed={0.4} offset={offset} factor={factor}>
      <BlogMDX />
    </Content>
  </Inner>
)

export default Component
