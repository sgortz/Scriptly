import React, { useState } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiQuillInk } from "react-icons/gi"

function Header () {

    return (
      <>
        <div className="header"><GiQuillInk /> Scriptly </div>
      </>
    );
}

export default Header;