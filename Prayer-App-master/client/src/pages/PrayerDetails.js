import { useState, useEffect } from "react";
import Axios from "axios";
import "./PrayerDetails.css";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function PrayerDetails() {
  const params = useParams();

  const [prayerRequestBody, setPrayerRequestBody] = useState("");
  const [prayerRequest, setPrayerRequest] = useState({});

  useEffect(() => {
    Axios.get(
      "http://localhost:3000/prayerrequest/details/" + params.id,
      {
        headers: {
          authorization: localStorage.getItem("prayertoken"),
        },
      },
      {
        withCredentials: true,
      }
    ).then((response) => {
      console.log(response.data);
      setPrayerRequest(response.data.prayerrequest);
      setPrayerRequestBody(prayerRequest.PrayerRequestBody);
    });
  }, []);

  function updatePrayerRequest() {
    const newRequest = {
      PrayerRequestTitle: prayerRequest.PrayerRequestTitle,
      PrayerRequestBody: prayerRequestBody,
      CommentBody: prayerRequest.CommentBody,
    };
    Axios.put(
      "http://localhost:3000/prayerrequest/update/" + params.id,
      newRequest,
      {
        headers: {
          authorization: localStorage.getItem("prayertoken"),
        },
      },
      {
        withCredentials: true,
      }
    ).then((result) => {
      console.log(result);
    });
    console.log("success");
  }

  return (
    // <div>
    //     <h1>{prayerRequest.PrayerRequestTitle}</h1>
    //   <input
    //     type="text"
    //     placeholder={prayerRequest.PrayerRequestBody}
    //     onChange={(Event) => {
    //       setPrayerRequestBody(Event.target.value);
    //     }}
    //   />
    //   <button
    //     onClick={() => {
    //       updatePrayerRequest();
    //     }}
    //   >
    //     Update PrayerRequest
    //   </button>
    // </div>
    <div>
        <br></br>
    <h2>Edit your prayer request</h2>
    <div className="details">
    <div className="info">
      <h3>{prayerRequest.PrayerRequestTitle}</h3>
      <h3>{prayerRequest.CommentBody}</h3>
    </div>
      <Form>
        <Form.Group size="lg" controlId="username">
          {/* <Form.Label>Prayer Request</Form.Label> */}
          <Form.Control
            autoFocus
            type="text" placeholder={prayerRequest.PrayerRequestBody}
            value={prayerRequestBody}
            onChange={(e) => setPrayerRequestBody(e.target.value)}
          />
        </Form.Group>

        <Button block size="lg" type="button" onClick={updatePrayerRequest}>
          Update
        </Button>
      </Form>
    </div>
    </div>
  );
}

export default PrayerDetails;
