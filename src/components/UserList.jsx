import { useEffect, useState, useCallback } from "react";
import _ from "lodash"; 

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [usersHashMap, setUsersHashMap] = useState({});


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);

        
        const hashMap = data.reduce((acc, user) => {
          acc[user.name.toLowerCase()] = user;
          acc[user.email.toLowerCase()] = user;
          acc[user.address.city.toLowerCase()] = user;
          return acc;
        }, {});

        setUsersHashMap(hashMap);
        setFilteredUsers(data); 
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Debounced search function
  const handleSearch = useCallback(
    _.debounce((query) => {
      query = query.toLowerCase(); 
      if (!query) {
        setFilteredUsers(users); 
        return;
      }

      
      const results = users.filter((user) => 
        user.name.toLowerCase().includes(query) || 
        user.email.toLowerCase().includes(query) || 
        user.address.city.toLowerCase().includes(query)
      );

      setFilteredUsers(results);
    }, 300), 
    [users] 
  );

  // Handle input change
  const onSearchChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    handleSearch(query); 
  };

  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <h2>Our Users</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search users by name, email, or city..."
        value={searchTerm}
        onChange={onSearchChange}
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "100%",
          borderRadius: "5px",
        }}
      />

      {/* Display Filtered Users */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>City: {user.address.city}</p>
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </section>
  );
};

export default UsersList;
