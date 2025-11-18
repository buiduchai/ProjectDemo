
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import TableUser from './TableUser';
import { useEffect, useState } from "react";
import { getAllUser } from '../../../services/apiServices'


const ManageUser = (props) => {
    const [modalshow, setModalshow] = useState(false)
    const [listUser, setListUsers] = useState('');

    useEffect(() => {
        fetData();
    }, []);

    const fetData = async () => {
        let res = await getAllUser()

        if (res.data && res.data.EC === 0) {
            console.log(res.data.DT);
            setListUsers(res.data.DT);
        }
    }

    return (
        <div className="manager-user-container">
            <div className="tittle">
                ManageUser
            </div>
            <div className="user-content">
                <div>
                    <button className='btn btn-primary' onClick={() => { setModalshow(true) }}><FcPlus></FcPlus>Add new user</button>
                </div>
                <div>
                    <TableUser listUser={listUser}></TableUser>
                </div>
                <ModalCreateUser show={modalshow} setShow={setModalshow} fetData={fetData}></ModalCreateUser>
            </div>

        </div>
    )
}
export default ManageUser;