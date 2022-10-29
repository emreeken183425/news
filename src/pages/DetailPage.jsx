import React from 'react'
import { useLocation } from 'react-router-dom'

const DetailPage = () => {

const {state}=useLocation()

console.log(state.item);
  return (
    <div className="container">

      <div className="jumbotron p-3 p-md-5  text-white rounded bg-dark" style={{backgroundImage:`url(${state.item.urlToImage}) `,height:"500px"  }} >
        
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
            

              <a href={state.item.url} target="blank" >Kaynağında görüntüle</a>
            </div>
            {/* <img className="card-img-right flex-auto d-none d-md-block"  style="width: 200px; height: 250px;" src={state.item.urlToImage}/> */}
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default DetailPage