import axios from '../utils/axiosCustomise'

const postCreateUser = (email, password, username, role, userImage) => {

    const form = new FormData();
    form.append('email', email);
    form.append('password', password);
    form.append('username', username);
    form.append('role', role);
    form.append('userImage', userImage);

    return axios.post('api/v1/participant', form)

}
export { postCreateUser }