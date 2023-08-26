import React, { useEffect } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {  Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Astaff() { 
    function www() {
        if (adminstration.admin_email !== "" && adminstration.admin_name !== "" && adminstration.admin_password !== "" 
        && adminstration.admin_email.length > 11 && adminstration.admin_name.length > 2 && adminstration.admin_password.length > 4) {
            eee()
        } else {
            console.log('enter a valid value')
        }
    }
    async function eee(e) {
        // e.preventDefault();
        try {
            console.log(adminstration)
            const body = { adminstration };
            const response = await fetch("http://localhost:5000/admin/staff", {
                method: "PUT",
                headers: {"Content-Type": "application/json", "Accept": "application/json"},
                body: JSON.stringify(body)
                
            });
            const data= await response.json();
            console.log(data)
        } catch (err) {
            console.error(err.message)
        } }

        async function rrr(e) {
            try {
                const list = await fetch("http://localhost:5000/admin/staff");
                const dataa = await list.json(); 
                setgetadminstration(dataa)    
            } catch (err) {
                console.error(err.message)
            }
    }
    useEffect(() => {
        rrr();
    }, []);
    
    function ttt() { rrr().then(() => {
    return(
    <div >
        <TableContainer  component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
            <TableRow>
            <TableCell align="right">admin_id</TableCell>
            <TableCell>admin_name</TableCell>
            <TableCell align="right">admin_email</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {getadminstration.map((admin) => (
            <TableRow
                key={admin.admin_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                {admin.admin_id}
                </TableCell>
                <TableCell align="right">{admin.admin_name}</TableCell>
                <TableCell align="right">{admin.admin_email}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    </div>)})}
    const [adminstration, setadminstration] = useState({admin_name:"", admin_email:"", admin_password:""});
    const [getadminstration, setgetadminstration] = useState("");

    // const [customer, setcustomer] = useState({customer_name:"", customer_email:"",j customer_password:""});
    // const [product, setproduct] = useState({product_name:"", product_img:"", product_price:"", product_details:""});
    ;
        return ( 
    <div> 
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off">
        <TextField id="outlined-basic" label="Name" variant="outlined" value={adminstration.admin_name} 
        onChange={(Event) => 
            {const newAdminstration = {...adminstration};
            newAdminstration.admin_name = Event.target.value;
            setadminstration(newAdminstration)}}/>
             {/* {setadminstration({...adminstration, admin_name: Event.target.value})}}/> */}
        <TextField id="standard-basic" label="Email" variant="outlined" value={adminstration.admin_email} 
        onChange={(Event) =>
           {setadminstration({...adminstration, admin_email: Event.target.value})}}/>
        <TextField id="filled-basic" label="Password" variant="filled" value={adminstration.admin_password} 
        onChange={(Event) => 
            {const newAdminstration = {...adminstration};
            newAdminstration.admin_password = Event.target.value;
            setadminstration(newAdminstration)}}/>
    <br></br>

    <Button type='submit' variant="contained" onClick={www}>Submit</Button>
   </Box>
   <Button onClick={ttt}>Press to retrieve data</Button>
   
 </div>    )    
};