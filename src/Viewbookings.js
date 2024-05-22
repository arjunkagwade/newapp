import React from 'react';

function Bookings(props) {
    let bookingslst = props.roomProp;
    console.log(bookingslst)
    return (
        <>
            <div className="container mt-5">
                <h2>Booking Rooms</h2>
                <div className="row">{
                    bookingslst.map((booking, id) => {
                        return (
                            <>
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-text">Booking Id : B {booking.id}</h5>
                                            <p className="card-text">Start Date : {booking.startdate}</p>
                                            <p className="card-text">End Date : {booking.enddate}</p>
                                            <p className="card-text">No of Persons : {booking.noofpersons}</p>
                                            <p className="card-text">No of Rooms : {booking.noofrooms}</p>
                                            <a href='./' className="btn btn-secondary btn-sm" style={{ marginRight: '8px' }}>Reschedule</a>
                                            <a href='./' className="btn btn-secondary btn-sm" style={{ marginRight: '8px' }}>Cancel</a>
                                        </div>
                                    </div>
                                </div >
                            </>)
                    })
                }</div>
            </div >
        </>


    );
}

export default Bookings;