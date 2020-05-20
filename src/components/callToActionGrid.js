import React from "react"
import RichText from "./richText"
import ContentCard from "./contentCard"
import { Link } from "gatsby"
import {ContentSection} from "./content.style"


const CallToActionGrid = ({ title, callToActions }) => {
  return (
    <ContentSection>
      <RichText render={title} />
      <div className="centent_list">
        {callToActions.map((callToAction, i) => {
          return (
            <ContentCard key={i}
              title={callToAction.call_to_action_title}
              date={callToAction.call_to_action_date}
              link={callToAction.call_to_action_link.url}
              image={callToAction.featured_image.url} />
          )
        })}
      </div>
          <Link className="content_link" to="/project">作成したアプリ一覧へ<span>></span></Link>
    </ContentSection>
  )
}

export default CallToActionGrid
