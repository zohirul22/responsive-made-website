import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate('');


    const fromSubmitted = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    let shahin;

    if (error) {
        shahin = <p className='text-danger'>Error: {error.message}</p>


    }

    const handelSubmittedRegister = event => {
        navigate('/register')
    }

    const forgetPasword = async () => {
        const email = emailRef.current.value;
     if(email){
        await sendPasswordResetEmail(email);
        toast('Sent email');
     }
     else{
        toast('please Enter a Email')
     }
    }

    if (user) {
        navigate('/home')
    }


    return (
        <div className="w-50 mx-auto">
            <h1 className='text-center text-primary'> Please Login</h1>
            <Form onSubmit={fromSubmitted}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary mb-2 mx-auto d-block w-50" type="submit">
                    Login
                </Button>
                {shahin}
                <p>Visited Our website ?
                    <span onClick={handelSubmittedRegister}
                        className='btn-navigate text-danger'>Please Register</span></p>
                <p>Forgett Password?
                    <span onClick={forgetPasword}
                        className='btn-navigate text-danger'>Reset Password</span></p>
            </Form>

            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;