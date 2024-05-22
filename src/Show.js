import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../src/sunset.jpg";
function Show() {
    return (
        <div>
            <div className="container mt-5">
                <h2>Featured Cards</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src={img} className="card-img-top" alt="Card 1" />
                            <div className="card-body">
                                <h5 className="card-title">Card 1</h5>
                                <p className="card-text">
                                    This is a featured card with some content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={img} className="card-img-top" alt="Card 2" />
                            <div className="card-body">
                                <h5 className="card-title">Card 2</h5>
                                <p className="card-text">
                                    Another featured card with more content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={img} className="card-img-top" alt="Card 3" />
                            <div className="card-body">
                                <h5 className="card-title">Card 3</h5>
                                <p className="card-text">
                                    This is the third featured card with additional content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Show;
