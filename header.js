import React, { useEffect, useState } from "react";
import "../header/header.css";
import Logo from "../../assets/images/Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../selectDrop/select";
import axios from "axios";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { LuGitCompare } from "react-icons/lu";
import IconHeart from "../../assets/images/icon-heart.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import Button from "@mui/material/Button";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
//import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";


import Nav from './nav/nav';

const Header = () => {

  
  const [isOpenDropDown, setisOpenDropDown] = useState(false);
  //const headerRef = useRef();
  const [categories, setcategoris] = useState([
    " Milks and Dairies",
    "Wines and Drinks",
    "Clothing & Beauty",
    "Fresh Seafood",
    " Pet Foods & Toy",
    "Fast food",
    "Banking material",
    "Vegetables",
    "Fresh Fruit",
    "Bread and juice",
  ]);

  const countryList = [];

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          res.data.data.map((item, index) => {
            countryList.push(item.country);
            //console.log(item.country);
          });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  //useEffect(()=>{
    //window.addEventListener("scroll",()=>{
      //let position = window.pageYOffset;
     //if(position>100){
      //headerRef.current.classList.add('fixed');

     //}
     //else{
      //headerRef.current.classList.remove('fixed');
     //}
    //});

  //},[])

  return (
    <>
    <div className="headerWrapper" >
      <header >
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src={Logo} />
            </div>
            {/* headerSearch start heare */}
            <div className="searchbox">
              <div className="col-sm-5">
                <div className="headerSearch d-flex align-items-center">
                  <Select
                    data={categories}
                    placeholder={"All Categories"}
                    icon={false}
                  />

                  <div className="search">
                    <input type="text" placeholder="Search for items..." />
                    <SearchIcon className="searchIcon cursor" />
                  </div>
                </div>
              </div>
            </div>
            <div className="yourloctionbox">
              <div className="col-sm-5 d-flex align-items-center">
                <div className="countryWrapper">
                  <Select
                    data={countryList}
                    placeholder={"Your Location"}
                    icon={<LocationOnOutlinedIcon style={{ opacity: "0.7" }} />}
                  />
                </div>
              </div>
            </div>
            <ClickAwayListener onClickAway={()=>setisOpenDropDown(false)}>
            <ul className="list list-inline mb-0 headerTabs">
              <li className="list inline-item">
                <span>
                  <LuGitCompare className="compare" />
                  <span className="badge bg-success rounded-circle">3</span>
                  Compare
                </span>
              </li>
              <li className="wishlist inline-item">
                <span>
                  <img src={IconHeart} className="compare" />
                  <span className="badge bg-success rounded-circle">4</span>
                  Wishlist
                </span>
              </li>
              <li className="cart inline-item">
                <span>
                  <MdOutlineShoppingCart className="compare" />
                  <span className="badge bg-success rounded-circle">2</span>
                  Cart
                </span>
              </li>
              <li
                className="account inline-item">
                
                <span onClick={() => setisOpenDropDown(!isOpenDropDown)}>
                  <VscAccount className="compare" />
                  <span className="badge bg-success rounded-circle"></span>
                  Account
                </span>

                {isOpenDropDown !== false && (
                  <ul className="dropdownMenu">
                    <li>
                      <Button>
                        {" "}
                        <Person2OutlinedIcon /> My Account
                      </Button>
                    </li>
                    <li>
                      <Button>
                        {" "}
                        <LocationOnOutlinedIcon /> Order Traking
                      </Button>
                    </li>
                    <li>
                      <Button>
                        {" "}
                        <FavoriteBorderOutlinedIcon /> My Whishlist
                      </Button>
                    </li>
                    <li>
                      <Button>
                        {" "}
                        <SettingsOutlinedIcon /> Setting
                      </Button>
                    </li>
                    <li>
                      <Button>
                        {" "}
                        <LogoutOutlinedIcon /> Sing out
                      </Button>
                    </li>
                  </ul>
                )}
               
              </li>
            </ul>
            </ClickAwayListener>
          </div>
        </div>
      </header>
      <Nav/>
      </div>
    </>
  );
};

export default Header;
