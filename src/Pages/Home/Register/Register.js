import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth  , {sendEmailVerification:true});

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();


    const handelSubmittedLogin = () => {
        navigate('/login')
    }

    if (user) {
        console.log( 'user' ,user)
    }

    const handelSubmittedRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const terms = event.target.text.checked;
        await createUserWithEmailAndPassword(email, password)

        await updateProfile({ displayName:name });
        console.log('Updated profile');
        navigate('/home')


    }



    return (
        <div className='mx-auto w-50'>
            <h1 className='text-center text-primary'>Register</h1>
            <Form onSubmit={handelSubmittedRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="text" name='name' placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={() => setAgree(!agree)}
                        className={agree ? 'text-primary' : 'text-danger'}
                        type="checkbox" name='text' label="Terms And Conditions" />
                </Form.Group>

                <Button
                    disabled={!agree}
                    variant="primary mx-auto w-50 d-block" type="submit">
                    Register
                </Button>

                <p>Already account ?
                    <span onClick={handelSubmittedLogin}
                        className='btn-navigate text-danger'>Please Login</span></p>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;