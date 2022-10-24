import React, { useState, useEffect } from 'react';
const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const usersPerPage = 6;
  const currIndex = (page - 1) * usersPerPage;
  const spliceUsers = users.slice(currIndex, usersPerPage * page);
  const totalPages = Math.ceil(users.length / usersPerPage);
  const buttons = Array.from(Array(totalPages), (_, i) => i + 1);
  const url = 'https://randomuser.me/api/?results=50';
  const fetchUsers = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data.results);
    setLoading(false);
  };
  useEffect(() => {
    fetchUsers(url);
  }, []);
  if (loading) return <h1>loading.....</h1>;
  return (
    <>
      <div className="users_wrapper">
        {spliceUsers.map((item) => {
          const {
            name: { first, last },
          } = item;
          return (
            <div className="users_card">
              <div className="users_image">
                <img src={item.picture.large} alt="" />
              </div>
              <div className="users_details">
                <p>
                  {first} {last}
                </p>
                <p>{item.login.username}</p>
                <p>age: {item.dob.age}</p>
                <p>phone: {item.phone}</p>
              </div>
            </div>
          );
        })}
        <div className="pagination_container">
          <div>
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>
              Prev
            </button>
          </div>
          <div className="btn_wrapper">
            {buttons.map((item, idx) => (
              <button
                className={`pageBtns ${page === item && 'active'}`}
                key={idx}
                onClick={() => setPage(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div>
            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default UsersPage;