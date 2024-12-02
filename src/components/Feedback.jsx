import React from "react";

const Feedback = () => {
  return (
    <>
      <div className="feedback-container">
        <form action="/action_page.php">
          <div className="row">
            <h1 align="center">Feedback Form</h1>
            <div className="col-25">
              <label for="fname">First Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Last Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Email Id</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id=" email ld"
                name="lastname"
                placeholder="example123@gmail.com.."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="country">Country</label>
            </div>
            <div className="col-75">
              <select id="country" name="country">
                <option>Australia</option>
                <option>Canada</option>
                <option>USA</option>
                <option>Nepal</option>
                <option>India</option>
                <option>Bangladesh</option>
                <option>Japan</option>
                <option>China</option>
                <option>America</option>
                <option>Pakistan</option>
                <option>Finland</option>
                <option>Maldives</option>
                <option>Malaysia</option>
                <option>Dubai</option>
                <option>Others</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="Feedback">Feedback</label>
            </div>
            <div className="col-75">
              <textarea
                id="Feedback"
                name="Feedback"
                placeholder="Write something.."
                style={{ height: "200px" }}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <br />
        <font color="blue">
      <h4>
          How helpful is this Website????
          <br />
          <br />
          Rate us!
          </h4>
          <br />
          <div className="emoji-container">
            <div className="emoji-items">
              <input type="radio" name="quality" />
              &#128525;
              <fieldset>Very Good</fieldset>
            </div>
            <div className="emoji-items">
              <input type="radio" name="quality" />
              &#128512;
              <fieldset>Good</fieldset>
            </div>
            <div className="emoji-items">
              <input type="radio" name="quality" />
              &#128527;
              <fieldset>Not bad</fieldset>
            </div>
            <div className="emoji-items">
              <input type="radio" name="quality" />
              &#128531;
              <fieldset>Bad</fieldset>
            </div>
            <div className="emoji-items">
              <input type="radio" name="quality" />
              &#128532;
              <fieldset>Very Bad</fieldset>
            </div>
            <input type="submit" value="Submit" />
          </div>
        </font>
      
    </>
  );
};

export default Feedback;
