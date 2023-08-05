import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Profile = () => {

    const { user } = useContext(AuthContext)

    console.log(user);

    return (
        <div className='text-center text-2xl my-20'>
            <h2></h2>
            {/* <h3>Email: {user.email}</h3> */}
        </div>
    );
};

export default Profile;