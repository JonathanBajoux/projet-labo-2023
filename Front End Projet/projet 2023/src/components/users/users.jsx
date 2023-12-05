// import { useEffect, useState } from "react";
// import { GetAllWithSprites } from '../../api/api';

// const User = () => {

//     const [usersList, setUserList] = useState([]);

//     const user = async () => {
//         try {
//             const result = await GetAllWithSprites();

//             if (result) {
//                 console.log(result);
//             }
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     useEffect(() => {
//         usersList.lenght === 0 ? getAll() : null;
//     }, [usersList]);

//     return (
//         <section>
//             {usersList.map((user) => (
//                 <div key={user.id}>
//                     <p>{user.nom}</p>
//                     <p>{user.prenom}</p>
//                     <p>{user.role}</p>
//                 </div>

//             ))}
//         </section>
//     );
// };

// export default User;