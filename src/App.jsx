import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'
import './css/tokens.css';
import './css/global.css';
import Header from './Header';



const url = 'https://jsonplaceholder.typicode.com/albums/1/'

const api = axios.create({
  baseURL: url
})


const App = () => {

  //data u are getting is an array of objects
  const [data, setData] = useState([{}])

  useEffect(() => {
    getData()

  }, [])

  function getData() {
    api.get('/photos').then(response => {
      console.log(response.data);
      setData(response.data);
    })

    .catch(error =>{console.log(error)})
}






  return (
    <>


<Header><h1>Album Data</h1></Header> 


<main>
{data.map(
    photos => {
      return (
        <>

       
 <Card>

        <article className="card">
            <div className="card_image-holder">
            <img src={photos.thumbnailUrl} alt="poster" />
            </div>
            <div className="card-body">
              <h3 className="card-title">{photos.title}</h3>
              <div className="card-description">Album ID: {photos.albumId}</div>
            </div>
          </article>
          </Card>


        </>
    )
      }
)
}

</main>




    </>
  )
}

export default App