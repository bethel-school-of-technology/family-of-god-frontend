import "./PrayerRequest.css";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function PrayerRequest() {
  const [prayerRequestTitle, setPrayerRequestTitle] = useState([]);
  const [prayerRequestBody, setPrayerRequestBody] = useState("");
  const [commentBody, setCommentBody] = useState("");

  const [PrayerRequest, setPrayerRequest] = useState([]);

  function addPrayerRequest() {
    const newRequest = { prayerRequestTitle, prayerRequestBody, commentBody };
    Axios.post(
      "http://localhost:3000/prayerrequest/newrequest",
      newRequest,
      {
        headers: {
          authorization: localStorage.getItem("prayertoken"),
        },
      },
      {
        withCredentials: true,
      }
    );
    console.log("success");
  }

  const getPrayerRequest = () => {
    Axios.get(
      "http://localhost:3000/prayerrequest",
      {
        headers: {
          authorization: localStorage.getItem("prayertoken"),
        },
      },
      {
        withCredentials: true,
      }
    ).then((response) => {
      console.log("DATA: " + response);
      setPrayerRequest(response.data.prayerrequest);
    });
  };

  // const updatePrayerRequest = (id) => {
  //   const updatedRequest = { prayerRequestTitle, prayerRequestBody};
  //   Axios.get(`http://localhost:3000/prayerrequest/update/${id}`, updatedRequest, {
  //     withCredentials: true,
  //   }).then((response) => {
  //     console.log(response);
  //     alert("Updated PrayerRequest");
  //     setPrayerRequest(response.data.prayerrequest);
  //   });
  // };

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
      <div className="AddPrayerRequest">
        <h3>Add a new prayer request</h3>
        <Form onSubmit={addPrayerRequest}>
          <Form.Group size="lg" controlId="prayerRequestTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={prayerRequestTitle}
              onChange={(e) => setPrayerRequestTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="prayerRequestBody">
            <Form.Label>Your prayer request</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={prayerRequestBody}
              onChange={(e) => setPrayerRequestBody(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="commentBody">
            <Form.Label>Comments</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={commentBody}
              onChange={(e) => setCommentBody(e.target.value)}
            />
          </Form.Group>

          <Button block size="lg" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      {/* <div className="information">
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
      </div>{" "} */}
      <hr></hr>
      <div className="PrayerRequest">
        <button onClick={getPrayerRequest}> Show PrayerRequest </button>
        <br></br>
        {/* {PrayerRequest.map((val) => (
          // return(
          <div key={val.PrayerRequestId}>
            <h1>{val.PrayerRequestTitle}</h1>
            <h3>{val.PrayerRequestBody}</h3>
            <h4>{val.commentBody}</h4>
            <Link to={"/prayerrequest/details/" + val.PrayerRequestId}>
              view
            </Link>
          </div>
        ))}{" "} */}
        <Table striped bordered hover variant="dark" className="requestTable">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Prayer Request</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
              {PrayerRequest.map((val) => (
                <tr key={val.PrayerRequestId}>
                  <td>{val.PrayerRequestId}</td>
                  <td>{val.PrayerRequestTitle}</td>
                  <td>{val.PrayerRequestBody}</td>
                  <td>
                  <Link to={"/prayerrequest/details/" + val.PrayerRequestId}>
                    view
                  </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>{" "}
    </div>
  );
}

export default PrayerRequest;
