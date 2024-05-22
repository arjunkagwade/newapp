
import React, { useState } from "react";

import { format } from 'date-fns';
import axios from "axios";


function App() {
    let today = new Date()
    // const randn = require('randn');
    const formattedDate = format(today, 'yyyy-MM-dd');
    // console.log(formattedDate)
    const [room, setRoom] = useState({ id: "", startdate: "", enddate: "", noofpersons: "", noofrooms: "" })
    const [messages, setMessages] = useState({ id: "", startdate: "", enddate: "", noofpersons: "", noofrooms: "" })
    const [record, setRecord] = useState("")
    const handleChange = (event) => {
        // console.log(event)
        switch (event.target.name) {
            case "id":
                if (event.target.value !== null) {
                    setMessages({ ...messages, [event.target.name]: "Required, Id should not be empty" })
                } else {
                    setMessages({ ...messages, [event.target.name]: "" })
                }
                break;
            case "startdate":
                if (event.target.value <= formattedDate) {
                    setMessages({ ...messages, [event.target.name]: "Required, should be greater than today" })
                    console.log(event.target.value)
                } else {
                    setMessages({ ...messages, [event.target.name]: "" })
                }
                break;
            case "enddate":
                if (event.target.value <= room.startdate[0]) {
                    setMessages({ ...messages, [event.target.name]: "Required, should be greater than or equal to startDate" })
                }
                else {
                    setMessages({ ...messages, [event.target.name]: "" })
                }
                break;
            case "noofpersons": if (event.target.value <= 4) {
                setMessages({ ...messages, [event.target.name]: "Required, should be greater than 0 and less than or equal to 5" })
            }
            else {
                setMessages({ ...messages, [event.target.name]: "" })
            } break;
            case "noofrooms": if (event.target.value <= 2) {
                setMessages({ ...messages, [event.target.name]: "Required, should be greater than 0 and less than or equal to 3" })
            } else {
                setMessages({ ...messages, [event.target.name]: "" })
            } break;
            default: return console.log("invalid choice");
        }
        setRoom({ ...room, [event.target.name]: [event.target.value] })
    }
    const GetRoomDetails = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:4000/room?id=${room.id}`)
            .then((response) => { console.log(response.data); setRoom(response.data) })
            .catch((error) => { console.log(error) })
    }

    const addRoomDetails = (event) => {
        event.preventDefault();
        console.log("Room Data before the stringify:", room)
        console.log("After stringify:", JSON.stringify(room));
        axios.post(`http://localhost:4000/room`, room)
            .then((response) => { console.log("Response data", response.data); setRecord("Record saved successfully") })
            .catch((error) => { console.log(error) })
    }


    return (
        <>
            <form>
                <h2>Book A Room</h2>
                Book Room Id: <input type="number" name="id" value={room.id} onChange={handleChange} /> <br /> <br />
                Start Date :
                <input type="date" name="startdate" value={room.startdate} onChange={handleChange} /> <br />
                <div>{messages.startdate} </div><br />
                End Date :
                <input type="date" name="enddate" value={room.enddate} onChange={handleChange} /><br />
                <div>{messages.enddate}</div><br />
                No of Persons :
                <input type="number" name="noofpersons" value={room.noofpersons} onChange={handleChange} placeholder="Enter No of Persons" /><br />
                <div>{messages.noofpersons}</div><br />
                No of Rooms :
                <input type="number" name="noofrooms" value={room.noofrooms} onChange={handleChange} placeholder="Enter No of Rooms" /><br />
                <div>{messages.noofrooms}</div><br />
                Type of Room :
                <select name="typeofroom">
                    <option value="selectroomtype">--Select Room Type--</option>
                </select>
                <br /> <br />
                <button onClick={addRoomDetails} className="btn btn-dark">  Book a Room </button>
                <button onClick={GetRoomDetails} className="btn btn-dark">  Get Room Details </button>
                {record !== null ? <div>{record}</div> : null}
            </form>
        </>
    )
}
export default App;