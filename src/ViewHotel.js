import React from "react"

function ViewHotel(props) {
    let hotelarray = props.hotelprop
    return (
        <>
            <div className="container mt-5">
                <h2>Featured Hotels</h2>
                <div className="row">
                    {hotelarray.map((hotelarray, id) => {
                        return (
                            <>
                                <div className="col-md-4" key={hotelarray.id}>
                                    <div className="card">
                                        <h4 className='card-title'>{hotelarray.hotelName}</h4>
                                        <img src={hotelarray.imageUrl} className="card-img-top" alt="Img" />
                                        <div className="card-body">
                                            <p className="card-text">City : {hotelarray.city}</p>
                                            <p className="card-text">Aminities : {hotelarray.amenities}</p>
                                            <p className="card-text">Address : {hotelarray.address}</p>
                                            <p className="card-text">Contact No : {hotelarray.phoneNo}</p>
                                            <p className="card-text font-weight-bold">
                                                {hotelarray.description}
                                            </p>
                                            <a href='./' className="btn btn-secondary btn-sm" style={{ marginRight: '8px' }}>Book A Room</a>
                                            <a href='./' className="btn btn-secondary btn-sm" style={{ marginRight: '8px' }}>Add Review</a>
                                            <a href='./' className="btn btn-secondary btn-sm" style={{ marginRight: '8px' }}>View Review</a>
                                        </div>
                                    </div>
                                </div >
                            </>
                        );
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default ViewHotel;