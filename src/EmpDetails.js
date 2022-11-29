import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const EmpDetails = () =>{
    const {empid} = useParams();

    const [empdata, setEmpdataChange] = useState({})

    useEffect(()=>{
        fetch("http://localhost:8000/employee/" + empid).then((res)=>{
            return res.json();
        }).then((resp)=>{
            setEmpdataChange(resp);
        }).catch((err)=>{
            console.log(err.message);
        })

    },[]);

    return(
        <>
        <div>
            <div className="card m-4" style={{textAlign:"left"}}>
            <h2>Ini details</h2>
            <div className="card-body">
                { empdata && 
                <h2>The Employee name is : {empdata.name} ({empdata.id})</h2>
                }
                <h3>Contact Details</h3>
                <h5>Email is: {empdata.email}</h5>
                <h5>Phone is: {empdata.phone}</h5>
                <Link to="/" className="btn btn-danger">Back to Listing</Link>
            </div>

            </div>
            
        </div>
        </>
    )
}

export default EmpDetails