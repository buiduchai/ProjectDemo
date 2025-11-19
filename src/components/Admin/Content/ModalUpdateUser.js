import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";
import axios from 'axios';
import { toast } from 'react-toastify';
import { postCreateUser, putUpdateUser } from '../../../services/apiServices'
import _ from 'lodash';

const ModalUpdateUser = (props) => {
    const { show, setShow, dataUpdate } = props;

    // const [show, setShow] = useState(false);

    const handleClose = () => {
        setid('');
        setEmail('');
        setPassword('');
        setUsername('');
        setRole('');
        setImage('');
        setPreviewimage("");
        setShow(false);
        props.handleSetDataupdate();
    }
    const handleShow = () => setShow(true);

    const [id, setid] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("");
    const [image, setImage] = useState("");
    const [previewimage, setPreviewimage] = useState("");

    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            setEmail(dataUpdate.email)
            setUsername(dataUpdate.username)
            setRole(dataUpdate.role)
            setid(dataUpdate.id)
            if (dataUpdate.image) {
                setPreviewimage(`data:image/jpeg;base64,${dataUpdate.image}`)
            }
        }
    }, [dataUpdate]);

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewimage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0])
        } else {
            setPreviewimage("");
        }

    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmitUpdateUser = async () => {
        //valid data

        if (!username) {
            toast.error('username not null')
            return;
        }

        if (!role) {
            toast.error('role not null')
            return;
        }

        //submit data

        let res = await putUpdateUser(id, username, role, image)
        if (res.data && res.data.EC === 0) {
            toast.success(res.data.EM);
            handleClose();
            await props.fetData();
        }
        if (res.data && res.data.EC !== 0) {
            toast.error(res.data.EM);
        }

    }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className='modal-create-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add a user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} disabled
                                onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} disabled
                                onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" value={username}
                                onChange={(event) => setUsername(event.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select" value={role}
                                onChange={(event) => setRole(event.target.value)} >
                                <option ></option>
                                <option value='USER'>User</option>
                                <option value='ADMIN'>Admin</option>
                            </select>
                        </div>
                        <div className='col-md-12'>

                            <label className="label-upload" htmlFor='labelUpload'>
                                <FcPlus />
                                Upload File Image
                            </label>
                            <input type='file' hidden id='labelUpload'
                                onChange={(event) => handleUploadImage(event)} ></input>
                        </div>
                        <div className='img-preview'>
                            {/* <span>Preview Image</span> */}
                            {previewimage ? <img src={previewimage}></img> :
                                <span>Preview Image</span>}
                            {/* <img src='https://bit.ly/4oLyG7C'></img> */}
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitUpdateUser()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateUser;