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
           <img src={require("./Images/aaron.jpg")} alt="Aaron pfp" className="team-image"/>
        <p className="names"> Aaron Zebley </p>
        <button type="button"> 
        <a href="https://github.com/Zebleya1" >GitHub</a>
        </button>
          <p>Front-End Development</p>
          <p>"We do have a lot in common. The same Earth, the same air, the same sky. Maybe if we started looking at what's the same instead of what's different... well who knows?</p> 
          <p> - Meowth, Pokémon</p>
         
        </div>
        <div className="group-box">
             <img src={require("./Images/omar.png")} alt="Omar's pfp" className="team-image"/>
          <p className="names">Omar Bonnet</p>
          <button type="button"> 
          <a href="https://github.com/obonn1" >GitHub</a>
          </button>
          <p>Back-End Development</p>
          <p>"Those who dream by day are cognizant of many things which escape those who dream only by night."</p>
          <p>- Edgar Allan Poe</p>
        </div>
        <div className="group-box">
             <img src={require("./Images/nathan.jpg")} alt="nathans pfp" className="team-image"/>
          <p className="names">Nathan Mange</p>
          <button type="button"> 
          <a href="https://github.com/nmange95">GitHub</a>
          </button>
          <p>Back-End Development</p>
          <p>"Success is not final, failure is not fatal: It is the courage to continue that counts."</p> 
          <p>- Winston Churchill </p>
        </div>
        <div className="group-box">
            <img src="https://avatars.githubusercontent.com/u/146746326?v=4" alt="Wendy's pfp" className="team-image"/>
          <p className="names">Wendy Gonzalez</p>
          <button type="button"> 
          <a href="https://github.com/GONZ997">GitHub</a>
          </button>
          <p>Front-End Development</p>
          <p>"To make a great dream come true, the first requirement is a great capacity to dream; the second is persistence."</p> 
          <p> - Cesar Chavez</p>
       
        </div>
        <div className="group-box">
         <img src={require("./Images/jacob.jpg")} alt="Jacob's pfp" className="team-image"/>
          <p className="names">Jacob Brown</p>
        
          <a href="https://github.com/JacobBrown0811"> <img src="./Images/github.png" alt="github logo"/> </a>
          
          <p>Front-End Development</p>
          <p>“There is no better teacher than adversity. Every defeat, every heartbreak, every loss, contains its own seed, its own lesson on how to improve your performance the next time.”</p> 
          <p> - Malcolm X.</p>
        </div>
      </div>
    </div>
  );
}
export default About;