import React from "react";

const ContactUs = () => {
  return (
    <>
      <h3 style={{display:"flex",flexWrap:"wrap"}}>
        <i>
          If you have any queries or any suggestion regarding this site you can
          contact us at himanshu151@gmail.com.
          <br />
          or you can contact us at our facebook page or twitter account at
          himanshu432@gmail.com
        </i>
      </h3>
      <div className="logo-container">
        <a href="mailto:himanshu151@gmail.com">
          <img alt="gmail" src="/logos/gmail_logo.jpg" height="190%" />
        </a>
        <a href="https://www.facebook.com/">
          <img alt="facebook" src="/logos/facebook_logo.jpg" height="190%" />
        </a>

        <a href="https://www.twitter.com/">
          <img alt="twitter" src="/logos/twitter_logo.jpg" height="190%" />
        </a>
      </div>
      <h1>
        Thanks for visiting this website
        <br />
        Visit Again!
      </h1>
    </>
  );
};

export default ContactUs;
