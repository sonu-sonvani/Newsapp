import React, {useState,useEffect} from 'react'
import NewsItem from './NewsItem'
// import PropTypes from 'prop-types'

export default function News(props) {
  
  const[articles,setarticles]=useState([])
  const[page,setpage]=useState(1)
  
  
//   static defaultProps={
//    country: "in",
//  category: "general"
//   }
//   static PropType = {
//     category : PropTypes.string
//   }
  // constructor(props) {
  //   super(props)
  //   console.log("this is contructor")
  //   this.state = {
  //     articles : [],
  //     page : 1
  //   }
  // }
  const UpdateNews=async()=>{
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=a3496827e95e4b8c882180326d41b10f&pageSize=6&page=1`
    let data= await fetch(url)
    let parsedata = await data.json()
  
    setarticles(parsedata.articles )

    
    props.setProgress(100)
  }
  useEffect(()=>{
 UpdateNews()
  },[])

  const handleNextClick =async() =>{
  console.log("next")
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=a3496827e95e4b8c882180326d41b10f&pageSize=6&page=${page+1}`
  let data= await fetch(url)
  let parsedata = await data.json()

  setarticles(parsedata.articles )
 
  setpage(
    page + 1
  )
  }
  const handlePriviousClick = async()=>{
  console.log("previos")
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=a3496827e95e4b8c882180326d41b10f&pageSize=6&page=${page-1}`
  let data= await fetch(url)
  let parsedata = await data.json()

  setarticles(parsedata.articles )

  setpage(
     page - 1
  )
  }
 
    return (
      <>
      <div className='container my-3'/>
      <div><h1 className='head'>Top-Headlines</h1></div>
      <div className='row'>
      { articles.map((element)=>{
        return  <div className='col-md-4' key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0.88):""} imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}/>
            </div>
})}
   
     
      </div>
      <div className="d-flex justify-content-between">
      <button disabled={page<=1}type='button' onClick={handlePriviousClick} className='btn btn-dark' >previous</button>
      <button disabled={page>=page.length}type='button'onClick={handleNextClick} className='btn btn-dark' >next</button>
    </div>
      
      </>
    )
  
}
