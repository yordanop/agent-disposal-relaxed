

import horiseonImage from '../assets/images/Horiseon-project.png'
import firstProjectImage from '../assets/images/First_Project.png'
import secondProjectImage from '../assets/images/Horiseon-project.png'
import PortfolioImage from '../assets/images/Yordano-portfolio.png'
import soonImage from '../assets/images/coming-soon.png'



export default function ProfilePage() {


  return (
      <div class="content">
    
        <div class="imag-cntr first">
            <a href="https://yordanop.github.io/frost-umbrella-mattress/" target="_blank">
                <div class="project-title">
                <p class="s_t">Github : <a href="https://yordanop.github.io/yordano-portfolio/" target="_blank">Here</a></p>
                </div>
                <img src={firstProjectImage} alt="preview of fisrt project" class="image-1"/>
            </a>       
        </div>
        
        <div class="imag-cntr left">
            <a href="https://yordanop.github.io/yordano-portfolio/" target="_blank">
                <div class="project-title">
                    <p class="f_t">My Portfolio</p>
                    <p class="s_t">HTML and CSS</p>
                </div>
                <img src={soonImage} alt="Preview of this portfolio" class="image-2"/>
            </a>
        </div>

        <div class="imag-cntr right">
            <a href="https://yordanop.github.io/payroll-tracker/" target="_blank">
                <div class="project-title">
                    <p class="f_t">Pay roll tracker</p>
                    <p class="s_t">Javascript</p>
                </div>
                <img src={soonImage} alt="Preview of payroll" class="image-3"/>
            </a>
        </div>
        
        <div class="imag-cntr left">
            <a href="https://yordanop.github.io/frost-umbrella-mattress/" target="_blank">
                <div class="project-title">
                    <p class="f_t">First Blog</p>
                    <p class="s_t">HTML CSS & Javascript</p>
                </div>
                <img src={firstProjectImage} alt="Preview of First Blog" class="image-4"/>
            </a>
        </div>
            

        <div class="imag-cntr right">
            <a href="https://schiffskrieg.onrender.com/" target="_blank">
                <div class="project-title">
                    <p class="f_t">Second Project</p>
                    <p class="s_t">Schieffskrieg</p>
                </div>
                <img src={secondProjectImage} alt="Planner preview" class="image-5"/>
            </a>
        </div>
        <div class="imag-cntr right">
            <a href="https://yordanop.github.io/atoms-await-lizard/" target="_blank">
                <div class="project-title">
                    <p class="f_t">First Project</p>
                    <p class="s_t">Das Wohnzimmer</p>
                </div>
                <img src={firstProjectImage} alt="First project preview" class="image-5"/>
            </a>
        </div>
      </div>
  );
}
