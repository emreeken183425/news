import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const API_KEY = process.env.REACT_APP_TMDB_KEY;

const Home = () => {


  return (
    <>
    <div>
        <form className="search  " /*</div>onSubmit={handleSubmit}*/ >
        <input
          type="search"
          className="search-input  "
          placeholder="Search news..."
        //   onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="btn btn-success  ">Search</button>
      </form>      
    </div>
    {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card> */}
    <div className="card" >
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Açıklama</p>
  </div>
  <ul className="list-group list-group-flush">    
    <li className="list-group-item">tarih</li>
    <li className="list-group-item">kaynak </li>
  </ul>
  <div className="card-body">
   
  <button type="submit" className="btn btn-primary  ">Ayrıntılar</button>
  </div>
</div>
    
    </>
  )
}

export default Home
