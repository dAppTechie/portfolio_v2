import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <div className="content">
              <h1>I'm Chad,</h1>
              <p>
                {" "}
                a <span className="bold">Full-Stack Developer</span> that's
                committed to <span className="bold">Humanitarian</span>,{" "}
                <span className="bold">Social</span> and{" "}
                <span className="bold">Environmental Causes</span>.
              </p>
              <p>
                {" "}
                My goal is to use <span className="bold">code</span> to bring
                together <span className="bold">youth</span> from{" "}
                <span className="bold">different cultures</span>, and{" "}
                <span className="bold">teach them valuable life skills</span>.
              </p>
            </div>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <div className="social-links">
              {socialLinks.map(link => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
                    {link.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
      </section>
    </header>
  )
}

export default Hero
