import React, { useEffect, useState } from "react";
import styles from './rest.module.css';
import RestList from "./restList";
import input from '../data/Restautant.json'

const Restaurants = () => {

  const [Data, setData] = useState([]);
  const [h2l, setH2l] = useState("");
  const [l2h, setL2h] = useState("")
  //console.log(Data)

let  data = input.Data
  console.log("dffs",data)
  useEffect(() => {
    setData(data)
   
  }, []);
 
 
  const handleChange = (e) => {
    let filter = e.target.value;

    if (e.target.value === "4") {
      let filterData = Data.filter((elem, index, arr) => {
        return elem.rating > filter;
      });
      setData(filterData);
    }
    if (e.target.value === "3") {
      let filterData = Data.filter((elem, index, arr) => {
        return elem.rating > filter;
      });
      setData(filterData);
    }
    if (e.target.value === "2") {
      let filterData = Data.filter((elem, index, arr) => {
        return elem.rating > filter;
      });
      setData(filterData);
    }
    if (e.target.value === "1") {
      let filterData = Data.filter((elem, index, arr) => {
        return elem.rating > filter;
      });
      setData(filterData);
    }
  };
  const handlePayments = (e) => {
    let payment = e.target.value;
    if (payment === "cash") {
      let payFilters = Data.filter((elem) => {
        return elem.payment_methods.cash && !elem.payment_methods.card;
      });
      setData(payFilters);
    }
    if (payment === "card") {
      let payFilters = Data.filter((elem) => {
        return elem.payment_methods.card && !elem.payment_methods.cash;
      });
      setData(payFilters);
    }
    if (payment === "all") {
      let payFilters = Data.filter((elem) => {
        return elem.payment_methods.card && elem.payment_methods.cash;
      });
      setData(payFilters);
    }
  };
  const handleh2l =()=>{
       let high= Data.sort(function(a,b){return b.costForTwo - a.costForTwo})
        setH2l(high);
  }
  const handlel2h =()=>{
    let low= Data.sort(function(a,b){return a.costForTwo - b.costForTwo})
      setL2h(low);
  }


  return (
    <>
      <div>
        <label> Sort By Ratings</label>
        <select name="Sort By Ratings" onChange={handleChange}>
          <option value="">Select</option>
          <option value="4">Above 4 Stars</option>
          <option value="3">Above 3 Stars</option>
          <option value="2">Above 2 Stars</option>
          <option value="1">Above 1 Stars</option>
        </select>
      </div>
      <div>
        <label> Sort By Payments</label>
        <select name="" onChange={handlePayments}>
          <option value="">Select</option>
          <option value="cash">Cash Only</option>
          <option value="card">Card OInly</option>
          <option value="all">All Payment Options</option>
        </select>
      </div>
      <div>
        <label> Sort By Price</label>
        <button type="button" className="btn btn-primary py-0 m-3" onClick={handleh2l}>High To Low</button>
        <button type="button" className="btn btn-primary py-0 m-3" onClick={handlel2h}>Low To High</button>
      </div>
      


      <div className={styles.main}>
        {Data.map((elem, index) => {
          return <RestList key={index} {...elem} />;
        })}
      </div>
    </>
  );
};

export default Restaurants;
