import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* <main>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <StaticImage
            src="../img/VRChat_2023-01-05_23-57-23.172_1920x1080.png"
            width={1920}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt=""
            className="d-block w-100"
          />
    </div>
    <div class="carousel-item">
    <StaticImage
            src="../img/VRChat_2023-01-05_23-57-23.172_1920x1080.png"
            width={1920}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt=""
            className="d-block w-100"
          />
    </div>
    <div class="carousel-item">
      <StaticImage
            src="../img/VRChat_2023-01-05_23-57-23.172_1920x1080.png"
            width={1920}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt=""
            className="d-block w-100"
          />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </main> */}

<div class="p-4 p-md-5 mb-4 text-white  bg-dark">
    <div class="px-0">
      <h1 class="display-4">Welcome to Game Development Meetup!</h1>
      {/* <p class="lead my-3"></p> */}
    </div>
  </div>
    {/* <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="mx-auto">
          <h1 className="fw-light">About us </h1>
          <p className="lead text-muted"> Not interested in playing games? 
          That`s perfectly fine! This will be a great place for you to speak English, mingle and meet new creative people and business professionals in the Metaverse. Also, 
          if you happen to be a creative person ( Indie Game Developer, artist, musician, etc.), 
          this event will be the perfect place for you to introduce and showcase your own original concepts.
           Show us what you`re making so that we can give you some good ideas and support your works.
           Either way, you can expect a very fun & exciting time! :)</p>
        </div>
      </div></section> */}
      <section className="py-5 container">
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
                            <h4 class="card-title h5 h4-sm"><i class="fas fa-caret-right" aria-hidden="true"></i><span>Thursday, March 2, 2023</span>
                            <i class="fas fa-caret-right" aria-hidden="true"></i><span>21:00 PM JST - 22:00 PM JST</span> </h4>
                            <p class="card-text"><a href="gdm_0th">The 0th Game Developers Meeting</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></section>
{/* <section className="py-5 text-center container">
      <div className="row">
        <Link to="/about/" className="btn btn-primary my-2">About</Link>
        <Link to="/page-2/" className="btn btn-secondary my-2">Go to page 2</Link>
      </div>
    </section> */}
  </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)