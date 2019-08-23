import React from 'react';
import styled from 'styled-jss';

const Card = styled('div')({
    background: '#fff',
    minHeight: 450,
    width: 250,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    verticalAlign: 'middle',
    padding: '30 40',
    borderRadius: 5,
    boxShadow: '0 0 20px #255ba3',
    zIndex: 100,
    transition: '1s all',
    opacity: 1,
});

const Login = () => (
    <>
    <Card>
        <div style={{position:'relative'}}>
            <input type="text" autoComplete="off" placeholder="Username" name="username" value="" tabIndex="1"
                   required="" />
        </div>
    </Card>
    </>
);

export default Login;