import React from 'react';
import { Button} from '@mui/material';
import { Link} from 'react-router-dom';
// const [adminstration, setadminstration] = useState({admin_name:"", admin_email:"", admin_password:""});
export default function Adminfun() { 
return (
        <div>
        <h1>Please click a button to proceed</h1>
        <div>
            <Button LinkComponent={Link} to="/admin/staff">Staff</Button>
            <Button LinkComponent={Link} to="/admin/products">Products</Button>
            <Button LinkComponent={Link} to="/admin/customers">Customers</Button>
        </div>
    </div>)
     
};