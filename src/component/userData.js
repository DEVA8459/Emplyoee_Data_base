import { useEffect, useState } from "react";

export const UserData = () => {
  const [user, setUser] = useState([]);
  const [serachterm, setSreachTerm] = useState("");
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      console.log(data);
      setUser(data);
      setFilterData(data);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const serachFilter = user.filter(
      (y) =>
        y.name.toLowerCase().includes(serachterm.toLowerCase()) ||
        y.id.toString().includes(serachterm) ||
        y.username.toLowerCase().includes(serachterm.toLowerCase()) ||
        y.email.toLowerCase().includes(serachterm.toLowerCase())
    );
    setFilterData(serachFilter);
  }, [serachterm, user]);

  return (
    <div>
      <input
        type="text"
        plceholder="search user"
        value={serachterm}
        onChange={(e) => setSreachTerm(e.target.value)}
      />
      <h1>User DataBase</h1>
      <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {filterData.map((x) => {
            return (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.username}</td>
                <td>{x.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
