import React from 'react'
import bannerimg from "../../Assets/Banner/banner.jpg"
import "./Banner.css"

const Banner = () => {

    return (
        <>
            <div className="banner">
                <div className="banner-heading">
                </div>
                <div className="banner-image">
                    <img src={bannerimg} alt="DLF Andheri Mumbai" />
                </div>
                <div className="banner-stick">
                    <div className="banner-stick-box">
                        <div className="banner-stick-card">
                            <h2>Let Start Conversation</h2>
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, quis?</span>
                        </div>
                        {/* <div className="banner-stick-card">
                            <span>Golf Club</span>
                            <h2>At Andheri West , Mumbai</h2>
                        </div>
                        <div className="banner-stick-card">
                            <span>Academy</span>
                            <h2>2 & 3 BHK APARTMENTS</h2>
                        </div>
                        <div className="banner-stick-card">
                            <span>Status</span>
                            <h2>New LAUNCH</h2>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
