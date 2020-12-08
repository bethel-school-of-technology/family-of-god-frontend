
import './App.css';
import { useState } from "react";
import Axios from "axios";


function App() {

  const [Comments, setComments] = useState("");

  const [PrayerRequest, setPrayerRequest] = useState([]);

  const [newPrayerRequest, setNewPrayerRequest] = useState("");


  function addPrayerRequest() {
    Axios.post('http://localhost:3000/create', { PrayerRequest: PrayerRequest, Comments: Comments }).then(() => {
      console.log("success");
    });
  }

  const getPrayerRequest = () => {
    Axios.get('http://localhost:3000/prayer').then((response) => {
      setPrayerRequest(response.data);
    });
  }

  const updatePrayerRequest = (id) => {
    Axios.put('http://localhost:3000/update', { PrayerRequest: newPrayerRequest, id: id }).then(
      (response) => {
        alert("Updated PrayerRequest")
      }
    );
  };
  function DeletePrayerRequest(id) {
    Axios.delete(`http://localhost:3000/delete/${id}`);
  }




  return (
    <div className="App">
      <div className="information">
        <label>Prayer Request:</label>
        <input type="text" onChange={(Event) => { setPrayerRequest(Event.target.value); }} />
        <label>Comments:</label>
        <input type="text" onChange={(Event) => { setComments(Event.target.value); }} />
        <button onClick={addPrayerRequest}>Add PrayerRequest </button>
        <br></br>
      </div>
      <div className="PrayerRequest">
        <button onClick={getPrayerRequest}>Show PrayerRequest</button>

        {PrayerRequest.map((val, key) => {
          return (
            <div className="PrayerRequest">

              <div><input
                type="text"
                placeholder="PRAYER UPDATE"
                onChange={(Event) => {
                  setNewPrayerRequest(Event.target.value);
                }}
              />
                <button onClick={() => { updatePrayerRequest(val.id); }} >{" "}Update PrayerRequest</button>

                <button onClick={() => { DeletePrayerRequest(val.id) }}>DeletePrayerRequest</button>
              </div>
            </div>


          );
        })}
      </div>
    </div>
  );

}

export default App;
