import React from "react";
import { Link } from "react-router-dom";
const History = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <div className="container my-5 d-flex justify-content-between">
        <h3>Watch History</h3> 
        <Link to={"./home"}>Back to home</Link>
      </div>
      <table className='table my-5 shadow'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Time Stamp</th>
            <th><i className="fa-solid fa-ellipsis-vertical"></i></th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  );
};
export default History;
