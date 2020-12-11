import "./PrayerRequest.css";
import { useState } from "react";
import Axios from "axios";

function PrayerRequest() {
  const [prayerRequestTitle, setPrayerRequestTitle] = useState([]);
  const [prayerRequestBody, setNewPrayerRequestBody] = useState("");
  const [commentBody, setCommentBody] = useState("");

  const [PrayerRequest, setPrayerRequest] = useState([]);

  function addPrayerRequest() {
    const newRequest = { prayerRequestTitle, prayerRequestBody, commentBody };
    Axios.post("http://localhost:3000/prayerrequest/newrequest", newRequest, {
      withCredentials: true,
    });
    console.log("success");
  }

  const getPrayerRequest = () => {
    const newRequest = { prayerRequestTitle, prayerRequestBody, commentBody };
    Axios.get("http://localhost:3000/prayerrequest", newRequest, {
      withCredentials: true,
    }).then((response) => {
      console.log(response);
      setPrayerRequest(response.data.prayerrequest);
    });
  };

  const updatePrayerRequest = (id) => {
    const newRequest = { prayerRequestTitle, prayerRequestBody};
    Axios.get("http://localhost:3000/prayerrequest/update", newRequest, {
      withCredentials: true,
    }).then((response) => {
      alert("Updated PrayerRequest");
      setPrayerRequest(response.data.prayerrequest);
    });
  };

  // const updatePrayerRequest = (id) => {
  //   Axios.put("http://localhost:3000/update", {
  //     PrayerRequest: newPrayerRequest,
  //     id: id,
  //   }).then((response) => {
  //     alert("Updated PrayerRequest");
  //   });
  // };

  function DeletePrayerRequest(id) {
    Axios.delete(`http://localhost:3000/delete/${id}`);
  }

  return (
    <div className="App">
      <div className="information">
        <label> Prayer Request Title: </label>{" "}
        <input
          type="text"
          onChange={(Event) => {
            setPrayerRequestTitle(Event.target.value);
          }}
        />{" "}
        <label> Prayer Request: </label>{" "}
        <input
          type="text"
          onChange={(Event) => {
            setNewPrayerRequestBody(Event.target.value);
          }}
        />{" "}
        <label> Comments: </label>{" "}
        <input
          type="text"
          onChange={(Event) => {
            setCommentBody(Event.target.value);
          }}
        />{" "}
        <button onClick={addPrayerRequest}> Add PrayerRequest </button>{" "}
      </div>{" "}
      <div className="PrayerRequest">
        <button onClick={getPrayerRequest}> Show PrayerRequest </button>
        {PrayerRequest.map((val) => (
          // return(
          <div key={val.PrayerRequestId}>
            <h1>{val.PrayerRequestTitle}</h1>
            <h3>{val.PrayerRequestBody}</h3>
            <h4>{val.commentBody}</h4>
          </div>

          //    )
        )
        )}
        {PrayerRequest.map((val, key) => {
          return (
            <div className="PrayerRequest">
              <div>
              
                {" "}
                <input
                  type="text"
                  placeholder="PRAYER UPDATE"
                  onChange={(Event) => {
                    setPrayerRequestBody(Event.target.value);
                  }}
                />{" "}
                <button
                  onClick={() => {
                    updatePrayerRequest(val.id);
                  }}
                >
                  {" "}
                  Update PrayerRequest{" "}
                </button>
                <button
                  onClick={() => {
                    DeletePrayerRequest(val.id);
                  }}
                >
                  {" "}
                  DeletePrayerRequest{" "}
                </button>{" "}
              </div>{" "}
            </div>
          );
        })}{" "}
      </div>{" "}
    </div>
  );
}

export default PrayerRequest;
