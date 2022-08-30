import Nav from 'components/nav/Nav';
import Pageheader from 'components/Pageheader';
import Map from 'components/Map';

const Contact = () => {
  return (
    <div className="contact">
      <section>
        <Nav />
      </section>
      <Pageheader parent="Home" child="Contact" page="Contact" />

      <section>
        <Map
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15882.279039897005!2d-0.1446703!3d5.6303443!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeab19cfd3e6b3d37!2sEx%20Interior%20Design!5e0!3m2!1sen!2sgh!4v1661877372877!5m2!1sen!2sgh"
          width=""
          height=""
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </section>

      <section className="contact-box">
        <div className="container">
          <div className="col-2">
            <div>
              <i className="fa fa-phone"></i>
              <h3>TALK TO US</h3>
              <h4></h4>
            </div>
          </div>
          <div className="col-2">
            <div>
              <i className="fa fa-phone"></i>
              <h3>CONTACT US</h3>
              <h4></h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
