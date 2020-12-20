import React from "react";
import Table from "react-bootstrap/Table";
import "./style.css";

function SearchResults(props) {
  console.log("fuck")
  console.log(props.allUsers);
  return (
    
		<div className="table-body">
			{props.children}
			<Table striped bordered hover>
				<thead>
					{/* make these into links */}
					<tr>
          <th>Photo</th>
						<th>Full Name</th>
						<th>Location</th>
						<th>Email</th>
						<th>Age</th>
						
					</tr>
				</thead>
				<tbody>
					{/* for each thing render a row with modified info */}
					{props.allUsers.map((person) => (
						<tr>
              <td>
                  <img src={person.picture.medium}/>
                </td>
							<td>{person.name.first} {person.name.last}</td>
							<td>{person.location.city}, {person.location.state}</td>
							<td>{person.email}</td>
							<td>{person.dob.age}</td>
							
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
}

export default SearchResults;
