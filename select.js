import React, { useState } from "react";
import "../selectDrop/select.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ClickAwayListener } from  "@mui/base/ClickAwayListener";
import { FilterList } from "@mui/icons-material";


const Select = ({data,placeholder, icon}) => {
  const [isOpenSelect, setisOpenSelect] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(0);
  const [selectedItem, setselectedItem] = useState(placeholder);

  const[listData, setListData] = useState(data);
  const[listData2, setListData2] = useState(data);

  const openSelect = () => {
    setisOpenSelect(!isOpenSelect);
  };

  const closeSelect = (index, name) => {
    setselectedIndex(index);
    setisOpenSelect(false);
    setselectedItem(name);
  };

  const filterList=(e)=>{
    const keyword = e.target.value.toLowerCase();
   
    const list = listData2.filter((item)=>{
        return item.toLowerCase().includes(keyword);
    })
    
    const list2 = list.filter((item, index) => list.indexOf(item) === index);
      
    
    setListData(list2);

  }

  return (
    <ClickAwayListener onClickAway={()=>setisOpenSelect(false)}>
    <div className="selectDropWrapper cursor position-relative ">
      {icon}
      
      <span className="openSelect" onClick={openSelect}>
        {selectedItem.length>14 ? selectedItem.substr(0,14)+'...' : selectedItem} <KeyboardArrowDownIcon className="arrow" />
      </span>

      {isOpenSelect === true && (
        <div className="selectDrop">
          <div className="searchFiled">
            <input type="text" placeholder="Search here..." onChange={filterList} />
            <ul className="searchResults">
            <li key={0}
                onClick={() => closeSelect(0, placeholder)}
                className={`${selectedIndex === 0 ? "active" : ""}`}
              >
                {placeholder}
              </li>

              {
                listData.map((item,index)=>{
                  return(
                    <li key={index+1}
                onClick={() => closeSelect(index+1, item)}
                className={`${selectedIndex === index+1 ? "active" : ""}`}
              >
                {item}
              </li>

                  )

                })
              }
              {/* <li
                onClick={() => closeSelect(0, "All Categories")}
                className={`${selectedIndex === 0 ? "active" : ""}`}
              >
                All Categories
              </li>
              <li
                onClick={() => closeSelect(1, "Milks and Dairies")}
                className={`${selectedIndex === 1 ? "active" : ""}`}
              >
                Milks and Dairies
              </li>
              <li
                onClick={() => closeSelect(2, "Wines and Drinks")}
                className={`${selectedIndex === 2 ? "active" : ""}`}
              >
                Wines and Drinks
              </li>
              <li
                onClick={() => closeSelect(3, "Clothing & Beauty")}
                className={`${selectedIndex === 3 ? "active" : ""}`}
              >
                Clothing & Beauty
              </li>
              <li
                onClick={() => closeSelect(4, "Fresh Seafood")}
                className={`${selectedIndex === 4 ? "active" : ""}`}
              >
                Fresh Seafood
              </li>
              <li
                onClick={() => closeSelect(5, "Pet Foods & Toy")}
                className={`${selectedIndex === 5 ? "active" : ""}`}
              >
                Pet Foods & Toy
              </li>
              <li
                onClick={() => closeSelect(6, "Fast food")}
                className={`${selectedIndex === 6 ? "active" : ""}`}
              >
                Fast food
              </li>
              <li
                onClick={() => closeSelect(7, "Banking material")}
                className={`${selectedIndex === 7 ? "active" : ""}`}
              >
                Banking material
              </li>
              <li
                onClick={() => closeSelect(8, "Vegetables")}
                className={`${selectedIndex === 8 ? "active" : ""}`}
              >
                Vegetables
              </li>
              <li
                onClick={() => closeSelect(9, "Fresh Fruit")}
                className={`${selectedIndex === 9 ? "active" : ""}`}
              >
                Fresh Fruit
              </li>
              <li
                onClick={() => closeSelect(10, "Bread and juice")}
                className={`${selectedIndex === 10 ? "active" : ""}`}
              >
                Bread and juice
              </li> */}
            </ul>
          </div>
        </div>
      )}
    </div>
    </ClickAwayListener>


  );
};

export default Select;
