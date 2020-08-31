import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Navbar from '../Navigation/Navbar/Navbar';
import '../../styles/Layout/Layout.css';
import Authentication from '../AuthCon/AuthCon'

const layout = (props) => (
    <Auxiliary>
        <Authentication />
        <Navbar />
        <main>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;