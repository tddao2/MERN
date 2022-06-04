import { useState, useEffect } from 'react';

import {
    FormGroup,
    FormControl,
    InputLabel,
    Input,
    Typography,
    styled,
    Button,
} from '@mui/material';

import { editUser, getUser } from '../service/api';

import { useNavigate, useParams } from 'react-router-dom';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px;
    }
`;

const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: '',
};

const EditUser = () => {
    const [user, setUser] = useState(defaultValue);

    const nagigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        const loadUserDetails = async () => {
            const res = await getUser(id);
            setUser(res.data);
        };
        loadUserDetails();
    }, [id]);

    //Line 41:8:  React Hook useEffect has a missing dependency: 'loadUserDetails'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
    // Solution: https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies

    // const loadUserDetails = async () => {
    //     const res = await getUser(id);
    //     setUser(res.data);
    // };

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const editUserDetails = async () => {
        await editUser(user, id);
        nagigate('/all');
    };
    return (
        <Container>
            <Typography variant="h4">Add user</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input
                    onChange={(e) => onValueChange(e)}
                    name="name"
                    value={user.name}
                />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input
                    onChange={(e) => onValueChange(e)}
                    name="username"
                    value={user.username}
                />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input
                    onChange={(e) => onValueChange(e)}
                    name="email"
                    value={user.email}
                />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input
                    onChange={(e) => onValueChange(e)}
                    name="phone"
                    value={user.phone}
                />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => editUserDetails()}>
                    Edit User
                </Button>
            </FormControl>
        </Container>
    );
};

export default EditUser;
