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
          Created using React & Gatsby
        </Link>
        <div sx={{ mx: 1 }}>and</div>
        {` `}
        <Link aria-label="Link to the author's website" href="https://github.com/RFebrians">
        ©2022 
        </Link>
      </Flex>
    </Box>
  )
}

export default Footer
