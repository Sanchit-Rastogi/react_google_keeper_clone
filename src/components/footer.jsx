import React from 'react';

function Footer() {
    var time = new Date();
    return <div className='footer'>
        <p>Copyright ©️ {time.getFullYear()}</p>
    </div>
}

export default Footer;