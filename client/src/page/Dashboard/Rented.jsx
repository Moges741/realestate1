
import './user.css'
// import { useLoggedUser } from "../auth/useLoggedUser";
import { FadeLoader } from 'react-spinners';
import { useRentedProperties } from '../auth/useRentedProperties';

function User() {

    const { data,status } = useRentedProperties();
    console.log(data);
  


  if(status==='pending') return <div className="loader"> <FadeLoader color='blue' />
 </div>

  return (
    <div>
        <h1>Rented Properties Data comes from Supabase</h1>
      <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Phone</th>
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
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.price}</td>
                                <td>{user.phone}</td>
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
