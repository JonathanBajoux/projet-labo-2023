import { useEffect, useState } from "react";
import { GetAllWithSprites } from '../../api/api';

const User = () => {

    const [usersList, setUsersList] = useState([]);

    const getAll = async () => {
        try {
            const userData = await GetAllWithSprites();
            setUsersList(userData);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        usersList.lenght === 0 ? getAll() : null;
    }, [usersList]);

    return (
        <section>
            {usersList.map((user) => (
                <div key={user.id}>
                    <p>{user.firstname}</p>
                    <p>{user.lastname}</p>
                    <p>{user.gender}</p>
                </div>

            ))}
        </section>
    );
};

export default User;