import axios from "axios";
import { getUserDetails } from "./actions/user";

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userData?.username}</div>

          {userData?.id}
        </div>
      </div>
    </div>
  );
}