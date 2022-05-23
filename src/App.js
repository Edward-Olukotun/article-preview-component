import { useState } from "react";
import "./App.css";
import Share from "./Share";

function App() {

  const [isToggle, setIsToggle] = useState(false);

  function handleClick() {
    setIsToggle((prevState) => !prevState);
  }
  return (
    <>

      <main className="main">
        <section className="container">
          <div className="top-image">
            <img src="../images/drawers.jpg" alt="" />
          </div>
          <div className="top">
            <h3>
              Shift the overall look and feel by adding these wonderful touches to
              furniture in your home
            </h3>
            <p>
              Ever been in a room and felt like something was missing? Perhaps it
              felt slightly bare and uninviting. I've got some simple tips to help
              you make any room feel complete.
            </p>
          </div>
          {!isToggle ?
            <div className="down">
              <div className="profile-image">
                <img src="../images/avatar-michelle.jpg" alt="" />
              </div>
              <section>
                <h5>Michelle Appleton</h5>
                <p>28 Jun 2020</p>
              </section>
              <div className="share-image">
                <img src="./images/icon-share.svg" alt="" onClick={handleClick} />
              </div>
            </div> : <Share />}
        </section>
      </main>
    </>
  );
}

export default App;