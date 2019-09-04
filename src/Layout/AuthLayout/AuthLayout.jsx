import React from 'react';
import NavBar from '../../component/NavBar';



const AuthLayout = ({children, ...rest}) => {
return (
<div className="page page-dashboard">
<NavBar />
<div className="main">{children}</div>
</div>
)
}

export default AuthLayout;