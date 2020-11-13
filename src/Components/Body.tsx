import React from "react";

const Body = () => {
    return (

        <>
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col-4 p-2">
                        <img className="img1" src="./images/rz logo.png" alt="#" /><br></br>
                        <img className="img2 ml-2" src="./images/puttingAfrica.png" alt="#" />
                    </div>
                </div>


                <div className="row justify-content-center ml-4 rz">
                    <div className="col text-left">
                        <h1 className="rz1">
                            Here at ReachZone,<br></br>
                            we design interactions and convey ideas
                            </h1>
                    </div>

                </div>

                <div className="row justify-content-center ml-4">
                    <div className="col text-left ">
                        <p className="rz2 mt-5">
                            We design, build readymade websites, mobile applications, and products
                            that are simple, beautiful and helps businesses grow.
                        </p>
                    </div>
                    </div>

                 <div className="row justify-content-center ">
                    <div className="col-8 text-center">
                        <img className="RectangleBig " src="./images/RectangleBig.png" alt="#"/>
                    </div>

                </div> 

               
                {/* <div className="row justify-content-center">
                    <div className="col-5">
                    <img className="RectangleSmall" src="./images/RectangleSmall.png" alt="#"/>

                    </div>
                    <div className="col-5">
                    <img className="RectangleSmall" src="./images/RectangleSmall.png" alt="#"/>

                    </div>

                </div> */}

            </div>
        </>

    )
}


export default Body