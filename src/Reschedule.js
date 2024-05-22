import React, { useState } from 'react'
import { format } from 'date-fns';

function App() {
    const [date, setDate] = useState({ startdate: "", enddate: "" });
    const [messages, setMessages] = useState({ startdate: "", enddate: "" })
    const [disable, setDisable] = useState(false)
    const [reqMsg, setReqMsg] = useState("")

    const handleChange = (event) => {
        let today = new Date()
        const formattedDate = format(today, 'yyyy-MM-dd');
        switch (event.target.name) {
            case "startdate": if (event.target.value <= formattedDate) {
                setMessages({ ...messages, [event.target.name]: "Required, Start Date should be greater than today" })
                setDisable(true)
            }
            else {
                setDisable(false)
                setMessages({ ...messages, [event.target.name]: "" })
            } break
            case "enddate": if (event.target.value < date.startdate) {
                setMessages({ ...messages, [event.target.name]: "Required, End date can be greater than or equal to start Date" })
                setDisable(true)
            }
            else {
                setDisable(false)
                setMessages({ ...messages, [event.target.name]: "" })
            } break
            default: console.log("default case")
        }
        console.log(event.target.name)
        console.log(date.enddate.value)
        if (date.startdate === "" || date.enddate === "") {
            console.log("inside the if block")
            setReqMsg({ ...reqMsg, [event.target.name]: "All fields are required" })
            setDisable(true)
        }
        else {
            setReqMsg({ ...reqMsg, [event.target.name]: "" })
            setDisable(false)
        }
        setDate({ ...date, [event.target.name]: [event.target.value] })
    }

    function handleClick(event) {
        event.preventDefault()
        console.log(date.startdate.value)

    }
    return (
        <>
            <form>
                <h2>Book A Room</h2>
                Start Date :
                <input type="date" name="startdate" value={date.startdate} onChange={handleChange} /> <br />
                {messages.startdate !== null ? <div>{messages.startdate} </div> : null}<br />
                End Date :
                <input type="date" name="enddate" value={date.enddate} onChange={handleChange} /><br />
                {messages.enddate !== null ? <div>{messages.enddate} </div> : null}<br />
                <button type="book" disabled={disable} className="btn btn-dark" onClick={handleClick}>  Reschedule </button>
            </form>
        </>
    )
}

export default App;