import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Moment from "react-moment";

export default function AllPrayerRequests() {
  const [prayerRequests, setPrayerRequests] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/prayerrequest/all").then((response) => {
      console.log(response.data);
      setPrayerRequests(response.data.prayerrequest);
    });
  }, []);

  return (
    <div>
        <br></br>
      <h3>All Prayer Requests</h3>
      <br></br>
      <CardColumns>
        {prayerRequests.map((val) => (
          <Card key={val.PrayerRequestId}>
            <Card.Body>
              <Card.Title>{val.PrayerRequestTitle}</Card.Title>
              <Card.Text>{val.PrayerRequestBody}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <Moment format="MMMM do yyyy, h:mm:ss a">
                  {val.createdAt}
                </Moment>
              </small>
            </Card.Footer>
          </Card>
        ))}
      </CardColumns>
    </div>
  );
}
