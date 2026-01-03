import { useEffect, useState } from "react";
import { supabaseAdmin } from "../auth/supabase";
import './user.css'

function User() {
  const [loggedUser, setLoggedUser] = useState(null);
  useEffect(() => {
    async function getLoggedUser() {
      const { data } = await supabaseAdmin.auth.admin.listUsers();
      setLoggedUser(data.users);
    }
    getLoggedUser();
  }, []);

  const loggedUserEmailVerified = loggedUser?.filter(user => user.user_metadata.email_verified);
  console.log(loggedUserEmailVerified);

  return (
    <div>
      <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loggedUserEmailVerified?.map((user, index) => (
                            <tr key={user.id}>
                                <td className="number">{index + 1}</td>
                                <td>{user.user_metadata.fullName}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default User;
