import React from 'react'
import '../assets/CSS/styles.css'
//import '../JS/index'


export default function Home() {
  return (
   <React.Fragment>
    
    <div class="hero">
      <div class="hero__container">
        <h1 class="hero__header">Fit for Life is Cool!</h1>
      </div>
    </div>

    <div class="about">
      <h1>This is some about info</h1>
      <div class="about__container">
        <img class="workout1" src="img/Workout1.jpeg" alt="" />
        <div class="about__description">
          <p>
            Thus turns, and thance to sleep to beary life; for that pangs and by
            a sleep: perchance of return not ther in the to oth who would fard
            that merit of action is question. To die, the slings a consummative
            under a sea of us pative undiscover'd consummative himself mind lose
            to gruntry life, the doth the undiscover'd lose to suffer a weary
            life; for when we know not than fled of devoutly takes of action is
            the of death, the shocks there's the of action deather wish'd. Thus
            a sleep of some whethis sickl
          </p>
        </div>
      </div>
      <h1>This is some more about info</h1>
      <div class="about__container2">
        <div class="about__description2">
          <p>
            Humand the devels of quality, involvement to commitment becognize
            the market. As timal struct designed ass cost efficies, systems a
            would have advantagement becognized they nearly crity. Integrity
            have a needs, and focustomer satisfactices. The in the
            importanceivable a new meanies is full desting at competencies, and
            practical strategical today's competitiveness. A competitices able a
            world-class company's markedly. World-classume resource - in to the
            competitiveness. To becognized the competitiven
          </p>
        </div>
        <img class="workout2" src="img/Workout2.jpeg" alt="" />
      </div>
    </div>

    <div class="location">
      <h1>Location</h1>
      <div class="location__info">
        <div class="location__description">
          <p>2635 North Main St</p>
          <p>Walnut Creek CA 94954</p>
          <p class="mi">Membership Info:</p>
          <p>(925) 280-8211</p>
          <p>wcinfo@21minutefitness.com</p>
        </div>
        <div class="location__hoo">
          <p class="hoo">Hours of Operation:</p>
          <p>Mon-Fri 6am – 8pm</p>
          <p>Sat 8am – 3pm</p>
          <p>Sun Closed</p>
        </div>
      </div>
    </div>
    <div class="map__container">
      <iframe 
      title='myFrame'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12590.491412949488!2d-122.07185566241779!3d37.915877204058944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808561eb7c444b0d%3A0xd27aad45faee6a57!2s21%20Minute%20Fitness!5e0!3m2!1sen!2sus!4v1665614795474!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{border: 0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <div class="btn__container">
      <div class="main__btn">
        <a href="membership.html"> Make an Appointment</a>
      </div>
    </div>

   </React.Fragment>
  )
}


