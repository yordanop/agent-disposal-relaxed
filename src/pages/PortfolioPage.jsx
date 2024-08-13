

import horiseonImage from '../assets/images/Horiseon-project.png'
import firstProjectImage from '../assets/images/First_Project.png'
import secondProjectImage from '../assets/images/Schiffskrieg-Logo.svg'
import PortfolioImage from '../assets/images/Yordano-portfolio.png'
import soonImage from '../assets/images/coming-soon.png'



export default function ProfilePage() {


  return (
      <div class="content">
    
        <div class="imag-cntr first">
            <a href="https://yordanop.github.io/atoms-await-lizard/" target="_blank">
                <div class="project-title">
                <p class="s_t">Github repository <a href="https://github.com/yordanop/atoms-await-lizard" target="_blank">here</a></p>
                </div>
                <img src={firstProjectImage} alt="preview of fisrt project" class="image-1"/>
            </a>       
        </div>
        
        <div class="imag-cntr left">
            <a href="https://schiffskrieg.onrender.com/" target="_blank">
                <div class="project-title">
                <p class="s_t">Github repository <a href="https://github.com/Rod-Freedom/Schiffskrieg" target="_blank">here</a></p>
                </div>
                <img src={secondProjectImage} alt="Preview of this portfolio" class="image-2"/>
            </a>
        </div>

        <div class="imag-cntr right">
            <a href="https://yordanop.github.io/yordano-portfolio/" target="_blank">
                <div class="project-title">
                    <p class="s_t">Github repository <a href="https://github.com/yordanop/yordano-portfolio" target="_blank">here</a></p>
                </div>
                <img src={PortfolioImage} alt="Preview of payroll" class="image-3"/>
            </a>
        </div>
        
        <div class="imag-cntr left">
            <a target="_blank">
                <div class="project-title">
                    {/* <p class="s_t">Github repository <a href="-" target="_blank">here</a></p> */}
                </div>
                <img src={soonImage} alt="Preview of First Blog" class="image-4"/>
            </a>
        </div>
            

        <div class="imag-cntr right">
            <a target="_blank">
                <div class="project-title">
                   {/* <p class="s_t">Github repository <a href="-" target="_blank">here</a></p> */}
                </div>
                <img src={soonImage} alt="Planner preview" class="image-5"/>
            </a>
        </div>
        <div class="imag-cntr right">
            <a target="_blank">
                <div class="project-title">
                    {/* <p class="s_t">Github repository <a href="-" target="_blank">here</a></p> */}
                </div>
                <img src={soonImage} alt="First project preview" class="image-5"/>
            </a>
        </div>
      </div>
  );
}
