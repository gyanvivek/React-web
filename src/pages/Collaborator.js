import React from 'react'
import bili from '../Images/bili.png'
import { MdMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import work from '../Images/work.svg'
import './Collaborator.css';

export default function Collaborator() {
    return (
        <div>


            {/* <div >
                <h1 className="h1">Bili believes and encourages the budding talent  all across the country.</h1>
                <h1 className="p">if you have technical skills then this is the correct place you landed. </h1>
                <h1 className="p"> Work on real life projects and enhaces your skills.</h1>
                <img className='image' src={bili} alt="bili" />
            </div> */}
            <div className='contact'>
                <div className="grida">
                    <div><p>Bili believes and encourages the budding talent  all across the country.
                    If you have technical skills then this is the correct place you landed.
                    Work on real life projects and enhaces your skills.
                    </p> </div>

                    <div className='grid-image'> <img className='image' src={bili} alt="bili" /></div>
                </div>
                <div><img className="javaimg" src={work} alt={work} /> </div>
                <div className="gridb">
                    <div className="icons"><MdMailOutline size="50px" color="red" /><h1>techbili@bili.co.in</h1></div>

                    <div>
                        <h1 className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus vel ipsum hendrerit,
                        vel pulvinar elit rutrum. Fusce eleifend purus cursus, consequat eros ut, porttitor erat.
                        Aliquam at vehicula turpis. Nunc viverra diam eget risus fringilla malesuada.
                        Aenean quis lectus ligula. Nulla vel commodo ipsum. Donec eu pharetra erat, id tincidunt quam.
                              </h1>
                    </div>
                    <div className="icons"><FaWhatsapp color='green' size='50px' /><h1>9142760208</h1></div>
                </div>
            </div>



        </div>


    )
}
