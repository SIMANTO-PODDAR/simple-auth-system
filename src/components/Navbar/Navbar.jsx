import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-end gap-10 mb-5'>
            <Link className='btn' href="/signup">Sign Up</Link>
            <Link className='btn' href="/login">Log In</Link>
            <Link className='btn' href="/">Home</Link>
        </div>
    );
};

export default Navbar;