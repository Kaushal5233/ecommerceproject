import React from 'react';
import './style.css';

import img1 from '../../../assets/images/thumbnail-1.jpg';
import { Link } from '@mui/material';
import Rating from "@mui/material/Rating";

const TopProducts = (props) => {
  return (
    <>
    <div className="topSelling_box">
    <h3>{props.title}</h3>

    <div className="items d-flex align-items-center">
      <div className="img">
       <Link>
       <img src={img1} className='w-100' />
       </Link>
    

      </div>
      <div className="info">
        <Link to=""><h6>Nestle Original Cofee-Mate Coffe Creamer</h6></Link>
        <Rating name="read-only" value={3.5} readOnly />
        <span className="price text-g font-weight-bold">$28.85</span>{" "}
            <span className="oldPrice">$32.8</span>
      </div>

    </div>
    <div className="items d-flex align-items-center">
      <div className="img">
       <Link>
       <img src={img1} className='w-100' />
       </Link>
    

      </div>
      <div className="info">
        <Link to=""><h6>Nestle Original Cofee-Mate Coffe Creamer</h6></Link>
        <Rating name="read-only" value={3.5} readOnly />
        <span className="price text-g font-weight-bold">$28.85</span>{" "}
            <span className="oldPrice">$32.8</span>
      </div>

    </div>
    <div className="items d-flex align-items-center">
      <div className="img">
       <Link>
       <img src={img1} className='w-100' />
       </Link>
    

      </div>
      <div className="info">
        <Link to=""><h6>Nestle Original Cofee-Mate Coffe Creamer</h6></Link>
        <Rating name="read-only" value={3.5} readOnly />
        <span className="price text-g font-weight-bold">$28.85</span>{" "}
            <span className="oldPrice">$32.8</span>
      </div>

    </div>
    
    </div>
      
    </>
  )
}

export default TopProducts;
