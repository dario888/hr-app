import React from 'react'

const Home = () => {

    
    return (
        <div className="homeContainer">
            <div className="homeHeader" >
                <h1>Human Resource</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Dolor mollitia ut ratione voluptates recusandae temporibus!
                </p>
            </div>     
            {/* About */}          
            <div className="about">
                <div>
                    <h2>Who we are</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, voluptatibus?
                        Lorem ipsum dolor sit, amet consectetur adipisicing.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque voluptas nam voluptate.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, voluptatibus?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, voluptatibus?
                        Lorem ipsum dolor sit, amet consectetur adipisicing.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque voluptas nam voluptate.
                    </p>
                </div>
                <div className="aboutImg"></div>
            </div>
            {/* Mission */}
            <div className="mission">
                <h2>Our Mission</h2>
                <ul>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, voluptate.</li>
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, totam natus similique eius 
                        repudiandae quisquam.
                    </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae esse nam.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, magni?</li>
                </ul>
            </div>
            {/* Vision */}
            <div className="vision">
                <div className="visionImg"></div>
                <div className="visionTextDiv">
                    <h2>Vision</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum enim perspiciatis saepe assumenda, 
                        voluptatibus quae voluptas aliquam modi delectus cupiditate quod beatae tempore officiis laudantium.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum enim perspiciatis saepe assumenda, 
                        
                    </p>             
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sit!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sit!
                        voluptatibus quae voluptas aliquam modi delectus cupiditate quod beatae tempore officiis laudantium.
                    </p>
                </div>
            </div>
            {/* Vertical Timeline */}
            <div className="timelineContainer">
                <div className="timeline">
                    <ul>
                        <li>
                            <div className="timelineContent">
                                <h5 className="date">15.10.2020</h5>
                                <h2>Title 1</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, quibusdam quas aliquid 
                                    numquam animi necessitatibus! numquam animi necessitatibus!
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="timelineContent">
                            <h5 className="date">15.10.2020</h5>
                                <h2>Title 2</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, quibusdam quas aliquid 
                                    numquam animi necessitatibus! numquam animi necessitatibus!
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="timelineContent">
                            <h5 className="date">15.10.2020</h5>
                                <h2>Title 3</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, quibusdam quas aliquid 
                                    numquam animi necessitatibus! numquam animi necessitatibus!
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="timelineContent">
                            <h5 className="date">15.10.2020</h5>
                                <h2>Title 4</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, quibusdam quas aliquid 
                                    numquam animi necessitatibus! numquam animi necessitatibus!
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="timelineContent">
                            <h5 className="date">15.10.2020</h5>
                                <h2>Title 5</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, quibusdam quas aliquid 
                                    numquam animi necessitatibus! numquam animi necessitatibus!
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>              
            </div>

        </div>
    )
}

export default Home
