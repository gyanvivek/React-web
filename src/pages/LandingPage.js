import React from 'react'

import { Link } from 'react-router-dom';
import video from '../Video/video.mp4';
import './LandingPage.css';

export default function LandingPage() {
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
                    <p>You got skills? </p>
                    <p className="pa">COME ON ! WE HAVE PROJECTS.</p>
                    <Link className="button" to="/collaborator">Explore</Link>
                </div>
            </div>
        </div>
    )
}
