import React from "react"
import ViewHotel from "./ViewHotel"
import "./App.css"

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
function FetchHotel() {
    return (
        <>
            <ViewHotel hotelprop={hotelarray}></ViewHotel>
        </>
    )
}

export default FetchHotel;