import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./search.css";




function ResultCarLayouts() {
    return (
        <Card>
            <Card.Header as="h5">Lurxury Bus</Card.Header>
            <Card.Body>
                <Card.Title>Hyderabd to Ongole </Card.Title>
                <Card.Text>Huderabda  -- Suryapet  ---- Guntur --- Ongole</Card.Text>
                <Button variant="primary">Continue-&gt;</Button>
            </Card.Body>
        </Card>
    );
}


function InitSearchLayout() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    var traveltypeOneway = params.traveltype === 'oneway' ? true : false,
        traveltypeTwoway = params.traveltype === 'oneway' ? false : true,
        fromLocation = params.fromLocation,
        toLocation = params.toLocation,
        startDate = params.startDate,
        returnDate = params.returnDate,
        adults = params.adults,
        children = params.children;

    return (
        <div>
            

            <div className="row">
                <div className="col-lg-10 offset-lg-1 col-md-10 offset-md-1 mb-3">
                <form action="/search">
                <div className="form-check offset-lg-1 form-check-inline mb-3">
                    <input className="form-check-input" type="radio" name="traveltype" id="inlineRadio1" value="oneway" checked={traveltypeOneway} readOnly />
                    <label className="form-check-label" htmlFor="inlineRadio1">One Way</label>
                </div>
                <div className="form-check form-check-inline mb-3">
                    <input className="form-check-input" type="radio" name="traveltype" id="inlineRadio2" checked={traveltypeTwoway} value="twoway" readOnly />
                    <label className="form-check-label" htmlFor="inlineRadio2">Round Trip</label>
                </div>
                <div className="row">
                    <div className="col col-xs-4 offset-lg-1 col-lg-3 mb-3">
                        <div className="d-flex flex-column">
                            <label htmlFor="fromLocation" className="form-label">From</label>
                            <input id="fromLocation" defaultValue={fromLocation} name="fromLocation" type="text" required className="form-control-lg mb-2" placeholder="eg: Mumbai" aria-label="From location" readOnly />
                        </div>
                    </div>
                    <div className="col col-xs-4 col-lg-3 mb-3">
                        <div className="d-flex flex-column">
                            <label htmlFor="toLocation" className="form-label">To</label>
                            <input id="toLocation" defaultValue={toLocation} name="toLocation" type="text" required className="form-control-lg mb-2" placeholder="eg: Hyderabad" aria-label="to destination" readOnly />
                        </div>
                    </div>
                    <div className="col col-xs-4 col-lg-1 mb-3">
                        <div className="d-flex flex-column">
                            <label htmlFor="startDate" className="form-label">Departure</label>
                            <input id="startDate" name="startDate" defaultValue={startDate} required className="form-control-lg mb-2" type="date" readOnly />
                        </div>
                    </div>
                    <div className="col col-xs-4 col-lg-1 mb-3">
                        <div className="d-flex flex-column">
                            <label htmlFor="returnDate" className="form-label">Return</label>
                            <input id="returnDate" name="returnDate" required defaultValue={returnDate} className="form-control-lg mb-2" type="date" readOnly />
                        </div>
                    </div>
                    <div className="col col-xs-4 col-lg-1 mb-3">
                        <div className="d-flex flex-column">
                            <label className="form-label">Adults</label>
                            <input type="number" defaultValue={adults} required className="form-control-lg mb-2" name="adults" min="1" max="5" aria-label="From location" readOnly />
                        </div>
                    </div>
                    <div className="col col-xs-4 col-lg-1 mb-3">
                        <div className="d-flex flex-column">
                            <label className="form-label">Children</label>
                            <input type="number" required defaultValue={children} className="form-control-lg mb-2" name="children" min="0" max="5" aria-label="to destination" readOnly />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="text-center col-lg-4 offset-lg-4 col-md-4 offset-md-4 mb-6">
                        <a className="mb-6" href="/booking">Edit selection</a>
                    </div>
                </div>

            </form>
                </div>
            </div>
        </div>
    );
}

function Search() {
    // React States
    return (
        <div>
            <InitSearchLayout />
            <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                    <ResultCarLayouts />
                    <ResultCarLayouts />
                    <ResultCarLayouts />
                    <ResultCarLayouts />
                    <ResultCarLayouts />
                    <ResultCarLayouts />
                </div>
            </div>
        </div>
    );

}
export default Search;