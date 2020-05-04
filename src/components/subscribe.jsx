import React, { useState } from "react";
import { Link } from "gatsby";
import { Box, Button, CheckBox, Form, FormField, TextInput } from "grommet";

function Subscribe() {
  const [
    emailValue,
    setEmailValue,
    b_e793e0f6e2b2426485dd72877_ddb6f073dc] = useState("");

  const [ emailChecked, setEmailChecked] = useState(true);
  const [ directMailChecked, setDirectMailChecked] = useState(true);

  return (
    <Box
    background="light-2"
      border={{
        "color": "light-2",
        "size": "small",
        "side": "all"
      }}
      pad={{
        "vertical":"large",
        "horizontal":"medium"}}
      id="mc_embed_signup">

      <h4 style={{"marginTop": "0"}}>Subscribe for new content</h4>
      <form
        action="https://philsn.us8.list-manage.com/subscribe/post?u=e793e0f6e2b2426485dd72877&amp;id=ddb6f073dc"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">Email Address</label>
            <TextInput
              label="Email Address"
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              type="email"
              value={emailValue}
              onChange={e => setEmailValue(e.target.value)}
            />
          </div>
          <div
            id="mergeRow-gdpr"
            className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
          >
            <div className="content__gdpr">
              <Box direction="column" margin={{"top":"medium"}}>
                <fieldset
                  className="mc_fieldset gdprRequired mc-field-group"
                  name="interestgroup_field"
                  style={{"border":"none"}}
                >
                  <legend style={{"marginBottom":"0.5em"}}>Please select all the ways you would like to hear from me:</legend>

                  <CheckBox
                        type="checkbox"
                        id="gdpr_26785"
                        name="gdpr[26785]"
                        className="av-checkbox"
                        checked={emailChecked}
                        label="Email"
                        onChange={e => setEmailChecked(e.target.checked)}
                      />

                    <CheckBox
                      type="checkbox"
                      id="gdpr_26789"
                      name="gdpr[26789]"
                      className="av-checkbox"
                      label="Direct Mail"
                      checked={directMailChecked}
                      onChange={e => setDirectMailChecked(e.target.checked)}
                    />

                </fieldset>
              </Box>

              <p>
                You can unsubscribe at any time by clicking the link in the
                footer of our emails. For information <Link to="/">see our privacy policy</Link>.
              </p>
            </div>
            <div className="content__gdprLegal">
              <p>
              We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/" target="_blank">Learn more about Mailchimp's privacy practices here.</a>
              </p>
            </div>
          </div>
          <div id="mce-responses" className="clear">
            <div
              className="response"
              id="mce-error-response"
              style={{ display: "none" }}
            />
            <div
              className="response"
              id="mce-success-response"
              style={{ display: "none" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_e793e0f6e2b2426485dd72877_ddb6f073dc"
              tabIndex="-1"
              value={b_e793e0f6e2b2426485dd72877_ddb6f073dc}
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </form>
    </Box>
  );
}

export default Subscribe;
