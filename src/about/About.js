import React from 'react';
import Card from './Card'
function About(props) {
    return (
        <div>
            <h1>About</h1>
              <div>
                <div>
                  <p>The Rhythm Messengers are an adaptable crew of highly animated drummers and entertainers to elevate the energy of your next event! </p>
                  <p>We are a collection of performers drawing from Chicago’s best drumming productions. We’ll tailer make our show to best fit your event needs and venue.</p>
                </div>
                <div>
                  <h1>ENERGY</h1>
                  <p>Ignite your event with our choreographed, high energy drumming that will get your guests jumping out of their chairs!</p>
                </div>
                <div>
                  <h1>'BOOM' Your Audience</h1>
                  <p>Your event will take center stage when the Rhythm Messengers make their appearance. Your guests will jump, stomp and dance your event away.
                  </p>
                  <p>Call today and give your guests - a BOOM!</p>
                </div>
                <div>
                  <button>Book Now</button>
                </div>
              </div>
              <div>
                <Card 
                title='TRADE SHOWS' 
                description="Stop traffic at your booth with an attraction they won't forget."/>
                <Card 
                title='FESTIVALS' 
                description="Main stage or impromptu, We light the fuse to festival fun."/>
                <Card 
                title='SESSIONS' 
                description="Kick off the meeting with an electrifying and high energy atmosphere."/>
              </div>
        </div>
    );
}

export default About;