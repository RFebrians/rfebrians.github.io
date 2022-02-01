/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Box, Flex, Link, jsx } from 'theme-ui'

const Footer: React.FC = () => {
  return (
    <Box as="footer" variant="footer">
      Copyright &copy; {new Date().getFullYear()}. RFebrians .
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` }
        }}
      >
        {` `}
        <Link aria-label="Gatsby Framework" sx={{ ml: 2 }} href="https://github.com/gatsbyjs/gatsby">
          Bootstrapped by Gatsby
        </Link>
        <div sx={{ mx: 1 }}>and</div>
        {` `}
        <Link aria-label="Link to the theme author's website" href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">
          LekoArts Theme
        </Link>
      </Flex>
    </Box>
  )
}

export default Footer
