import React from 'react';
import '../App.css';

function About() {
  return (
    <div className="About">
      <header>
      
        <h1 className="About-header"> ARMY  TEAM</h1>
      </header>
      <div className="group-container">
        <div className="group-box">
           <img src={require("./picture/aaron.jpg")} alt="Aaron pfp" className="team-image"/>
        <p className="names"> Aaron Zebley </p>
        <a href="https://github.com/Zebleya1" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          <p>Front-End Development</p>
          <p>"We do have a lot in common. The same Earth, the same air, the same sky. Maybe if we started looking at what's the same instead of what's different... well who knows?</p> 
          <p> - Meowth, Pokémon</p>
         
        </div>
        <div className="group-box">
          
          <img src={require("./picture/omar.png")} alt="Omar's pfp" className="team-image"/>
          <p className="names">Omar Bonnet</p>
          <a href="https://github.com/obonn1" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          <p>Back-End Development</p>
          <p>"Those who dream by day are cognizant of many things which escape those who dream only by night."</p>
          <p>- Edgar Allan Poe</p>
        </div>
        <div className="group-box">
          {/* quote img */}
          <img src={require("./picture/nathan.jpg")} alt="nathans pfp" className="team-image"/>
          <p className="names">Nathan Mange</p>
          <a href="https://github.com/nmange95" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          <p>Back-End Development</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti odio tempora iusto eveniet, unde quia enim nulla molestiae reprehenderit vel dignissimos molestias perferendis voluptates tenetur rem nesciunt corrupti animi recusandae? Fugiat hic praesentium deleniti eligendi? Facere pariatur atque in dignissimos.</p>
        </div>
        <div className="group-box">
          {/* quote image*/}
          <img src="placeholder.jpg" alt="Wendy's pfp" className="team-image"/>
          <p className="names">Wendy Gonzalez</p>
          <a href="https://github.com/GONZ997" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          <p>Front-End Development</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus rem, iste architecto eius laboriosam magni esse. Sapiente porro quasi ipsam aperiam reiciendis laboriosam consectetur pariatur iusto, et distinctio. Porro perferendis dicta vel velit laborum excepturi ullam earum hic voluptatibus rem?</p>
       
        </div>
        <div className="group-box">
          {/* quotes image */}
          <img src="placeholder.jpg" alt="Jacob's pfp" className="team-image"/>
          <p className="names">Jacob Brown</p>
          <a href="https://github.com/JacobBrown0811" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          <p>Front-End Development</p>
          <p>“There is no better teacher than adversity. Every defeat, every heartbreak, every loss, contains its own seed, its own lesson on how to improve your performance the next time.”</p> 
          <p> - Malcolm X.</p>
        </div>
      </div>
    </div>
  );
}
export default About;