import React, { useState, useEffect } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../Firebase/firebaseconfig";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [editedData, setEditedData] = useState({});

  // Function to fetch users data from Firestore
  const fetchUsers = async () => {
    try {
      const usersCollection = collection(db, "users");
      const snapshot = await getDocs(usersCollection);
      const usersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to handle update user data
  const handleUpdateUser = async (id) => {
    try {
      const userDocRef = doc(db, "users", id);
      await updateDoc(userDocRef, editedData);
      fetchUsers(); // Refresh users data after update
      setEditUserId(null); // Reset edit state
      setEditedData({});
    } catch (error) {
      console.error("Error updating user: ", error);
    }
  };

  // Function to handle edit button click
  const handleEditClick = (id, data) => {
    setEditUserId(id);
    setEditedData(data);
  };

  // Function to handle cancel edit button click
  const handleCancelEdit = () => {
    setEditUserId(null);
    setEditedData({});
  };

  return (
    <div className="section">
      <h2>User Table</h2>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                {editUserId === user.id ? (
                  <input
                    className="input"
                    type="text"
                    value={editedData.firstname || user.firstname}
                    onChange={(e) =>
                      setEditedData({
                        ...editedData,
                        firstname: e.target.value,
                      })
                    }
                  />
                ) : (
                  user.firstname
                )}
              </td>
              <td>
                {editUserId === user.id ? (
                  <input
                    className="input"
                    type="text"
                    value={editedData.lastname || user.lastname}
                    onChange={(e) =>
                      setEditedData({ ...editedData, lastname: e.target.value })
                    }
                  />
                ) : (
                  user.lastname
                )}
              </td>
              <td>
                {editUserId === user.id ? (
                  <input
                    className="input"
                    type="text"
                    value={editedData.email || user.email}
                    onChange={(e) =>
                      setEditedData({ ...editedData, email: e.target.value })
                    }
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editUserId === user.id ? (
                  <input
                    className="input"
                    type="number"
                    value={editedData.amount || user.amount}
                    onChange={(e) =>
                      setEditedData({
                        ...editedData,
                        amount: parseInt(e.target.value),
                      })
                    }
                  />
                ) : (
                  user.amount
                )}
              </td>
              <td>
                {editUserId === user.id ? (
                  <>
                    <button
                      className="button"
                      onClick={() => handleUpdateUser(user.id)}
                    >
                      Save
                    </button>
                    <button className="button" onClick={handleCancelEdit}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    className="button"
                    onClick={() => handleEditClick(user.id, user)}
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
