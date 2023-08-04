import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";


const SignIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('')
    // const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    // if (token) {
    //     navigate(from, { replace: true });
    // }

    
    const handleSignIn = (data) => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
                navigate('/')
            })
            .catch(error => setLoginError(error.message))
    }


    return (
        <div className='h-[500px] flex justify-center items-center mt-4 mb-10'>
            <div className='w-96 p-7 shadow-2xl bg-[#E1A2A1] rounded-lg'>
                <img src="" alt="" />
                {/* <img className="w-20 h-20 absolute left-[585px] top-32" src={eipLogo} alt="" /> */}
                <h2 className='text-2xl text-center font-bold text-white mt-10 mb-6'>Sign In</h2>
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <div className="form-control w-full max-w-xs">
                        <input {...register("name", {
                            required: 'Name is required',
                        })} className="input input-bordered w-full max-w-xs mb-4" type="text" placeholder="Name" />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input {...register("email", {
                            required: 'Email is required'
                        })} className="input input-bordered w-full max-w-xs mb-4" type="email" placeholder="Email" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input {...register("password", {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be 6 character long' },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase special character and number' }
                        })} className="input input-bordered w-full max-w-xs" type="password" placeholder="Password" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>
                    <input className='bg-[#ECACAB] hover:bg-[#f5b5b4] text-white w-full mt-4 py-2 rounded-lg' value="Sign In" type="submit" />
                    {loginError && <p className='text-red-600'> {signUpError}</p>}
                </form>
                <div>
                    <button className="bg-[#1D1D1D] hover:bg-[#050505] text-white w-full mt-4 py-2 rounded-lg">Sign In with Google</button>
                </div>
                <p className='mt-2 text-white'>Have not an account?<Link to='/signUp' className='text-black'> Please Sign Up</Link></p>
            </div>
        </div>
    );
};

export default SignIn;