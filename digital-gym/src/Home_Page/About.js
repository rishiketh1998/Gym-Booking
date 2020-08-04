import React from "react";
import {Card} from 'react-bootstrap'

export const About = () => {
    return (
        <>
            <Card className='animate__fadeIn'>
                <div className='m-2 text-secondary'>
                    <p className='lead'>
                        Welcome to <strong className='text-info'>Digital Gym</strong>.
                    </p>
                    <p>
                        We welcome everyone regardless of gender, sexuality, size, age, ethnicity or ability.
                        Our gyms are friendly, supportive and judgement free spaces where everybody can come in, work out and leave feeling good.
                    </p>
                    <p>
                        We are a gym that caters to people who have never been in a gym before,
                        those who need to update their workout experience,
                        and those who are serious about getting great results!
                    </p>
                    <p>
                        We have various memberships available for people needing nutritional guidance, fitness assessments, or sports specific training.
                        We believe we have the best fitness club in the area with the most cutting edge training methods and a clean and comfortable workout area.
                    </p>
                    <p>
                        Our mission is to help people everywhere to lead a healthy and happy life every day.
                    </p>
                    <button className='btn btn-info'>Become a Member</button>
                </div>
            </Card>
        </>
    )
}