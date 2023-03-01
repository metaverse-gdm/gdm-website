import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {Seo} from "../components/seo"

const AboutPage = () => (
  <Layout>
    <div className="container  my-5">

      <div className="container">
        <h3 >メタバースイベント「『The 0th Game Developers Meeting」が2023年3月2日 木曜日 21:00に開催決定！</h3>
        <p>
        『The 0th Game Developers Meeting』Metaverse Meetupの開催が決定！
        3月2日21時よりメタバース空間を舞台に、開発者のトークセッションやVIVERSEとの取り組みの最新情報を発信予定。<br></br>
        VRデバイスをお持ちの方はより没入感溢れる体験を、持っていない方もデスクトップモード経由で気軽に参加可能です。
        </p>
        <p>
        【イベント概要】
        <br></br>
■開催日時：2023年3月2日 21:00 (GMT+9)<br></br>
<br></br>
■所要時間：60分<br></br>
<br></br>
■言語：日本語<br></br><br></br>
■参加費：無料
        </p>
      </div>
      {/* <Link to="/">Go back to the homepage</Link> */}
    </div>
  </Layout>
)

export default AboutPage

export const Head = () => (
    <Seo title="The 0th Game Developers Meeting | Event | Game Development Meetup" />
)