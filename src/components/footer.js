import React from 'react'

const Footer = ({children}) => (
<footer style={{
    margin: '15px auto',
    maxWidth: `400px`

}}>
          © Ioannis Mastigopoulos {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
)

export default Footer;

