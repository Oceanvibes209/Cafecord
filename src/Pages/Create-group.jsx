import { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Styles from '../Styles/Create-group.module.css';
import Image from '../assets/beautiful-coffee-image.png';
import Stack from 'react-bootstrap/Stack';
import profileImage from '../assets/profile-image.png';
import { v4 as uuidv4 } from 'uuid';
import { TiDelete } from "react-icons/ti";
import { IoMdAdd } from "react-icons/io";

const CreateGroup = () => {
    const [formData, setFormData] = useState({
        groupName: "",
        description: "",
        members: [],
    });
    const handleChange = (e)=> {
       let {name, value} = e.target;
       setFormData(prevData => (
        {
            ...prevData,
        [name]: value
        } ))
    }
    const usernameRef = useRef(null);
    const groupNameRef = useRef(null);
    const descriptionRef =useRef(null);
    const addMemBtnRef = useRef(null);
    const addSubmitBtnRef = useRef(null);
    const handleAddMember = () => {
        const memberId = uuidv4();
            const username = usernameRef.current.value;
            if (!username) {
                return;
            }
            usernameRef.current.value = '';
            // search for username in the database and get member object with the same username as below:
            //  if username found
            const member = {
                id: memberId,
                username: username,
                firstName: 'abc',
                lastName: 'xyz',
                imageUrl: profileImage,
                messages: []
            };
            setFormData(prevData => (
                {
                    ...prevData,
                    members: [...prevData.members, member]
                }
            ))
            // else throw error, "User not found!".
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const result = /\S+/.test(e.currentTarget.name.value);
        if (!result) {
            e.stopPropagation();
            alert("Group name is required!");
            return;
        };
        const newGroup = {id: uuidv4(), ...formData};
        console.log(newGroup)
        // save new group in database then alert;
        alert(`Created a group with the name ${newGroup.groupName}!
         
         ${JSON.stringify(newGroup)};
        `);
    }
    const handleDeleteMember = (id) => {
        const updatedMembers = formData.members.filter(member => member.id !== id);
        setFormData(prevData => (
            {...prevData, 
                members: updatedMembers
            }
        ))
    }
    const renderMembers = () => {
        return formData.members.map((member) => (
            <div key={member.id}>
                <div className={Styles.profileImgContainer} onClick={() => handleDeleteMember(member.id)}>
                    <img className={Styles.profileImage} src={member.imageUrl} alt="profile image" width="65px" height="65px" />
                    <TiDelete className={Styles.deleteIcon} size={34} />
                </div>
                <div className="fw-bold">{member.username}</div>
            </div>
        ))
    }
    const checkKeyDown = (e) => {
        if (e.keyCode == 13 ) {
            e.preventDefault();
            if(e.target.name === 'groupName' && e.target.value) {
                descriptionRef.current.focus();
             } else if (e.target.name === "description"){
                 usernameRef.current.focus();
             } else if (e.target.name === 'username'){
                 addMemBtnRef.current.focus();
             } else if (e.target.id === 'add-member'){
                 handleAddMember();
                 addSubmitBtnRef.current.focus();
             } else if (e.target.id === 'new-group'){
                handleSubmit(e);
                return true;
             }
        } else {
            return true;
        }
       
    }
    const handleBlur = (e)=> {
        e.target.addClass("input-blur");
    }
    return (
        <Container fluid className={Styles.body}>
            <Row className={Styles.container + " m-0"}>
                <Col className={Styles.formContainer} sm={12} md={6} lg={6} >
                    <h2 className={Styles.heading}>Create a Group</h2>
                    <Form id="new-group" 
                          className={'d-md-flex flex-md-column justify-content-md-center mx-2' + ' ' + Styles.form} 
                          onSubmit={handleSubmit} 
                          onKeyDown={(e) => checkKeyDown(e)}
                        >
                        <Row className="mx-0">
                            <Col className="px-0">
                                <Form.Control
                                    className={Styles.inputEl}
                                    required
                                    type="text"
                                    placeholder="Group Name"
                                    name="groupName"
                                    value={formData.groupName}
                                    id={uuidv4() + "-groupName"}
                                    onChange = {handleChange}
                                    ref={groupNameRef}
                                    autoFocus={true}
                                    onBlur={handleBlur}
                                />
                            </Col>
                        </Row>
                        <Row className="mx-0">
                            <Col className="px-0">
                                <Form.Control
                                    className={Styles.inputEl}
                                    type="text"
                                    placeholder="Group Description"
                                    name="description"
                                    value={formData.description}
                                    id={uuidv4() + "-description"}
                                    onChange = {handleChange}
                                    ref={descriptionRef}

                                />
                            </Col>
                        </Row>
                        <Row className={Styles.usernameInput + " mx-0"}>
                            <Col className="px-0" xs={8}>
                                <Form.Control
                                    className={Styles.inputEl}
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    autoComplete='true'
                                    ref={usernameRef}
                                    id={uuidv4() + "-username"}
                                   
                                />
                            </Col>
                            <Col className={"px-0 ms-1 " }>
                                <Button ref={addMemBtnRef} id="add-member" variant="warning" onClick={handleAddMember}><IoMdAdd size={25}></IoMdAdd></Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card className={Styles.groupMembersContainer}>
                                    <Stack direction="horizontal" gap={3} className="w-100 d-flex">
                                        {renderMembers()}
                                    </Stack>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{ span: 10, offset: 1 }}>
                                <Button ref={addSubmitBtnRef}className="my-5" type="submit" variant='warning' id="new-group">Create Group</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col sm={12} md={{ span: 6, order: 'first' }} lg={{ span: 6, order: 'first' }} className={Styles.imageContainer + " px-0"}>
                    <img src={Image} alt="image showing varieties of coffee"></img>
                </Col>
            </Row>
        </Container>
    )
}
export default CreateGroup;

