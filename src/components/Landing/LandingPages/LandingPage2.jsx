import React, { useState } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageImage from '../../../assets/PageImage.jsx'


function LandingPage2() {

    return (
        <div className="carouselOne">
            <img className="MLK" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMEW_NXYJKVW57DkInWNZSLLFbTqIWdc-IAg&usqp=CAU" alt="MLK" />
            <div>
                <p className="carousel">
                    " I have a dream today! I have a dream that one day
                    every valley shall be exalted, and every hill and
                    mountain shall be made low, the rough places will
                    be made plain, and the crooked places will be
                    made straight; "and the glory of the Lord shall be
                    revealed and all flesh shall see it together. "
                    -MLK, 1963

                </p>
                <img className="MLK-analysis" src="https://firebasestorage.googleapis.com/v0/b/scriptly-dcd67.appspot.com/o/Screen%20Shot%202022-05-11%20at%205.04.05%20PM.png?alt=media&token=bed42cda-50ed-4a41-b63e-09902847c1bf" alt="tone chart of MLK speech" />
            </div>

        </div>


    );
}

export default LandingPage2;