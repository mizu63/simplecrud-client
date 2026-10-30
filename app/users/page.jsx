
import React from 'react';
import UsersCard from '../../components/UsersCard';

const UserPage = async () => {
    const res = await fetch('http://localhost:5000/users');
    const users = await res.json();

    return (
        <div>
            <h1>Users page</h1>
           <div className='grid grid-cols-3 gap-3 max-w-7xl mx-auto'>
             {
                users.map((user) => (
                    <UsersCard key={user._id} user={user} />
                ))
            }
           </div>
        </div>
    );
};

export default UserPage;
