import React from 'react';
import './Footer.css';
import { Button } from './Button';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-email'>
                <p className="footer-email-heading">
                    Email Us For Any Questions
                </p>
            <Button buttonStyle='btn--outline' href="mailto:menksafiya@icloud.com">
                <p className='footer-email-text'>
                    Email Us
                </p>
            </Button>
            </section>
        </div>
    )
}

export default Footer;