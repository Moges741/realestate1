import { NavLink } from "react-router"
import './profilenav.css'

function ProfileNav() {
    return (
        <div className="nav-links">
            {/* how can know link active or not */}
            <NavLink end to="/profile" className={({isActive})=>isActive?'active':''}>
                Profile
            </NavLink>
            <NavLink to="update" className={({isActive})=>isActive?'active':''}>
                Update Profile
            </NavLink>
        </div>
    )
}

export default ProfileNav
