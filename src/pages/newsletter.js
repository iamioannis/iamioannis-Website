import React from "react"
import Layout from "../components/layout"
import Newsletter from "../components/newsletter"

const NewsletterPage = () => (
<Layout>
    <h1 className={"post-header"}>Newsletter</h1>
    <div style={{
        padding:"100px",
        borderRight:"10px",
        // backgroundColor:'#f124',
        marginLeft:"10px",
        alignContent:'center',
    }}

    >
        <Newsletter/>
    </div>

</Layout>

)

export default NewsletterPage