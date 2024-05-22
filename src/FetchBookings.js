import Viewbookings from './Viewbookings'
import { useEffect, useState } from "react";
import axios from "axios";

function FetchBookings() {
    const [roomdetails, setroomdetails] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/room')
            .then((response) => {
                console.log("Response:", response); setroomdetails(response.data)
                console.log(roomdetails);
            })
            .catch((error) => { console.log(error); })
    })

    return (
        <>
            <Viewbookings roomProp={roomdetails} />
        </>
    );
}


export default FetchBookings;
