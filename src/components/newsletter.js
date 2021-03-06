import React from 'react'

const Newsletter = ({children}) =>(
  <div style={{backgroundcolor: `#FFFFE4`, marginTop:`20px`}}>
    <a>Place holder for newsletter text to add</a>
    <form action="https://iamioannis.substack.com/api/v1/import/form" method="post" target="result">
       <input type="email" name="email" placeholder="Your email address" style={{ color: `#000`, borderColor: `#e3e3e3`, borderRadius: `0`, fontweight: `400`, background: `#ffffff`, fontsize: `15px`,
     border: `1px solid #e3e3e3`,
     lineheight: `1`,
      }}></input>
 
       <p>
        <input type="hidden" name="source" value="external"></input>
        <input type="submit" value="Subscribe" style={{
          color: `#a33k`,
          backgroundcolor: `#69a74e`,
          borderradius: `4px`,
          fontweight: `400`,
          textalign: `center`,
          fontsize: `15px`,
          lineheight: `1`}}></input>
      </p> 
      </form>
      <a>Disclaimer: The newsletter is handled by Substack</a>
      </div>
)


export default Newsletter;