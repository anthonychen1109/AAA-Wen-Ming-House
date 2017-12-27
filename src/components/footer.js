import React from 'react';

const Footer = () => {
  return (
    <div className="footer">

      <div className="footer-top">
        <div className="contact">
          <h4>Contact Us:</h4>
          <h5>Tel: (860) 858-5699</h5>
          <h5>Tel: (860) 858-5917</h5>
          <h6>Fax: (860) 926-4229</h6>
        </div>
        <div className="restaurant-hours">
          <h4>Restaurant Hours:</h4>
          <h5><strong>Closed On Monday</strong></h5>
          <h5>Tues - Thurs: 11:00 AM - 10:00 PM</h5>
          <h5>Fri - Sat: 11:00 AM - 10:30 PM</h5>
          <h5>Sunday: 12:00 PM - 10:00 PM</h5>
          <br />
          <h4>Lunch Hours:</h4>
          <h5>Tues - Sat: 11:00 AM - 3:30 PM</h5>
          <h5>Sunday: <strong>ALL DAY DINNER</strong></h5>
        </div>
      </div>
      <div className="footer-bottom">
        <h4>Find Us At:</h4>
        <h5>89 West Road #3</h5>
        <h5>Ellington CT 06029</h5>
      </div>
    </div>
  )
}

export default Footer;
