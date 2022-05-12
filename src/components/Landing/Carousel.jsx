import React, { useState } from "react";
var CronJob = require('cron').CronJob;
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage1 from './LandingPages/LandingPage1.jsx'
import LandingPage2 from './LandingPages/LandingPage2.jsx'
import LandingPage3 from './LandingPages/LandingPage3.jsx'

function Carousel() {
const [landingPage, setLandingPage] = useState(0);
let carousel;

var job = new CronJob(
	'*/5 * * * * *',
	function() {
    if(landingPage < 2){
      setLandingPage(landingPage+1)
    }else {
      setLandingPage(0)
    }

	},
	null,
	true,
	'America/Los_Angeles'
);

job.start()

if(landingPage === 0) {
  carousel=<LandingPage1 />
}else if(landingPage=== 1) {
  carousel=<LandingPage2 />
}else if(landingPage === 2) {
  carousel=<LandingPage3 />}

    return (
      <>
      <>
{carousel}
</>
      </>

    );
}

export default Carousel;