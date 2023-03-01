import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {Seo} from "../components/seo"

const AboutPage = () => (
  <Layout>
    <div className="container  my-5">

      <div className="container">
        <h1 >What you need to know</h1>
        <p>
        Not interested in playing games? That`s perfectly fine! This will be a great place for you to speak English, <br></br>
        mingle and meet new creative people and business professionals in the Metaverse. <br></br>
        Also, if you happen to be a creative person ( Indie Game Developer, artist, musician, etc.), <br></br>
        this event will be the perfect place for you to introduce and showcase your own original concepts. <br></br>
        Show us what you`re making so that we can give you some good ideas and support your works. Either way, you can expect a very fun & exciting time! :)
        </p>
      </div>
      {/* <Link to="/">Go back to the homepage</Link> */}
    </div>
  </Layout>
)

export default AboutPage

export const Head = () => (
    <Seo title="About | Game Development Meetup" />
)