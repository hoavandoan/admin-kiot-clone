import React from 'react';
import PropTypes from 'prop-types';
import Header from "../components/sections/Header";

const Layout = (props) => {
    return (
        <div className="h-screen w-full bg-gray-100 text-sm font-sans">
            <Header />
            <div className="container mx-auto w-full flex">
                <div className="w-64">{props.nav}</div>
                <div className="w-full">{props.content}</div>
            </div>
        </div>
    );
};

Layout.propTypes = {
    nav: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
}

export default Layout;
