import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.listener = null;
        this.state = {
            status: "top"
        };
    }

    componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 120) {
                if (this.state.status !== "amir") {
                    this.setState({ status: "amir" });
                }
            } else {
                if (this.state.status !== "top") {
                    this.setState({ status: "top" });
                }
            }
        });
    }

    componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
    }
    render() {
        function hamburger() {
            const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
            const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
            const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
            // const header = document.querySelector('.header.container');
            // const company = document.querySelector('#company');
            // const logo = document.querySelector('#logo');


            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                mobile_menu.classList.toggle('active');


            });

            // document.addEventListener('scroll', () => {
            //     var scroll_position = window.scrollY;
            //     if (scroll_position > 250) {
            //         header.style.backgroundColor = '#29323c';
            //         company.style.display = 'block';
            //         logo.style.display = 'none';
            //     } else {
            //         header.style.backgroundColor = 'transparent';
            //         company.style.display = 'none';
            //         logo.style.display = 'block';
            //     }
            // });

            menu_item.forEach((item) => {
                item.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    mobile_menu.classList.remove('active');
                });
            });
        }



        return (
            <div id="header" >
                <div className="header container"
                    style={{
                        backgroundColor: this.state.status === "top" ? "transparent" : "rgba(0,0,0,0.7)",
                        color: this.state.status === "top" ? "transparent" : "white",
                        position: "fixed"
                    }}
                >
                    <div className="nav-bar" >
                        <div className="brand" >
                            <Link to="/"
                                style={{
                                    backgroundColor: this.state.status === "top" ? "red" : "green",
                                    color: this.state.status === "top" ? "white" : "blue",
                                    position: "relative"
                                }}
                            >
                                <h1
                                    style={{
                                        backgroundColor: this.state.status === "top" ? "transparent" : "transparent",
                                        color: this.state.status === "top" ? "transparent" : "rgb(80,148,28)",
                                        position: "relative"

                                    }}
                                >Bili</h1>
                            </Link>

                        </div>
                        <div className="nav-list" id="tbar">
                            <div className="hamburger"
                                style={{
                                    backgroundColor: this.state.status === "top" ? "transparent" : "transparent",
                                    color: this.state.status === "top" ? "black" : "white",
                                    position: "relative"
                                }}
                                onClick={hamburger}>
                                <div className="bar"
                                // style={{
                                //     backgroundColor: this.state.status === "top" ? "red" : "green",
                                //     color: this.state.status === "top" ? "white" : "black",
                                //     position: "relative"
                                // }}
                                ></div>
                            </div>
                            <ul>
                                <li><Link to="/" data-after="Home">Home</Link></li>
                                <li><Link to="/services" data-after="Service">Services</Link></li>
                                {/* <li><Link to="#projects" data-after="Projects">Projects</Link></li> */}
                                <li><Link to='/aboutus' data-after="About Us">About Us</Link> </li>
                                <li><Link to="/collaborator" data-after="Collaboration">Collaboration</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}
