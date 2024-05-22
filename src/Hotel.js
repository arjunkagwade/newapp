import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

let hotelarray = [
    {
        "id": 1, "hotelName": "Paradise Stay", "city": "Bangalore",
        "description": "A home to relax at the 'city' peek with all the facilities near you",
        "amenities": "Different Cuisine Food, Swimming Pool, Self Cooking Station",
        "phoneNo": 9090909090, "address": "120/1C, Bangalore, Karnataka",
        "imageUrl": "https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg"
    },
    {
        "id": 2, "hotelName": "Hill Palace", "city": "Kochi",
        "description": "A cool place to relax at Lake side",
        "amenities": "Homely Food, Sea Food, Children's Park, Boating",
        "phoneNo": 9191919191, "address": "90/1A, Kochi, Kerala",
        "imageUrl": "https://images.pexels.com/photos/12359950/pexels-photo-12359950.jpeg",
    },
    {
        "id": 3, "hotelName": "Monsoon Stay",
        "city": "Chennai", "description": " luxurious but affordable ",
        "amenities": "24 hr Homely Food",
        "phoneNo": 9292929292, "address": "100/1A, Chennai",
        "imageUrl": "https://images.pexels.com/photos/19972219/pexels-photo-19972219/free-photo-of-people-walking-by-hazelton-hotel-in-toronto-canada.jpeg"
    }
]

function App() {
    let navigate = useNavigate();
    const handleBook = () => {
        navigate('/BookARoom')
    }
    const handleAddReview = () => {
        navigate('/bookroom')
    }
    const handleViewReview = () => {
        navigate('/bookroom')
    }
    return (
        <>
            <div className="container mt-5">
                <h2>Featured Hotels</h2>
                <div className="row">
                    {hotelarray.map((hotelarray, id) => {
                        return (
                            <>
                                <div className="col-md-4">
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
                                            <button onClick={handleBook} className="btn btn-secondary btn-sm" style={{ marginRight: '8px' }}>Book A Room</button>
                                            <button onClick={handleAddReview} className="btn btn-secondary btn-sm" style={{ marginRight: '8px' }}>Add Review</button>
                                            <button onClick={handleViewReview} className="btn btn-secondary btn-sm" style={{ marginRight: '8px' }}>View Review</button>
                                        </div>
                                    </div>
                                </div >
                            </>
                        );
                    })}
                </div>
            </div >
        </>
    );
}

export default App;