import React from 'react'
import { Link } from 'react-router-dom'

const TopSection = ({sectionObj}) => {
  return (
    <div>
        <div className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-md-6 vertical">
              <h4>{sectionObj.title}</h4>
            </div>
            <div className="col-md-6 vertical">
              <div className="text">
                <Link to={`${sectionObj.gotoLink.link}`}>{sectionObj.gotoLink.text}</Link>
                <a href="javascript:void(0);">{sectionObj.activeLink.text}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopSection;