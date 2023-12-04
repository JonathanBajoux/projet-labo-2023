import { useEffect, useState } from "react";
import { GetAllWithSprites } from '../../api/api';

const User = () => {

    const [userList, setUserList] = useState([]);

    const users = async () => {
        try {
            const result = await GetAllWithSprites();

            if (result) {
                console.log(result);
            }
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