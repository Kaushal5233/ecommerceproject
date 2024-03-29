import React from 'react'
import './nav.css';
import {Link} from 'react-router-dom';
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewIcon from '@mui/icons-material/GridView';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';


const Nav = () => {
  return (
   <div className="nav d-flex align-items-center">
    <div className="container-fluid ">
        <div className="row position-relative">
            <div className="col-sm-3 part1 d-flex align-items-center">
                <Button className='bg-g text-white catTab'> <GridViewIcon/> &nbsp; Browse All Categories <KeyboardArrowDownIcon/> </Button>

            </div>
            <div className="col-sm-7 part2 position-static">
                <nav>
                    <ul className='list list-inline mb-0'>
                        <li className='list-inline-item'>
                            <Button><Link>Home</Link></Button>

                        </li> <li className='list-inline-item'>
                            <Button><Link>About</Link></Button>

                        </li>
                        <li className='list-inline-item'>
                            <Button><Link>Shop</Link></Button>



                        </li>
                        <li className='list-inline-item'>
                            <Button><Link>Vendors</Link></Button>

                           

                        </li>
                        <li className='list-inline-item position-static'>
                            <Button><Link>Mega menu <KeyboardArrowDownIcon/></Link></Button>

                            <div className="dropdown_menu megaMenu w-100">
                                <div className="row">
                                    <div className="col">
                                        <h4 className='text-g'>Fruit & Vegetables</h4>
                                        <ul className='mt-4 mb-0 '>
                                            <li><Link to="">Meat & Poultry</Link></li>
                                            <li><Link to="">Fresh Vegetables</Link></li>
                                            <li><Link to="">Herbs Seasonings</Link></li>
                                            <li><Link to="">Cuts & Sprouts</Link></li>
                                            <li><Link to="">Exotic Fruits & Veggies</Link></li>
                                            <li><Link to="">Packaged Produce</Link></li>
                                            
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <h4 className='text-g'>Breakfast & Daity</h4>
                                        <ul className='mt-4 mb-0'>
                                            <li><Link to="">Milk & Flavoured Milk</Link></li>
                                            <li><Link to="">Butter and Margarine</Link></li>
                                            <li><Link to="">Eggs Substitutes</Link></li>
                                            <li><Link to="">Marmalades</Link></li>
                                            <li><Link to="">Sour Cream</Link></li>
                                            <li><Link to="">Cheese</Link></li>
                                            
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <h4 className='text-g'>Meat & Seafood</h4>
                                        <ul className='mt-4 mb-0'>
                                            <li><Link to="">Breakfast Sausage</Link></li>
                                            <li><Link to="">Dinner Sausage</Link></li>
                                            <li><Link to="">Chicken</Link></li>
                                            <li><Link to="">Sliced Deli Meat</Link></li>
                                            <li><Link to="">Wild Caught Fillets</Link></li>
                                            <li><Link to="">Crab and Shellfish</Link></li>
                                            
                                        </ul>
                                    </div>
                                    <div className="col">
                                      <img src="https://cdn.pixabay.com/photo/2014/05/21/14/53/vegetable-basket-349667_1280.jpg" className='w-100' />
                                    </div>
                                </div>
                              
                            </div>

                        </li>
                        <li className='list-inline-item'>
                            <Button><Link>Blog</Link></Button>

                        </li>
                        <li className='list-inline-item'>
                            <Button><Link>Pages <KeyboardArrowDownIcon/> </Link></Button>


                            <div className="dropdown_menu">
                                <ul>
                                    <li><Button><Link to="/about">About Us</Link></Button></li>
                                    <li><Button><Link to="/about">Contact</Link></Button></li>
                                    <li><Button><Link to="/about">My Account</Link></Button></li>
                                    <li><Button><Link to="/about">Login</Link></Button></li>
                                    <li><Button><Link to="/about">Register</Link></Button></li>
                                    <li><Button><Link to="/about">Forget password</Link></Button></li>
                                    <li><Button><Link to="/about">Reset password</Link></Button></li>
                                    <li><Button><Link to="/about">Purchase Guide</Link></Button></li>
                                    <li><Button><Link to="/about">Privacy Policy</Link></Button></li>
                                    <li><Button><Link to="/about">Terms of Service</Link></Button></li>
                                    <li><Button><Link to="/about">404 Page</Link></Button></li>
                                </ul>
                            </div>

                        </li>
                        <li className='list-inline-item'>
                            <Button><Link>Contact</Link></Button>

                        </li>
                    </ul>

                </nav>

            </div>
            <div className="col-sm-2 part3 d-flex align-items-center">
                <div className="phNo d-flex align-items-center ml-auto">
                       <span><HeadsetMicOutlinedIcon/></span>
                       <div className="info ml-3">
                        <h3 className='text-g mb-0'>1900 - 888</h3>
                        <p className='mb-0'>24/7 Support Center</p>

                       </div>

                </div>

            </div>
        </div>

    </div>
   </div>

  )
}

export default Nav;
