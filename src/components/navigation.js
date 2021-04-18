import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Button from '../components/button';


const Navigation = ({ children }) => (
    
    <ul style={{
        display: 'table',
        // width: '50%',
        blockSize: 'max-content',
        listStyle: 'none', 
        // textAlign: 'center',
        // alignContent: 'center',
        margin: '0 auto',
        // width: '100%',
        padding: '0',
        overflow: 'hidden',
        listStyleType: 'none',
        overflow: 'hidden',
    }}>
        <li style={{ float: 'left', padding: '8px'}}><Link to="/"><Button buttonText="🏠 Home" /></Link></li>
        <li style={{ float: 'left', padding: '8px'}}><Link to="/blog"><Button buttonText="📝 Writing" /></Link></li>
        <li style={{ float: 'left', padding: '8px'}}><Link to="/about"><Button buttonText="🙋‍♂️ About" /></Link></li>
    </ul>
)

export default Navigation

