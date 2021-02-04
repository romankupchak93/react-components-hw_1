import React from 'react';

import User from './User';
import Address from "./Address";

const UserList = ({ users }) => {
    return (
      <div className="col-md-8">
          <h3 className="text-center mt-3">Task 2</h3>
          <div className="table-responsive">
           <table className="table">
               <thead className="table-light">
                  <tr>
                      <th>Name</th>
                      <th>Surname</th>
                      <th>Country</th>
                      <th>City</th>
                      <th>Street</th>
                      <th>Zip</th>
                  </tr>
              </thead>
              <tbody>
                  {users.map(item => (
                      <tr key={item.id.zip} className= {item.active ? 'table-light' : 'table-danger'}>
                        <User item={item}/>
                        <Address item={item}/>
                      </tr>
                  ))}
              </tbody>
          </table>
          </div>
      </div>
    );
}

export default UserList;
