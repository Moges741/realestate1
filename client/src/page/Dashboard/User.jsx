
import './user.css'
import { useLoggedUser } from "../auth/useLoggedUser";
import { FadeLoader } from 'react-spinners';

import { useUpdateRole } from '../auth/useUpdateRole';

function User() {

    const { data,status } = useLoggedUser();
    const { updateRole} = useUpdateRole()
    console.log(data);
    function handleRoleChange( user) {
        console.log(user)
        if(user.role==='admin'){
            updateRole(user.id, 'user')
        }else{
            updateRole(user.id, 'admin')
        }
        
    }
  


  if(status==='pending') return <div className="loader"> <FadeLoader color='blue' />
 </div>

  return (
    <div>
      <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th className='number'>#</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Promote to /Demote </th>
                    </tr>
                </thead>
                <tbody>
                    {status==='pending' ? (
                        <tr>
                            <td colSpan="3">Loading...</td>
                        </tr>
                    ) : ( 
                        data?.map((user, index) => (
                            <tr key={user.id}>
                                <td className="number">{index + 1}</td>
                                <td>{user.display_name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <th><button onClick={()=>handleRoleChange(user)}>{user.role==='user'?"Promote to admin":"Demote to user"}</button></th>
                            </tr>
                        ))
                    )
                    }
                    
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default User;
