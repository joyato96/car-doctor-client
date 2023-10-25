import { Link } from "react-router-dom";
import img from '../../../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {


    const {createUser} = useContext(AuthContext)


    const handleSignUp = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className='text-3xl text-center font-medium'>Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Name</span>
                            </label>
                            <input type="email" name='name' placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="p-2 rounded-lg text-white bg-[#FF3811]" type="submit" value="Sign Up" />
                        </div>
                        <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link></p>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default SignUp;