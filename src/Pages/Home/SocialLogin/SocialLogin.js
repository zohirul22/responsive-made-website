import React from 'react';
import google from '../../../../src/img/google1 (1).png'
import github from '../../../../src/img/GitHub-Mark (1).png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Navigate, useNavigate } from 'react-router-dom';



const SocialLogin = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let shahin;

    if (googleError || githubError ) {
        shahin = <p>Error: {googleError?.message} {githubError.message}</p>
    
    }

    if(googleUser || githubUser ){
        navigate('/home')
    }

    return (
        <div>
            {/* or setup */}
            <div className="d-flex align-items-center">
                <div style={{ height: "1px" }} className="bg-dark w-50"></div>
                <p className='px-2 mt-1'>Or</p>
                <div style={{ height: "1px" }} className="bg-dark w-50"></div>
            </div>
            {shahin}
            {/* or setup */}

            {/*google button */}
            <button

                onClick={() => signInWithGoogle()}
                type="button" class="btn btn-outline-primary  d-block mx-auto w-50 mb-2">
                <img src={google} alt="" />
                <span> Sign In With Google</span>
            </button>
            {/*google button */}

            {/* gitub button */}
            <button

                onClick={()=>signInWithGithub()}

                type="button" class="btn btn-outline-primary  d-block mx-auto w-50 mb-2">
                <img src={github} alt="" />
                <span> Sign In With Github</span>
            </button>
            {/* gitub button */}
        </div>
    );
};

export default SocialLogin;