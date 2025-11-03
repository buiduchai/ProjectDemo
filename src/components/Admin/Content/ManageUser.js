import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import TableUser from './TableUser';


const ManageUser = (props) => {
    const [modalshow, setModalshow] = useState(false)

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
                    <TableUser></TableUser>
                </div>
                <ModalCreateUser show={modalshow} setShow={setModalshow}></ModalCreateUser>
            </div>

        </div>
    )
}
export default ManageUser;