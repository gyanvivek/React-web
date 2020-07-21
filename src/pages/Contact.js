import React, { Component } from 'react'
import './contact.css';
import video from '../Video/4K_UHD_25fps_FREE_Video_Background___HUD_Sci_Fi_Plexus_Galactic_Map(720p).mp4';
import { MdMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default class Contact extends Component {
    render() {
        return (
            <div>
                  <div>
                <video id="videolayout" className="video-container video-container-overlay" autoPlay="true" loop='true' muted='true'>
                    <source src={video} type="video/mp4" />
                    {/* <!-- 3 hi tarah ka support video type ka hota hai mp4 ogg webM --> */}
                </video>
            </div>
            <div class='overlay'></div>
            <div className="section">
                <div class="cityText">
                    <h1>WELCOME TO Bili</h1>
                    <div className="contactdetails">
                        <MdMailOutline  className="logo"/>
                        <h1>techbili@bili.co.in</h1>

<FaWhatsapp className="logo" />
<h1>91427 60208</h1>
                    </div>
                    <p>You got skills? </p>
                    <p className="pa">COME ON ! WE HAVE PROJECTS.</p>
                   
                </div>
            </div>
            </div>
        )
    }
}

