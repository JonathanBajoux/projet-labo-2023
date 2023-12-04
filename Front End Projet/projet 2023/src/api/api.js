import axios from 'axios'

export const GetAllWithSprites = async () => {

    try {
        const listResponse = await axios.get('http://localhost:8080/api/users');
        console.log(listResponse);
        const userList = listResponse.data;
        
        const userData = userList.map(async (user) => {
            const userResponse = await axios.get(`http://localhost:8080/api/${user.lastname}`);
            const id = userResponse.data.id;
            return {id: id, name:user.name};
        })

        const users = await Promise.all(userData);
        return users;

    } catch (error) {
        console.error(error);
        return []
    }
}