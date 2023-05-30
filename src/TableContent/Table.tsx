import React, { useEffect, useState } from 'react';
import { Users } from './scripts';
import axios from 'axios';

function Tables() {
  const [supplierList, setSupplierList] = useState<Users[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setSupplierList(res.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
        <table>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Street</th>
              <th>Company Name</th>
            </tr>
          </thead>
          <tbody>
            {supplierList && supplierList.map((item: Users) => <tr key={item.id}>
                <td>{item.company?.name}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address?.city}</td>
                <td>{item.address?.street}</td>
              </tr>
            )}
          </tbody>
        </table>
    </>
  );
}

export default Tables;
