import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const EmpCreate= ()=>{

    const[id, SetIdchange] = useState("");
    const[name, SetNamechange] = useState("");
    const[email, SetEmailchange] = useState("");
    const[phone, SetPhonechange] = useState("");
    const[active, SetActivechange] = useState(true);
    const[validation, valchange] = useState(false);
    const navigate = useNavigate()

    

    const handlesubmit = (e)=>{
        e.preventDefault();
        const emData = {id, name, email, phone, active};

        fetch("http://localhost:8000/employee",{
            method:"POST",
            headers:{"content-type": "application/json"},
            body: JSON.stringify(emData),
        }).then((res)=>{
            alert("saved-success")
            navigate("/")
        }).catch((err)=>(
            console.log(err.message)
        ))
    }

    return(
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card mt-5" >
                        <div className="card-title">
                            <h2>Employee Create</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input value={id} 
                                        disabled="disabled"
                                        className="form-control">
                                        </input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input required 
                                        value={name} 
                                        onMouseDown={e=>valchange(true)} 
                                        onChange={e=>SetNamechange(e.target.value)} 
                                        className="form-control"></input>
                                    {name.length==0 && validation && <span className="text-danger">Enter the name</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control"
                                        value={email}
                                        onChange={(e)=>SetEmailchange(e.target.value)}
                                        required>
                                        </input>
                                        {email.length==0 && validation && <span className="text-danger">Enter the Email</span>}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input 
                                        value={phone}
                                        onChange={(e)=>SetPhonechange(e.target.value)}
                                        className="form-control"
                                        required>
                                        </input>
                                        {email.length==0 && validation && <span className="text-danger">Enter the Phone</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-check">
                                        <input 
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={active} onChange={(e)=>SetActivechange(e.target.checked)}
                                        >
                                        </input>
                                        <label className="form-check-label">Is Active</label>
                                    </div>
                                </div>

                                <div className="col-lg-12" style={{textAlign:"center"}}>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-success me-2">Save</button>
                                        <Link to="/" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>


                    </form>
                </div>

            </div>
        </div>
    )
}

export default EmpCreate