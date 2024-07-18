import React, {useState} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/dist/fullpage.css';  // Import fullPage.js CSS

const Contact = () => {

  const [toggle, setToggle] = useState(1);

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

  return (
    <div className='About'>
    <ReactFullpage
        scrollingSpeed={1000} /* Options here */
        sectionsColor={['#3a6ea4', '#3a6ea4', '#c0c0c0', '#c0c0c0', '##c0c0c0']}
        showActiveTooltip={true}
        scrollBar={true}
        slidesNavigation={true}
        slidesNavPosition="top"
        scrollOverflowMacStyle={true}
        scrollOverflow={true}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className='section'>
                <h1>Contact</h1>
                <p>Want to contact me? <a className='no-style-link' href="mailto:marvinmatovu@gmail.com">Send email</a>.</p>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}

export default Contact;