import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDataContext } from '../context/DataContext';

const DetailPage = () => {

const {state}=useLocation()

const navigate=useNavigate()
const {favourites,setfavourites }=useDataContext
const handleFavourite=(state)=>{
  setfavourites([...favourites,state])
  navigate("/favoriler")
}

  return (
    <div className="container detailContainer">

      <div className="jumbotron p-3 p-md-5  text-white rounded bg-dark" style={{backgroundImage:`url(${state.item.urlToImage}) `,height:"500px"   }} >
        
      </div>

      <div className="row mb-2 mt-2 ">
        <div className="col ">
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">{state.item.author} </strong>
              <h3 className="mb-0">
                <a className="text-dark"  >{state.item.title} </a>
              </h3>
              <div className="mb-1 text-muted">{state.item.publishedAt.slice(0,10)} </div>
              <p className="card-text mb-auto">{state.item.description}</p>
              <p className="card-text mb-auto">{state.item.content.slice(5,200)}</p>
            
              <div>
              <button
                  onClick={() => navigate("/")}
                 
                  className="btn btn-success ms-3 "
                >
                  Home
                </button>
                <button
                  onClick={()=>handleFavourite(state)}
                  
                  className="btn btn-success ms-3 "
                >
                  Add Favourite
                </button>
               
              <a href={state.item.url} target="blank" >News Source</a>
              </div>
            </div>
            
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default DetailPage