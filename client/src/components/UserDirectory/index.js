import React, { useEffect, useState } from 'react'
import { Table, Container } from 'react-bootstrap'
import API from '../../utils/API'
export default function UserDirectory() {

    const [users, setUsers] = useState([]);  
    useEffect(() => {
        API.getUsers().then(
            function(response){
                console.log(response.data[0].email)
                setUsers(response.data)
            }
        )

        return () => {};
    }, []);
    return (
        <div>
            <Container>
            <h1>User Directory</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {users.map(item => 
                    <tr>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                    </tr>
                )}
                    
                </tbody>
            </Table>
            </Container>
        </div>
    )
}
