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
            src="../img/275317551-ed18511a-125f-48ac-8802-4d2256485428.png"
            width={1920}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt=""
            className="d-block w-100"
          />
    </div>
    <div class="carousel-item">
    <StaticImage
            src="../img/VRChat_2023-03-22_23-10-56.595_1920x1080.png"
            width={1920}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt=""
            className="d-block w-100"
          />
    </div>
    <div class="carousel-item">
    <StaticImage
            src="../img/VRChat_2023-03-22_23-13-30.630_1920x1080.png"
            width={1920}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt=""
            className="d-block w-100"
          />
    </div>
    <div class="carousel-item">
    <StaticImage
            src="../img/VRChat_2023-03-22_23-09-06.857_1920x1080.png"
            width={1920}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt=""
            className="d-block w-100"
          />
    </div>
    <div class="carousel-item">
    <StaticImage
            src="../img/VRChat_2023-03-22_23-17-31.014_1920x1080.png"
            width={1920}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt=""
            className="d-block w-100"
          />
    </div>

    <div class="carousel-item">
    <StaticImage
            src="../img/VRChat_2023-03-15_21-37-51.766_3840x2160.png"
            width={1920}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt=""
            className="d-block w-100"
          />
    </div>

    <div class="carousel-item">
    <StaticImage
            src="../img/VRChat_2023-03-22_22-03-47.136_1920x1080.png"
            width={1920}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt=""
            className="d-block w-100"
          />
    </div>
    
    <div class="carousel-item">
    <StaticImage
            src="../img/VRChat_2023-03-15_22-14-10.137_1920x1080.png"
            width={1920}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt=""
            className="d-block w-100"
          />
    </div>
    <div class="carousel-item">
    <StaticImage
            src="../img/VRChat_2023-03-08_22-05-35.111_1920x1080.png"
            width={1920}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt=""
            className="d-block w-100"
          />
    </div>

    

    <div class="carousel-item">
    <StaticImage
            src="../img/VRChat_2023-03-08_22-36-17.002_1920x1080.png"
            width={1920}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt=""
            className="d-block w-100"
          />
    </div>
    <div class="carousel-item">
      <StaticImage
            src="../img/VRChat_2023-03-08_21-44-20.205_1920x1080.png"
            width={1920}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt=""
            className="d-block w-100"
          />
    </div>
    <div class="carousel-item">
      <StaticImage
            src="../img/VRChat_2023-03-08_21-05-00.184_1920x1080.png"
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

<div class="p-4 p-md-5 mb-4 text-white  bg-dark">
    <div class="px-0">
      <h1 class="display-4">Welcome to Game Development Meetup!</h1>
      {/* <p class="lead my-3"></p> */}
    </div>
  </div>
    <section className="py-5 text-center container">
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
      </div></section>
      <section className="py-5 container">
      <div class="card">
        <div class="row no-gutters">
          <div class="col-lg-6">
            <StaticImage
            src="../img/9f219e3e-faa4-4247-80a5-ca381c545aae.jpg"
            width={1920}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt=""
            className="card-img w-100"
          />
          </div>
          <div class="col-lg-6">
            <div class="card-body">
              <h4 class="card-title">vrc-ta-hub.booth.pm</h4>
              <p class="card-text">メタバース（VR SNS）プラットフォームであるVRChat内で開催されている、技術・学術イベントを紹介する一冊です。 IT、工学、化学、歴史、人文など2023年12月現在VRChatで開催されている22の技術・学術イベントを紹介します。 </p>
              <a href="https://vrc-ta-hub.booth.pm/items/5307031" class="btn btn-primary">サイトへ</a>
            </div>
          </div>
        </div>
      </div>
      </section>
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
