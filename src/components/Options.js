import Option from "./Option";
import React from "react";

const Options = (props) => (
      <div>
          <div className="widget-header">
            <h3 className="widget-header--title">Your Options</h3>
            <button className="button button__link"
                onClick={props.handleDeleteOptions}>
                Remove All
            </button>
           </div>

          {props.options.length === 0 && <p className="widget__message">
              Please add an option.
          </p>}
        {
          props.options.map((option, index) => (
              <Option key={option}
                      optionText={option}
                      count={index + 1}
                      handleDeleteOption={props.handleDeleteOption}
              />
          ))
        }
      </div>
    );

export default Options;



/**

 Dear Dr. Iba,
I trust that you're having a wonderful retirement time.  It is very odd not seeing you on campus anymore. I saw the email that has been sent about the job opportunity.  And I would have to say that I am very interested in such a position for many reasons. First, the effort that I will put into creating or maintaining the application might "radically transform how people connect with and receive mental health care." Second, it would be a great an opportunity to learn about the needs of the users, and build an application based on such needs. ex. I want the patient to schedule an appointment, send me a message, cancel an appointment, enter/edit/delete an appointment, etc. And so, we build the application from nothing in light of what the organization needs. We can use the hottest technologies for both front/back end since the current website does not use any backend technologies.

--
Mohammad Mahjoub,

 **/