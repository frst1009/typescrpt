import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './actions';
import { Users } from './scripts';

interface RootState {
  supplierList: Users[];
  loading: boolean;
  error: string | null;
}

function Tables() {
  const supplierList = useSelector((state: RootState) => state.supplierList);
  const loading = useSelector((state: RootState) => state.loading);
  const error = useSelector((state: RootState) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
          {supplierList && supplierList.map((item: Users) => (
            <tr key={item.id}>
              <td>{item.company?.name}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address?.city}</td>
              <td>{item.address?.street}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Tables;
