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

const putUpdateUser = (id, username, role, userImage) => {

    const form = new FormData();
    form.append('id', id);
    form.append('username', username);
    form.append('role', role);
    form.append('userImage', userImage);

    return axios.put('api/v1/participant', form)

}

const getAllUser = () => {
    return axios.get('api/v1/participant/all')
}

export { postCreateUser, getAllUser, putUpdateUser }