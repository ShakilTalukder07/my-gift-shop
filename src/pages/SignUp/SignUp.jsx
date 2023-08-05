import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";


const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("")
    const { createUser, updateUser, googleLogin } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('');
    const [createUserEmail, setCreateUserEmail] = useState('')
    // const [token] = useToken(createUserEmail);
    const location = useLocation();
    const navigate = useNavigate()

    // if (token) {
    //     navigate('/')
    // }

    const from = location.state?.from?.pathname || '/'

    const handleSignUp = data => {
        console.log(data);
        setSignUpError('');
        createUser(data.name, data.email, data.password, data.role)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role)
                        navigate('/')
                    })
                    .catch(error => console.error(error))
            })
            .catch(error => setSignUpError(error))
    }

    return (
        <div className='h-[550px] flex justify-center items-center mt-4 mb-10'>
            <div className='w-96 p-7 shadow-2xl bg-[#E1A2A1] rounded-lg'>
                <h2 className='text-2xl text-center font-bold text-white mt-10 mb-6'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <input {...register("name", {
                            required: 'Name is required',
                        })} className="input input-bordered w-full max-w-xs mb-4" type="text" placeholder="Name" />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                    <select className="select select-bordered w-full max-w-xs mb-4"
                        {...register('role', { required: 'role is required' })}
                    >
                        <option value='buyer' >Buyer</option>
                        <option value='seller'>Seller</option>
                    </select>
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
                    <input className='btn bg-[#ECACAB] hover:bg-[#f5b5b4] text-white w-full mt-4 py-2 rounded-lg' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'> {signUpError}</p>}
                </form>
                <div>
                    <button className="btn bg-[#1D1D1D] hover:bg-[#050505] text-white w-full mt-4 py-2 rounded-lg">Sign In with Google</button>
                </div>
                <p className='mt-2 text-white'>Already have an account?<Link to='/signIn' className='text-black'> Please Sign In</Link></p>
            </div>
        </div>
    );
};

export default SignUp;