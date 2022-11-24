import React from 'react';

const PrimaryButten = ({children}) => {
    return (
        <button className=" font-semibold btn btn-primary  bg-gradient-to-r from-primary  to-secondary text-white">{children}</button>
    );
};

export default PrimaryButten;