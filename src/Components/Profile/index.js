import './index.css'

const Profile = (props) => {
    const { userDetails } = props;
    const { name, role, imageUrl } = userDetails;
    return (
        <li className="profile-card-container">
            <img src={imageUrl} className="profile-pic" alt="profile"/>
            <div>
            <h2 className="profile-name">{name}</h2>
            <h3 className="profile-role">{role}</h3>
            </div>
        </li>
    )
}

export default Profile