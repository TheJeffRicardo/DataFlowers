import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [flowers , setFlowers] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://sticky-stem.onrender.com/items')
      .then(res =>
         res.json()
  )
      .then(data => {
        console.log(data.results)
        setFlowers(data.results)
        setIsLoading(false)
      }
      )
      .catch(err => {
        console.log(err.message);
      })
  }, [])
  
  // function App(){
  //   const [user_name, setName] = userState("")
  //   const [email, setEmail] = userState("")
  //   const [user_password, setPassword] = userState("")
    
  //   const addUser = () => {
  //     Axios.post('https://sticky-stem.onrender.com/register'), {
  //       user_name: user_name,
  //       email: email,
  //       user_password: usr_password,
  //     }
  //   }
  // }
  return (
    <div className="App">
      <div className="content"> 
        {isLoading && <div>Loading...</div>}
        <h1>{flowers.user_name}</h1>
      </div>
    </div>
  );
}

export default App;
