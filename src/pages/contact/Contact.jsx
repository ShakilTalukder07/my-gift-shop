import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {

    const position = [23.772723525552248, 90.3724520803533]

    return (
        <div>
            <div className='bg-[#ECACAB] py-14'>
                <h1 className='text-3xl text-white text-center font-semibold'>CONTACT</h1>
                <p className='text-white text-center mt-2'>Home / Contact</p>
            </div>
            <div className='flex flex-col justify-center items-center'>

                <div className='my-10'>
                    <MapContainer center={position} zoom={8} scrollWheelZoom={false}
                        style={{ width: "80vw", height: "400px" }}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div>
                    <section className='my-10'>
                        <div className='grid grid-flow-row md:grid-flow-row lg:grid-flow-col gap-0 md:gap-0 lg:gap-40'>
                            <div className='flex flex-col gap-4'>
                                <div className="card w-72 bg-transparent shadow-2xl">
                                    <div className="card-body">
                                        <h4>Email</h4>
                                        <h5>gist.shop@gmail.com</h5>
                                        <a href="mailto:shakil.ahmed01940@gmail.com" target='blank'>Send a message</a>
                                    </div>
                                </div>
                                <div className="card w-72 bg-transparent shadow-2xl">
                                    <div className="card-body">
                                        <h4>Messenger</h4>
                                        <h5>Gift Shop</h5>
                                        <a href="https://www.facebook.com/shakil.ahamed.07/" target='blank'>Send a message</a>
                                    </div>
                                </div>
                                <div className="card w-72 bg-transparent shadow-2xl">
                                    <div className="card-body">
                                        <h4>What's app</h4>
                                        <h5>+8801680******</h5>
                                        <a href="https://api.whatsapp.com/send?phone+8801680067377" target='blank'>Send a message</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <form
                                    className='flex flex-col items-center shadow-3xl gap-8 my-20'>
                                    <input type="text" name='name' placeholder='Your Full Name' className="input w-96 input-bordered max-w-xs text-white shadow-2xl" required />
                                    <input type="email" name='email' placeholder='Your Email' className="input w-96 input-bordered max-w-xs  text-white" required />
                                    <textarea type="message" rows='7' placeholder='Your Message' required className='input w-96 h-32 max-w-xs input-bordered  text-white placeholder:white' />
                                    <button className='bg-black text-white w-80 py-3 rounded-md'>Send Message</button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Contact;