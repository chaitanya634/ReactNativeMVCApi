import UserModel from '../Models/UserModel'

async function UserService(): Promise<Array<UserModel>> {
    const response = await fetch("https://reqres.in/api/users?page=2")
    const responseJson = await response.json()
    const data: Array<any> = responseJson.data
    const users = data.map(e => new UserModel(e.id, e.email, e.first_name, e.last_name, e.avatar))
    return users
}

export default UserService