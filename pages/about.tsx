import Nav from "components/nav/Nav";
import Pageheader from "components/Pageheader";
import Paragraph from "components/Paragraph";


const About = () => {
  const about = ''
  return (
    <div className="about">
      <section>
        <Nav />

      </section>

      <Pageheader parent="Home" child="About" page="About" />
      <Paragraph para={about} />

    </div>
  )
}

export default About;
