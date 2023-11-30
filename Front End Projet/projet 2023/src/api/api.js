import axios from 'axios'

export const GetAllWithSprites = async () => {

    try {
        const listResponse = await axios.get('http://localhost:3000/api/users');
        console.log(listResponse);
        const userList = listResponse.data;
        
        // const userData = userList.map(async (user) => {
        //     const userResponse = await axios.get(`http://localhost:3000/api/${user.nom}`);
        //     const id = userResponse.data.id;
        //     return {id: id, name:user.nom}
        // })
    } catch (error) {
        console.error(error);
        return []
    }
}