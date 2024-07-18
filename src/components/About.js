import React, {useState} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/dist/fullpage.css';  // Import fullPage.js CSS

const About = () => {

  const [toggle, setToggle] = useState(1);
  const [secondToggle, setSecondToggle] = useState(1);

    function updateToggle(e, id) {
      setToggle(id);

      const target = e.target;
      const parent = target.parentNode;
      const grandparent = parent.parentNode;

      // Remove all current selected tabs
      parent
        .querySelectorAll('[aria-selected="true"]')
        .forEach((t) => t.setAttribute("aria-selected", false));

      // Set this tab as selected
      target.setAttribute("aria-selected", true);

      // Hide all tab panels
      
    }

    function updateToggle2(e, id) {
      setSecondToggle(id);

      const target = e.target;
      const parent = target.parentNode;
      const grandparent = parent.parentNode;

      // Remove all current selected tabs
      parent
        .querySelectorAll('[aria-selected="true"]')
        .forEach((t) => t.setAttribute("aria-selected", false));

      // Set this tab as selected
      target.setAttribute("aria-selected", true);

      // Hide all tab panels
      
    }

  return (
    <div className='About'>
    <ReactFullpage
        scrollingSpeed={1000} /* Options here */
        sectionsColor={['#018281', '#3a6ea4', '#c0c0c0', '#c0c0c0', '##c0c0c0']}
        showActiveTooltip={true}
        scrollBar={true}
        slidesNavigation={true}
        slidesNavPosition="top"
        scrollOverflowMacStyle={true}
        scrollOverflow={true}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section">
              <h2>Projects</h2>
              <section class="tabs" style={{maxWidth: '500px'}}>
              <menu role="tablist" aria-label="Sample Tabs">
                <button role="tab" aria-controls="tab-A" aria-selected="true" onClick={(e) => updateToggle(e, 1)}>PacTrump</button>
                <button role="tab" aria-controls="tab-B" onClick={(e) => updateToggle(e, 2)}>Hyperion</button>
                <button role="tab" aria-controls="tab-C" onClick={(e) => updateToggle(e, 3)}>GameOfLife</button>
                <button role="tab" aria-controls="tab-D" onClick={(e) => updateToggle(e, 4)}>GoodLord</button>
              </menu>
          
              <article role="tabpanel" id="tab-A" className={toggle !== 1 ? "window-bodo" : "show-content"}>
                <h3>Pacman VR</h3>
                <img src='TrumpForGithub.gif' width={300}/>
                <p style={{ fontSize: '15px', margin: '18px' }}>
                A virtual reality game, whereby you are being chased through a maze by multiple enemies who spawn at set intervals in the centre of a maze. A VR take on the video gaming classic.
                </p>
                <div role="tooltip" style={{ fontSize: '14px' }}>
                  Read more at <a href="https://github.com/marvinhm/PacTrumpVR" target="_blank">PacTrumpVR - Github repo</a>
                </div>
              </article>
              <article role="tabpanel" id="tab-A" className={toggle !== 2 ? "window-bodo" : "show-content"}>
              <h3>Hyperion Dev Bootcamp</h3>
              <img src='hyperion.jpg' width={300}/>
              <p style={{ fontSize: '15px', margin: '18px' }}>
              A frontend exercise, where I helped to create a website for an up and coming web development online bootcamp in Africa. Given the Wireframe I had to create a pixel perfect site to match. I used Vite, React and Bootstrapp
              </p>
              <div role="tooltip" style={{ fontSize: '14px' }}>
                Read more at <a href="https://github.com/marvinhm/hyperion" target="_blank">Hyperion - Github repo</a>
              </div>
              </article>
              <article role="tabpanel" id="tab-A" className={toggle !== 3 ? "window-bodo" : "show-content"}>
                <h3>Conway's Game of Life</h3>
                <img src='gol.gif' width={300}/>
                <p style={{ fontSize: '15px', margin: '18px' }}>
                Test Driven Development of the Game of Life, a zero-player game also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. I used Javascript, babel, mocha and chai and React for FE. 
                </p>
                <div role="tooltip" style={{ fontSize: '14px' }}>
                  Read more at <a href="https://github.com/marvinhm/LifeGame" target="_blank">Game of Life - Github repo</a>
                </div>
              </article>
              <article role="tabpanel" id="tab-A" className={toggle !== 4 ? "window-bodo" : "show-content"}>
              <h3>Goodlord</h3>
              <img src='goodl.jpeg' width={300}/>
              <p style={{ fontSize: '15px', margin: '18px' }}>
              Another frontend exercise for Tennacy company Good Lord (formerly known as Vouch), This involves gathering information about a tennant's employment, income, credit history, previous
              tenancies, etc and running it through our referencing checks. Here I used React/TypeScript along with React-Hook-Form.
              </p>
              
              <div role="tooltip" style={{ fontSize: '14px' }}>
                Read more at <a href="https://github.com/marvinhm/gl-reference" target="_blank">Good Lord - Github repo</a>
              </div>

              </article>
            </section>
              </div>
              <div className="section">
               
                
                <div class="window" style={{maxWidth: '320px'}}>
  <div class="title-bar">
    <div class="title-bar-text">Experience Status Bar</div>
  </div>
  <div class="window-body has-space">
    <p> Past experiences:</p>
    <ul>
      <li>LEO</li>
      <li>Talk Talk</li>
      <li>Tata Consultancy Services</li>
      <li>Imagine Communications</li>
    </ul>
  </div>
  <div class="status-bar">
    <p class="status-bar-field">Press F1 for help</p>
    <p class="status-bar-field">Slide 2</p>
    <p class="status-bar-field">CPU Usage: 10%</p>
  </div>
</div>
              </div>
              
            </div>
          );
        }}
      />
    </div>
  );
}

export default About;