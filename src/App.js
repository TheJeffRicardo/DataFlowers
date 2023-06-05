import { useState} from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [flowers , setFlowers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [idno, setIdNo] = useState("")
  const [flowername, setFlowername] = useState("")
  const [colour, setColour] = useState("")
  const [picture, setPicture] = useState("")
  const [descript, setDescript] = useState("")

  const addUser = async () => {
    await Axios.post(`https://sticky-stem.onrender.com/item`, {
      flowername: flowername,
      colour: colour,
      picture: picture,
      descript: descript
  })
  window.location.reload();
  }
  const getFlowers = async () => {
    await Axios.get("https://sticky-stem.onrender.com/items")
    .then((res) => {
      console.log(res.data.results)
      setIsLoading(false)
      setFlowers(res.data.results)
      setIdNo(res[0].id)
      setFlowername(res[0].flowername)
      setColour(res[0].colour)
      setPicture(res[0].picture)
      setDescript(res[0].descript)
    })
      .catch(err => {
        console.log(err.message)
      })
  }
  const updateFlower = async (id) => {
    let identity = flowers[id-1]
    console.warn(identity)
      setIdNo(identity.id)
      setFlowername(identity.flowername)
      setColour(identity.colour)
      setPicture(identity.picture)
      setDescript(identity.descript)
  }
  const update = async () => {
    await Axios.put(`https://sticky-stem.onrender.com/item/${idno}`, {
    flowername: flowername,
    colour: colour,
    picture: picture,
    descript: descript
  })
  window.location.reload();
  }
  const deleteFlower = async () => {
    await Axios.delete(`https://sticky-stem.onrender.com/item/${idno}`)
    .then((res) => {
      console.warn(res);
    })
    window.location.reload();
  }

  return (
    <div className="App">
      <div className="content"> 
        <div className='information'>
          <h1>Add Flower</h1>
          <div className='d-flex'>
          <div className='d-flex flex-column'>
          <label>Flower Name:</label>
        <input type="text" onChange={(e)=>{
            setFlowername(e.target.value)
          }} />
          </div>
          <div className='d-flex flex-column'>
          <label>Colour</label>
        <input type="text" onChange={(e)=>{
            setColour(e.target.value)
          }} />
          </div>
          </div>
         <div className='d-flex'>
         <div className='d-flex flex-column'>
         <label>Picture</label>
        <input type="text" onChange={(e)=>{
            setPicture(e.target.value)
          }} />
         </div>
          <div className='d-flex flex-column'>
          <label>Description</label>
        <input type="text" onChange={(e)=>{
            setDescript(e.target.value)
          }} />
          </div>
         </div>
          <button onClick={addUser}>Add Flowers</button>
        </div>
        <button className='users' onClick={getFlowers}>Show Flowers</button>
        {isLoading && <div className='mb-5'>Loading...</div>}
       
        {flowers.map((val, key1, key2, key3, key4, key5) => {
          return (
            <div className="container">
              <div className="product">
                <div className="img">
                  <img src={val.picture} key={key4} alt="PictureofFlowers" />
                </div>
                <div className="details">
                  <h3 key={key1}> {val.id} </h3>
                  <h1 key={key2}> {val.flowername} </h1>
                  <h2 key={key3}> {val.colour} </h2>
                  <h3 key={key5}> {val.descript} </h3>
                  <button className='button' onClick={()=> deleteFlower(val.id)}>Delete</button>
                  <button className='button' onClick={()=> updateFlower(val.id)}>Update</button>
                </div>
              </div>
            </div>
            )
        },
        )}
        <h1>Update Flower</h1>
        <div className='update'>
          <label>Flower Name:</label>
          <input type="text" value={flowername} onChange={(e)=>{
            setFlowername(e.target.value)
          }} />
          <label>Colour</label>
        <input type="text" value={colour} onChange={(e)=>{
            setColour(e.target.value)
          }} />
          <label>Picture</label>
        <input type="text" value={picture} onChange={(e)=>{
            setPicture(e.target.value)
          }} />
          <label>Description</label>
        <input type="text" value={descript} onChange={(e)=>{
            setDescript(e.target.value)
          }} />
        <button onClick={update}>Update Product</button>
        </div>
      </div>
    </div>
  );
}

export default App;
