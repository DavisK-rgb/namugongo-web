import React from 'react'
import * as FiIcons from "react-icons/fi";
import './Contacts.css'

function Contacts() {
    return (
        <div>
             <div className='contacts'>
        <div className='contacts-inner'>
        <FiIcons.FiHome/>
        <p>P.O Box 5369</p>

        </div>
        <div className='contacts-inner'>
        <FiIcons.FiPhone/>
        <p>+256 444285477</p>

        </div>
        <div className='contacts-inner'>
        <FiIcons.FiMail/>
        <p>info@ugandamartyrs.ac.ug</p>

        </div>

      </div>
        </div>
    )
}

export default Contacts
