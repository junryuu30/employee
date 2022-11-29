import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
    const [empdata, setEmpdataChange] = useState(null);
    const navigate = useNavigate()

    const LoadDetails=(id)=>{
        navigate("/employee/detail/" + id);
    }

    const LoadEdit=(id)=>{
        navigate("/employee/edit/" + id);
    }

    const RemoveFunction=(id)=>{
        if (window.confirm('Do you want to remove?')){
            fetch("http://localhost:8000/employee/" + id, {
                method: "DELETE"
            }).then((res)=>{
                alert("Removed successfully")
                window.location.reload();
            }).catch((err)=>{
                console.log(err.message)
            })
        }
    }


    useEffect(()=>{
        fetch("http://localhost:8000/employee").then((res)=>{
            return res.json();
        }).then((resp)=>{
            setEmpdataChange(resp);
        }).catch((err)=>{
            console.log(err.message);
        })
    },[])

    return(

        <div className="container">
            <div className="card mt-5" style={{textAlign:"center"}}>
                <div className="card-title">
                    <h5 className="mt-5">holaa ini CRUD ReactJs use bootstrap and fetch javascript</h5>
                </div>
                <div className="card-body">
                    <div className="card-body">
                        <Link to="/employe/create" className="btn btn-success">
                            Add New (+)
                        </Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {   empdata &&
                                empdata.map((item)=>(
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td className="d-flex justify-content-center">
                                             <button className="btn btn-success me-2"
                                             onClick={()=>{LoadEdit(item.id)}}
                                             >edit</button>    
                                            <button className="btn btn-danger me-2"
                                            onClick={()=>{RemoveFunction(item.id)}}
                                            >Remove</button>    
                                            <button className="btn btn-success me-2"
                                            onClick={()=>{LoadDetails(item.id)}}
                                            >Details</button>       
                                        </td>
                                    </tr>
                                    
                                ))
                            }
                        </tbody>

                    </table>

                </div>
            </div>

        </div>

    )
}

export default EmpListing