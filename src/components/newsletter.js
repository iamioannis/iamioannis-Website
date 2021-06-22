import React from 'react'

const Newsletter = ({children}) =>(
  <div style={{
    backgroundcolor: `#FFFFF`, 
    // marginTop:`20px`,
    // marginRight:`10px`,
    //margin: `20px 7em 10px`,
    textAlign: `center`,
    border: `1px dotted`,
    maxWidth: `15em`,
    //minWidth:`fit-content`
  }}>
    <a>Want to receive content from me on your inbox?</a>
    <form action="https://iamioannis.substack.com/api/v1/import/form" method="post" target="result">
       <input type="email" name="email" placeholder="Your email address" style={{ 
         color: `#000`, 
         borderColor: `#e3e3e3`, 
         borderRadius: `0`, 
         fontweight: `400`, 
         background: `#ffffff`, 
         fontsize: `15px`,
         border: `1px solid #e3e3e3`,
         lineheight: `1`,
        }}></input>
       <p style={{
         marginBlockStart: `10px`,
         marginBlockEnd: `10px`,
       }}>
 
        <input type="hidden" name="source" value="external"></input>
        <input type="submit" value="Subscribe" style={{
          color: `#a33k`,
          backgroundcolor:`#69a74e`,
          borderradius: `4px`,
          fontweight: `400`,
          textalign: `left`,
          fontsize: `15px`,
          lineheight: `0.5`,
          }}></input>
      </p> 
      </form>
      <a style={{fontSize:`13px`, fontStyle: `italic`}}>Disclaimer: The newsletter is handled by Substack</a>
      </div>
)


export default Newsletter;