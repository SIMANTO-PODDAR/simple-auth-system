"use client"
import GoogleLogin from '@/components/GoogleLogIn/GoogleLogin';
import Navbar from '@/components/Navbar/Navbar';
import { authClient } from '@/lib/auth-client';

const LogInPage = () => {

    const handleLogIn = async (e) => {

        e.preventDefault();
        const iptEmail = e.target.email.value;
        const iptPassword = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email: iptEmail,
            password: iptPassword,
            callbackURL: '/profile'
        })

        if (!data) {
            alert(error.message)
        }

    }

    return (
        <div>
            <Navbar />
            <p className='text-center'>Log In:</p>

            <div className='flex justify-center'>
                <form className='grid gap-5' onSubmit={handleLogIn}>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input name='email' type="email" className="input" placeholder="Email" autoComplete='username' required />
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input name='password' type="password" className="input" placeholder="Password" autoComplete='current-password' required />
                    </fieldset>

                    <button type='submit' className='btn btn-primary'>Log In</button>
                </form>

            </div>

            <GoogleLogin />
        </div>
    );
};

export default LogInPage;