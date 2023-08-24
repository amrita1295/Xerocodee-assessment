import React from 'react'
import Logo from "../../Images/logo 4.png"
import "./Hosting.css"
import { Link } from 'react-router-dom'
const Hosting = () => {
    return (
        <>
            <div className='container'>
                <div className='container-1'>
                    <img src={Logo} alt='' height={60} />
                </div>
                <div>
                    <div className='l-1'>
                        <h2
                            style=
                            {{
                                fontWeight: 'normal',
                                fontSize: '30px'
                            }}>
                            Welcome
                        </h2>
                        <h4
                            style=
                            {{
                                color: 'gray',
                                fontSize: '20px'
                            }}>
                            Choose from the following Deployment Options
                        </h4>
                    </div>
                </div>
            </div>
            <div className='flex-row'>
                <div className='box'>
                    <Link to="/selfhosting">
                        <h3>
                            Self Hosting
                        </h3>
                    </Link>
                </div>
                <div className='box'>
                    <h3>XeroCodee Hosting</h3>
                </div>
            </div>

        </>
    )
}

export default Hosting