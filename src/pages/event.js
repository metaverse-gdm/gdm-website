import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const AboutPage = () => (
  <Layout>
    <div className="container  my-5">

      <div className="container">
        <div class="container-fluid">
    <div class="row">
        <div class="col-md-12 d-flex justify-content-center right-bck">
            <div class="registration-right">
                <h2 className="text-center">Event</h2>
                <div class="event-list">
                <div class="card flex-row">
                        <StaticImage
                            src="../img/file.png"
                            width={50}
                            quality={100}
                            formats={["AUTO", "WEBP"]}
                            alt="A Gatsby astronaut"
                            className="card-img-left img-fluid"
                        />
                        <div class="card-body">
                            <h4 class="card-title h5 h4-sm"><i class="fas fa-caret-right" aria-hidden="true"></i><span>Thursday, March 29, 2023</span>
                            <i class="fas fa-caret-right" aria-hidden="true"></i><span>21:00 PM JST - 22:00 PM JST</span> </h4>
                            <p class="card-text"><a href="../gdm_0th"> The 4th Game Developers Meeting</a></p>
                        </div>
                    </div>
                <div class="card flex-row">
                        <StaticImage
                            src="../img/file.png"
                            width={50}
                            quality={100}
                            formats={["AUTO", "WEBP"]}
                            alt="A Gatsby astronaut"
                            className="card-img-left img-fluid"
                        />
                        <div class="card-body">
                            <h4 class="card-title h5 h4-sm"><i class="fas fa-caret-right" aria-hidden="true"></i><span>Thursday, March 22, 2023</span>
                            <i class="fas fa-caret-right" aria-hidden="true"></i><span>21:00 PM JST - 22:00 PM JST</span> </h4>
                            <p class="card-text"><a href="../gdm_0th"> The 3rd Game Developers Meeting</a></p>
                        </div>
                    </div>
                <div class="card flex-row">
                        <StaticImage
                            src="../img/file.png"
                            width={50}
                            quality={100}
                            formats={["AUTO", "WEBP"]}
                            alt="A Gatsby astronaut"
                            className="card-img-left img-fluid"
                        />
                        <div class="card-body">
                            <h4 class="card-title h5 h4-sm"><i class="fas fa-caret-right" aria-hidden="true"></i><span>Thursday, March 15, 2023</span>
                            <i class="fas fa-caret-right" aria-hidden="true"></i><span>21:00 PM JST - 22:00 PM JST</span> </h4>
                            <p class="card-text"><a href="../gdm_0th"> The 2nd Game Developers Meeting</a></p>
                        </div>
                    </div>
                <div class="card flex-row">
                        <StaticImage
                            src="../img/file.png"
                            width={50}
                            quality={100}
                            formats={["AUTO", "WEBP"]}
                            alt="A Gatsby astronaut"
                            className="card-img-left img-fluid"
                        />
                        <div class="card-body">
                            <h4 class="card-title h5 h4-sm"><i class="fas fa-caret-right" aria-hidden="true"></i><span>Thursday, March 8, 2023</span>
                            <i class="fas fa-caret-right" aria-hidden="true"></i><span>21:00 PM JST - 22:00 PM JST</span> </h4>
                            <p class="card-text"><a href="../gdm_0th"> The 1st Game Developers Meeting</a></p>
                        </div>
                    </div>

                    <div class="card flex-row">
                        <StaticImage
                            src="../img/file.png"
                            width={50}
                            quality={100}
                            formats={["AUTO", "WEBP"]}
                            alt="A Gatsby astronaut"
                            className="card-img-left img-fluid"
                        />
                        <div class="card-body">
                            <h4 class="card-title h5 h4-sm"><i class="fas fa-caret-right" aria-hidden="true"></i><span>Thursday, March 2, 2023</span>
                            <i class="fas fa-caret-right" aria-hidden="true"></i><span>21:00 PM JST - 22:00 PM JST</span> </h4>
                            <p class="card-text"><a href="../gdm_0th"> The 0th Game Developers Meeting</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default AboutPage

export const Head = () => (
    <Seo title="Event | Game Development Meetup" />
)