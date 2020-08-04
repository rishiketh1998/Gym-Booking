import React, {useState} from "react";
import {Card} from "react-bootstrap";

export const Review = ({reviews}) => {
    const [reviewNumber, changeReview] = useState(0)
    let userReview = reviews[reviewNumber].review
    let userName = reviews[reviewNumber].name
    let userCity = reviews[reviewNumber].city
    let userStars = []
    for(let i = 0; i < reviews[reviewNumber].stars; i++) {
        userStars.push(<i className="fas fa-star" key={i}/>)
    }
    const handlePrevious = () => {
        let number = reviewNumber - 1 < 0 ? reviews.length - 1 : reviewNumber - 1
        changeReview(number)
    }
    const handleNext = () => {
        let number = reviewNumber + 1 > reviews.length - 1 ? 0 : reviewNumber + 1
        changeReview(number)
    }
    return (
        <Card>
            <div className='m-2'>
                <p className='lead text-secondary m-2'>View What our Members have to say.</p>
                <div className='m-2'>
                    <i className="fas fa-quote-left text-info"/>
                    <p className='m-2'>
                        {userReview}
                    </p>
                    <div className='text-warning row m-0'>
                        <div className='col-6'>
                            {userStars}
                            <p className='text-dark font-italic'>
                                - {userName} <br />
                                {userCity}
                            </p>
                        </div>
                        <div className='col-6 text-center text-info my-4 d-flex justify-content-end' style={{fontSize: 'xx-large'}}>
                            <i className="fas fa-chevron-circle-left mx-2" onClick={handlePrevious} style={{cursor:'pointer'}}/>
                            <i className="fas fa-chevron-circle-right mx-2" onClick={handleNext} style={{cursor:'pointer'}}/>
                        </div>
                    </div>
                </div>
                <p className='p-0' >
                    Member Already? Leave a Review <a href='/review' className='font-weight-bold text-info'>Here</a>
                </p>
            </div>
        </Card>
    )
}