import React from 'react';
import Card from './Card';

function Contact(props) {
    return (
        <div id="contact">
            <h1>Contact</h1>
            <h3>Representation</h3>
            <Card
            name="THOMAS BENKO" 
            title="Band Leader" 
            email="" 
            phoneNumber=" 1-630-415-9521"/>
            <Card 
            name="LIVE ART INTERNATIONAL" 
            title="Agent - Dayna Malow" 
            email="info@liveartinternational.com" 
            phoneNumber="1-800-985-9330"/>
            <Card 
            name="SF Agent" 
            title="Pinnacle - Nathan Kelly"
            email="" 
            phoneNumber="1-800-769-3322"/>
        </div>
    );
}

export default Contact;