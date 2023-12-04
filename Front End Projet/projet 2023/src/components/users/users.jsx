import { useEffect, useState } from "react";
import { GetAllWithSprites } from '../../api/api';

const User = () => {

    const [userList, setUsersList] = useState([]);

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
            {userList.map((user) => (
                <div key={user.id}>
                    <p>{user.nom}</p>
                    <p>{user.prenom}</p>
                    <p>{user.role}</p>
                </div>

            ))}
        </section>
    );
};

export default User;