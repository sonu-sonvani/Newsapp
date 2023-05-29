import React from 'react'

export default function NewsItem(props) {
 
    let {title,description,imageUrl,newsurl,author,date}= props
    return (
        <>
        <div className="card" >
      <img src={!imageUrl?"https://image.winudf.com/v2/image1/Y29tLnJhY2Nvb25mb290Lm51bGxza2luX2ljb25fMTYyODQ3OTA3Nl8wNjU/icon.png?w=184&fakeurl=1":imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className='card-text'><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
        <a href={newsurl} target="_blank"  rel="noreferrer" className="btn btn-dark">Go somewhere</a>
      </div>
    </div>
  
        </>
    )
  
}

