import React, {useEffect} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/dist/fullpage.css';  // Import fullPage.js CSS


const Home = () => {

  useEffect(() => {

  }, [])
  return (
    <div>
      <ReactFullpage
        scrollingSpeed={1000} /* Options here */
        sectionsColor={['#c0c0c0', '#3a6ea4', '#c0c0c0', '#c0c0c0', '##c0c0c0']}
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
                <div class="window" style={{width: 'auto'}}>
                  <div class="title-bar">
                    <div class="title-bar-text">MHM's profile</div>
                    <div class="title-bar-controls">
                      <button aria-label="Minimize"></button>
                      <button aria-label="Maximize"></button>
                      <button aria-label="Close"></button>
                    </div>
                  </div>
                  <div class="window-body">
                  <h1>Marvin H Matovu</h1>
                <p>A creative engineer from London, United Kingdom.</p>

                  </div>
                </div>
              </div>
              <div className="section">
                <h1>Design. Build. Improve.</h1>
                <p>I create beautiful websites your users will love</p>
              </div>
              <div className="section">
                <h1 className='black'>Let's work together.</h1>
                <p style={{ marginLeft: '20%', marginRight: '20%' }} className='black'>From interaction design to scaleable design systems to well tested single-page web apps. <br/>I help awesome people to build ambitious yet accessible web projects.</p>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}

export default Home;