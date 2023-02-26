import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const IndexPage = () => (
  <Layout>
    <main>
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
    </main>
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Hello world ! </h1>
          <p className="lead text-muted"> Welcome to this Boostrap 5 Gatsby Starter</p>


        </div>
      </div>
      <div class="container-fluid">
    <div class="row">
        <div class="col-md-12 d-flex justify-content-center right-bck">
            <div class="registration-right">
                <h2>Our News</h2>
                <div class="event-list">
                    <div class="card flex-row">
                        <StaticImage
                            src="../images/gatsby-astronaut.png"
                            width={300}
                            quality={100}
                            formats={["AUTO", "WEBP"]}
                            alt="A Gatsby astronaut"
                            className="card-img-left img-fluid"
                        />
                        <div class="card-body">
                            <h4 class="card-title h5 h4-sm"><i class="fas fa-caret-right" aria-hidden="true"></i><span>February 26, 2023</span><i class="fas fa-caret-right" aria-hidden="true"></i><span>12:00 AM - 11:59 PM</span> </h4>
                            <p class="card-text">The site is now open!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      <div className="row">
        <Link to="/about/" className="btn btn-primary my-2">About</Link>
        <Link to="/page-2/" className="btn btn-secondary my-2">Go to page 2</Link>
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)