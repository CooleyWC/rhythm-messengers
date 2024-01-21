import React from 'react';

function NavBar(props) {
    return (
        <div>
            <nav>
							<div>
								<div>
									<a href="#">Rhythm Messengers</a>
								</div>
								<ul>
									<li><a href="#">Home</a></li>
									<li><a href="#">Testimonials</a></li>
									<li><a href="#">Contact</a></li>
									<li><a href="#">About</a></li>
								</ul>
							</div>
            </nav>
        </div>
    );
}

export default NavBar;