
import './user.css'
import { useLoggedUser } from "../auth/useLoggedUser";
import { FadeLoader } from 'react-spinners';

function User() {

    const { data,status } = useLoggedUser();
    console.log(data);
  


  if(status==='pending') return <div className="loader"> <FadeLoader color='blue' />
 </div>

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
