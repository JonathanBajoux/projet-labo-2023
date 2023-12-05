// import axios from 'axios'

// export const GetAllWithSprites = async () => {

//     try {
//         const listResponse = await axios.get('http://localhost:8080/api/users');
//         const userList = listResponse.data.results;
        
//         const userData = userList.map(async (user) => {
//             const usersResponse = await axios.get(`http://localhost:8080/api/${user.lastname}`);
//             const id = usersResponse.data.id;
//             return {id: id, name:user.lastname};
//         })

//         const users = await Promise.all(userData);
//         return users;

//     } catch (error) {
//         console.error(error);
//         return []
//     }
// }