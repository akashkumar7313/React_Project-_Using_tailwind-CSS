import React from 'react';
const Footer = () => {
    return (
        <div className=" bg-slate-300 p-4">
                <div className="text-center font-bold ">
                    <p>&copy; {new Date().getFullYear()} XYZ Website. All rights reserved.</p>
                </div>
        </div>

    );
};

export default Footer;
