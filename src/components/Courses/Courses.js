import React from 'react';

const Courses = (props) => {
    const { title, price, picture, instructor, duration } = props.course;
    // console.log(course);
    return (
        <div className="col-md-4">
            <div className="single-item my-4">
                <div className="card p-2">
                    <img className="card-img-top" src={picture} alt={title} style={{ height: '200px' }} />
                    <div className="card-body">
                        <hr />
                        <h5 className="card-title line-height">{title}</h5>
                        <small>{instructor}</small>
                        <h4 className="price">${price}</h4>
                        <button className="btn btn-sm btn-warning"
                            onClick={() => props.addToEnroll(props.course)} >Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;