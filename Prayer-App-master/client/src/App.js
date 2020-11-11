
import './App.css';
import { useState } from "react"; 
import Axios from "axios";


function App() {
  const [PrayerRequest, setPrayerRequest ] = useState("");
  const [Comments, setComments ] = useState("");

 
const addPrayerRequest = () => {
   Axios.post('http://localhost:3001/create',{PrayerRequest:PrayerRequest,Comments:Comments}).then(()=> {
     console.log("success");
   });
};

  return (
    <div className="App">
      <div className="information">
      <label>Prayer Request:</label>
      <input type="text" onChange={(Event) => {setPrayerRequest(Event.target.value);}}/>
      <label>Comments:</label>
      <input type="text"  onChange={(Event) => {setComments(Event.target.value);}}/>
      <button onClick={addPrayerRequest}>Add Prayer </button>
      </div>
    </div>
  );
  
}

export default App;
