import { useState , useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [preview, setPreview] = useState();

  useEffect(() => {
      axios
      .get(`https://pokeapi.co/api/v2/berry`)
      .then(function (response) {
        // console.log(response.data.results);
        let respons = response.data.results;

        // sort
        respons.sort((a,b) => {
          if(a.name < b.name )  { 
            return -1 } 
          else if (a.name > b.name) { 
            return 1
            }
          return 0
        })
        
        setData(respons)
      });
  }, []);

  const handleChange =(e) => { 
    console.log(e.target.value)
    setPreview(e.target.value)
  }

  const handleChange2 = (e) => {
    setPreview(e.target.value)
  }


  return (
    <div className='app'>
      <h3 className='my-5'> Choose Item</h3>

      <div className="input-group mb-3 w-50 mx-auto">
        <input type="search"  className='form-control w-50' onChange={handleChange2} />

     
        <select  className="form-select w-25  mx-auto" onChange={(e)=>handleChange(e)}>

          <option value=""> -- select -- </option>
          {data.map((item, i) => {
          return (
            <option value={item.name}  key={i} >
              {item.name}
              
            </option>
          )
        })}
          
        </select>

      </div>


      

      <p className='fw-bold'> {preview}</p>
     


    </div>
  )
}

export default App
