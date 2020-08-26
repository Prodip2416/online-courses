import React, { useState} from 'react';
import TotalCourses from '../fakeData/TotalCourses';
import Courses from '../Courses/Courses';
import Cart from '../Cart/Cart';
import { Alert } from 'react-bootstrap';

const OnlineCourse = () => {
    const [courses, setCourses] = useState([TotalCourses]); // fake data call
    const [cart, setCart] = useState([]);

    const addToEnroll = (course) => { //Add course to cart function
        const totalCartItem = [...cart, course];
        setCart(totalCartItem);
    }
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    return (
        <div className="container-fluid">
            <h1 className="text-center mt-3 text-success">Welcome To Online Courses</h1>
            <div className="row">
                <div className="col-md-3 cart">
                    <h2 className="text-center text-warning">Total Cart Item : {cart.length}  </h2>
                    <ul className="list-group">
                        {
                            cart.map(item => <Cart key={item.id * Math.random()} item={item} />)
                        }
                    </ul>
                    <Alert className="alert alert-info d-flex justify-content-between ">
                        <b>Total Price </b> <b>${totalPrice}</b>
                    </Alert>
                </div>
                <div className="col-md-9 row border-left course-item">
                    {
                        courses[0].map(item => <Courses key={item.id} course={item} addToEnroll={addToEnroll} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default OnlineCourse;