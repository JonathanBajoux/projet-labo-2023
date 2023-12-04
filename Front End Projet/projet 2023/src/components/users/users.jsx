import { useEffect, useState } from "react";
import { GetAllWithSprites } from '../../api/api';

const User = () => {

    const [userList, setUserList] = useState([]);

    const getAllUsers = async () => {
        try {
            const result = await GetAllWithSprites();

            if (result) {
                setUserList(result);
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {

        if (userList.lenght === 0) {
            getAllUsers();
        }
    }, [userList]);

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