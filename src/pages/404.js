import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <Seo title="Not Found" />
      <main className="error-page">
        <div className="error-container">
          <h2>ummmm..... no page here</h2>
          <StaticImage
            src="../assets/images/404.svg"
            alt="ummmm..... no page here"
            className="hero-img"
            placeholder="blurred"
          />
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
