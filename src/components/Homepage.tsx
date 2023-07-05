import React, { useEffect, useState } from "react";
import { Database, Monarch, User } from "../db";

export function Homepage(props: { database: Database }) {
  const [monarchs, setMonarchs] = useState<Monarch[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Fetch monarchs and users data from the database
    const fetchMonarchs = async () => {
      const monarchsData = await props.database.getMonarchs();
      setMonarchs(monarchsData);
    };

    const fetchUsers = async () => {
      const usersData = await props.database.getUsers();
      setUsers(usersData);
    };

    fetchMonarchs();
    fetchUsers();
  }, [props.database]);

  return (
    <div>
      <h1>Monarchs:</h1>
      <ul>
        {monarchs.map((monarch) => (
          <li key={monarch.id}>{monarch.displayName}</li>
        ))}
      </ul>

      <h1>Users:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.displayName}</li>
        ))}
      </ul>
    </div>
  );
}
