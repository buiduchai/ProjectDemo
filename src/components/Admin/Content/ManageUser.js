
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import TableUser from './TableUser';
import { useEffect, useState } from "react";
import { getAllUser } from '../../../services/apiServices'
import ModalUpdateUser from './ModalUpdateUser';


const ManageUser = (props) => {
    const [modalshow, setModalshow] = useState(false);
    const [modalupdate, setModalupdate] = useState(false);
    const [listUser, setListUsers] = useState('');
    const [dataUpdate, setDataupdate] = useState({});

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

    const handleSetDataupdate = () => {
        setDataupdate();
    }

    const handleClickUpdate = (userItem) => {
        setModalupdate(true);
        setDataupdate(userItem)
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
                    <TableUser listUser={listUser} handleClickUpdate={handleClickUpdate}></TableUser>
                </div>
                <ModalCreateUser show={modalshow} setShow={setModalshow} fetData={fetData}></ModalCreateUser>
                <ModalUpdateUser show={modalupdate} setShow={setModalupdate} dataUpdate={dataUpdate} fetData={fetData} handleSetDataupdate={handleSetDataupdate}></ModalUpdateUser>
            </div>

        </div>
    )
}
export default ManageUser;