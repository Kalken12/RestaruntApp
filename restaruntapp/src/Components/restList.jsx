import React from "react";
import styles from "./rest.module.css";

const RestList = (props) => {
  //  console.log(props.name);
  return (
    <>
      <div className={styles.backDiv}>
        <div>
          <div className={styles.children}>
            <div className={styles.imgDiv}>
              <img className={styles.img} src={props.src} alt="" />
            </div>

            <div>
              <div className={styles.nameRate}>
                <div className={styles.name}>
                  <p>{props.name}</p>
                </div>
                <div className={styles.rating}>
                  <h4>{props.rating}</h4>
                </div>
              </div>
              <div className={styles.votesDiv}>
                <div>
                  <p
                    className={styles.category}
                  >{`${props.cuisine[0]}, ${props.cuisine[1]}, ${props.cuisine[2]}, ${props.cuisine[3]}`}</p>
                </div>
                <div>
                  <p className={styles.nOfRate}>{` ${props.votes} Votes`}</p>
                  <p className={styles.nOfRate}>
                    {` ${props.reviews} reviews`}
                  </p>
                </div>
              </div>
              <div className={styles.votesDiv}>
                <div>{`Min Rs ${props.minOrder} . Up to 30 min`}</div>
              </div>
              <div className={styles.votesDiv}>
                <div>
                  {props.payment_methods.card && props.payment_methods.cash ?"Both Cash & Card Payment Methods Available" : props.payment_methods.card ? "Accepts Online Payments Only" : " Cash Payment Only"   }
                </div>
              </div>
            </div>
          </div>
          <div className={styles.order}>
            <div className={styles.orderBtn}>
              <p> Order Online  </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestList;
