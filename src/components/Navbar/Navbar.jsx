"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

const Navbar = () => {
    const funcLogOut = async () => {
        await authClient.signOut();
    }
    return (
        <div className='flex justify-around gap-10 my-3'>
            <Link className='btn bg-blue-500' href="/">Home</Link>
            <Link className='btn bg-cyan-600' href="/profile">Profile</Link>
            <Link className='btn bg-emerald-700' href="/signup">Sign Up</Link>
            <Link className='btn bg-green-900' href="/login">Log In</Link>
            <button onClick={funcLogOut} className='btn bg-amber-700'>Log Out</button>
        </div>
    );
};

export default Navbar;