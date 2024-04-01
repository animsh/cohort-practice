import pg from "pg";
const { Client } = pg;

const client = new Client("your-url");
await client.connect();

async function createUsersTable() {
  // await client.connect();
  const result = await client.query(`
      CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          username VARCHAR(50) UNIQUE NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
  console.log(result);
  // await client.end();
}

async function createAddresssTable() {
  // await client.connect();
  const result = await client.query(`
      CREATE TABLE addresses (
          id SERIAL PRIMARY KEY,
          user_id INTEGER NOT NULL,
          city VARCHAR(255) NOT NULL,
          state VARCHAR(255) NOT NULL,
          country VARCHAR(255) NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      );
    `);
  console.log(result);
  // await client.end();
}

async function insertUserData(
  username: string,
  email: string,
  password: string
) {
  try {
    // await client.connect();
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log("Insertion success:", res);
    return res.rowCount > 0 ? res.rows[0].id : 0;
  } catch (err) {
    console.error("Error during the insertion:", err);
  } finally {
    // await client.end();
  }
}

async function insertAddressData(
  city: string,
  state: string,
  country: string,
  user_id: number
) {
  try {
    // await client.connect();
    const insertQuery =
      "INSERT INTO addresses (city, state, country, user_id) VALUES ($1, $2, $3, $4)";
    const values: any[] = [city, state, country, user_id];
    const res = await client.query(insertQuery, values);
    console.log("Insertion success:", res);
  } catch (err) {
    console.error("Error during the insertion:", err);
  } finally {
    // await client.end();
  }
}

async function fetchData(email: string) {
  try {
    // await client.connect();
    const query = "SELECT * FROM users WHERE email = $1";
    const values = [email];
    const result = await client.query(query, values);

    if (result.rows.length > 0) {
      console.log("User found:", result.rows[0]);
      return result.rows[0];
    } else {
      console.log("No user found with the given email.");
      return null;
    }
  } catch (err) {
    console.error("Error during fetching user:", err);
    throw err;
  } finally {
    await client.end();
  }
}

async function fetchJoinData(id: number) {
  try {
    // await client.connect();
    const query =
      "SELECT u.username, u.email, a.city, a.state, a.country FROM users u JOIN addresses a ON u.id = a.user_id WHERE u.id = $1";
    const values = [id];
    const result = await client.query(query, values);

    if (result.rows.length > 0) {
      console.log("User found:", result.rows[0]);
      return result.rows[0];
    } else {
      console.log("No user found with the given email.");
      return null;
    }
  } catch (err) {
    console.error("Error during fetching user:", err);
    throw err;
  } finally {
    await client.end();
  }
}

// await createUsersTable();
// await createAddresssTable();
// let id = await insertUserData("userNameTest", "username@mail.com", "password");
// await insertAddressData("city", "state", "country", id);
// await fetchData("username@mail.com");
await fetchJoinData(1);
