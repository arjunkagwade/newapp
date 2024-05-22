import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./welcomeimage.jpeg";
import bgimg from "./Reactbgimage.jpg";
import axios from 'axios';


function App() {
    const [user, setUser] = useState({ id: "", name: "", address: "", phoneNo: "", email: "", password: "" })
    const [messages, setMessages] = useState({ id: "", name: "", address: "", phoneNo: "", email: "", password: "" })
    const [disable, setDisable] = useState(false)
    const [result, setResult] = useState("")
    const handleChange = (event) => {
        switch (event.target.name) {
            case "id":
                if (event.target.value.length < 2) {
                    setMessages({ ...messages, [event.target.name]: "Required, Min 2 Characters" })
                    setDisable(true)
                } else {
                    setMessages({ ...messages, [event.target.name]: "" })
                    setDisable(false)
                } break;
            case "name":
                if (event.target.value.length < 3) {
                    setMessages({ ...messages, [event.target.name]: "Required, Min 3 Characters" })
                    setDisable(true)
                } else {
                    setMessages({ ...messages, [event.target.name]: "" })
                    setDisable(false)
                } break;
            case "address": if (event.target.value.length <= 5) {
                setMessages({ ...messages, [event.target.name]: "Required" })
                setDisable(true)
            }
            else {
                setMessages({ ...messages, [event.target.name]: "" })
                setDisable(false)
            } break;
            case "phoneNo": if (event.target.value.length < 10) {
                setMessages({ ...messages, [event.target.name]: "Required, 10 digits" })
                setDisable(true)
            } else {
                setDisable(false)
                setMessages({ ...messages, [event.target.name]: "" })
            } break;
            case "email": if (event.target.value.length < 10) {
                setMessages({ ...messages, [event.target.name]: "Required, Basic Email Format" })
                setDisable(true)
            } else {
                setDisable(false)
                setMessages({ ...messages, [event.target.name]: "" })
            } break;
            case "password": if (event.target.value.length >= 8 && event.target.value.length <= 12) {
                setMessages({ ...messages, [event.target.name]: "Required, Length between 8 and 12 characters" })
                setDisable(true)
            } else {
                setDisable(false)
                setMessages({ ...messages, [event.target.name]: "" })
            } break;

            default: return console.log("invalid choice");
        }
        setUser({ ...user, [event.target.name]: [event.target.value] })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("button clicked")
        axios.post('http://localhost:4000/user', user)
            .then((response) => {
                console.log(response)
                setResult("Record added");
            })
            .catch((error) => {
                console.log(error)
                setResult("Something went wrong");
            })
    }
    const getUser = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:4000/user?id=${user.id}`)
            .then((response) => {
                console.log(response);
                setUser(response.data[0])
            })
            .catch((error) => { setMessages("User not found") })
    }
    const updateUser = (event) => {
        event.preventDefault();
    }
    return (
        <>
            <div className="container mt-2">
                <h3>Registration Page</h3>
                <form>
                    <div className="row" style={{ position: "relative" }}>
                        <img src={bgimg} alt="BackgroundImage" style={{ maxWidth: "100%", height: 'auto' }} />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={img} className="img-fluid" style={{ height: '500px' }} alt='imge' />
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label"> UserId </label>
                                <input type="text" className="form-control" name="id" value={user.id}
                                    placeholder="Enter your userid" onChange={handleChange} />
                                <div>{messages.id}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label"> Name </label>
                                <input type="text" className="form-control" name="name" value={user.name}
                                    placeholder="Enter your name" onChange={handleChange} />
                                <div>{messages.name}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">  Address </label>
                                <textarea className="form-control" name="address" rows="2" value={user.address}
                                    placeholder="Please type your address here" onChange={handleChange}></textarea>
                                <div>{messages.address}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label"> Phone No. </label>
                                <input type="text" className="form-control" name="phoneNo" value={user.phoneNo}
                                    placeholder="Enter Phone Number" onChange={handleChange} />
                                <div>{messages.phoneNo}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label"> Email address </label>
                                <input type="email" className="form-control" name="email" value={user.email}
                                    placeholder="Enter your email" onChange={handleChange} />
                                <div>{messages.email}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label"> Password </label>
                                <input type="password" className="form-control" name="password" value={user.password}
                                    placeholder="Enter your password" onChange={handleChange} />
                                <div>{messages.password}</div>
                            </div>
                            <button type="submit" onClick={handleSubmit} disabled={disable}
                                className="btn btn-dark">  Submit </button>
                            <button type="submit" onClick={getUser}
                                className="btn btn-dark">  Get User </button>
                            <button type="submit" onClick={updateUser}
                                className="btn btn-dark">  Update User </button>
                        </div>
                    </div>
                </form>
                {result !== "" ? <div>{result}</div> : null}
            </div>
        </>
    )
}

export default App;