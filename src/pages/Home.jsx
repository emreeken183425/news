import { useState } from "react";
import axios from "axios";


const Home = () => {
  //inputun içindeki değer için state oluşturduk  searchText
  const [searchText, setSearchText] = useState();
  const [newData, setNewData] = useState();
  const [readMore, setReadMore] = useState(false)
  const newsDataFromApi = async () => {
    const API_KEY = "f3bec0d572254c0c95fa46e72a065627";
    let url = `https://newsapi.org/v2/everything?
q=${searchText}&page=1&apiKey=${API_KEY}`;

    try {
      //   const response = await axios.get(url);
      const { data } = await axios.get(url);
      setNewData(data.articles);

      console.log(newData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newsDataFromApi();
    setSearchText("");
  };

  return (
    <>
      <div>
        <form className="search  " onSubmit={handleSubmit}>
          <input
            type="search"
            className="search-input  "
            placeholder="Search news..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit" className="btn btn-success  ">
            Search
          </button>
        </form>
      </div>

      <div className=" cardContainer row  justify-content-evenly align-items-center">
        {newData?.map((item, index) => {
          return (
            <div className="card col-sm-12 col-md-6 col-lg-4 p-3   " key={index}>
              <img src={item.urlToImage}  className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title} </h5>
                <p className="card-text">{readMore ?  item.description : item.description.slice(0,100)+ "..."}
                <button onClick={()=>setReadMore(!readMore) } >{readMore ? "show less" : "readmore" } </button>
                </p>
               
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{item.publishedAt.slice(0,10)} </li>
                <li className="list-group-item">{item.source.name}  </li>
              </ul>
              <div className="card-body">
                <button type="submit"   className="btn btn-primary  ">
                  Ayrıntılar
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
