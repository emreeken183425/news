import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.jpg";

const Home = () => {
  //inputun içindeki değer için state oluşturduk  searchText
  const [searchText, setSearchText] = useState();
  const [newData, setNewData] = useState();
  const [readMore, setReadMore] = useState(false);
  const [page, setPage] = useState(1)
  const [pageList, setPageList] = useState([])
 const [totalPage , setTotalPage ] = useState(1)
 const [pageSize, setPageSize] = useState(12)
const navigate=useNavigate()
  const newsDataFromApi = async () => {
    const API_KEY = "44e23dc79f324a2380981ce37f159336";
    let url = `https://newsapi.org/v2/everything?
q=${searchText}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;

    try {
      //   const response = await axios.get(url);
      const { data } = await axios.get(url);
      setNewData(data.articles);
      setTotalPage(data.totalResults)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newsDataFromApi();
    setSearchText("");
  };

// if(newData){
 
//   for(let i=1 ; i<= Math.ceil(totalPage/pageSize);i++ ){
//     setPageList([...pageList,i])
//   }
// }
// console.log(pageList);





  return (
    <>
      <div>
        <form className="search  " onSubmit={handleSubmit}>
          <input
            type="search"
            className="search-input w-75 mt-3 me-2 p-1 "
            placeholder="Search news..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit" className="btn btn-success  ">
            Search
          </button>
        </form>
      </div>

      <div className=" cardContainer row  mt-1 justify-content-evenly align-items-center">
        {!newData && (
          <div className="d-flex  justify-content-center mt-2">
            <img className="w-50 mw-75" src={img1} alt="" />
          </div>
        )}
        {newData?.map((item, index) => {
          const {
            urlToImage,
            title,
            description,
            publishedAt,
            source: { name },
            url,
          } = item;

       

          return (
            <div
              className="card col-sm-12 col-md-6 col-lg-4 p-3   "
              key={index}
            >
              <img src={urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title overflow-title ">{title} </h5>
                <p className="card-text">
                  {readMore ? description : description.slice(0, 70) + "..."}
                  <button onClick={() => setReadMore(!readMore)}>
                    {readMore ? "show less" : "readmore"}{" "}
                  </button>
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{publishedAt.slice(0, 10)} </li>
                <li className="list-group-item">{name} </li>
              </ul>
              <div className="card-body justify-content-center ">
                <button type="submit" onClick={()=> navigate(`/detail/${title}`,{state:{item}}  )} className="btn btn-primary  ">
                  Details
                </button>
              </div>
            </div>
          );
        })}
        {newData && (
          <div className="d-flex justify-content-center " >
          <nav aria-label="Page navigation example  " className="text-center  " >
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">
                  Previous
                </a>
              </li>
                 
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              {/* {
                 
                 Math.ceil(totalPage/pageSize)
                
                 
                 } */}
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
          </div>
        ) }
        
      </div>
    </>
  );
};

export default Home;
