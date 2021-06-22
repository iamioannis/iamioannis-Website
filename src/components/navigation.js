import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Button from '../components/button';


const Navigation = ({ children }) => (
    
    <ul className="nav-list-item">
        <li className="listItem"><Link to="/"><Button buttonText="🏠 Home" /></Link></li>
        <li className="listItem"><Link to="/blog"><Button buttonText="📝 Writing" /></Link></li>
        <li className="listItem"><Link to="/about"><Button buttonText="🙋‍♂️ About" /></Link></li>
    </ul>
)

export default Navigation

