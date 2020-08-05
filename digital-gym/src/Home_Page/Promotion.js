import React from "react";
import { Card } from "react-bootstrap";

export const Promotion = () => {
    return (
        <Card className='mb-3'>
            <div className='m-2'>
                <p className='lead'>Weekly <strong className='text-info'>Promotion</strong>.</p>
                <p className='text-center text-info  lead font-italic' style={{fontSize: "x-large",fontFamily:"sans-serif"}}>
                    0£ JOINING FEE.
                </p>
                <Card className='text-center font-italic text-secondary'>
                      <p className='lead m-0 p-0'>USE CODE: <strong className='text-info' style={{fontFamily:"sans-serif",fontSize:"x-large"}}>5xTyZ</strong></p>
                </Card>
                <div className='d-flex justify-content-end my-3'>
                    <button className='btn btn-info'>
                        Join Now
                    </button>
                </div>
            </div>
        </Card>
    )
}