import preorderImage from "../../../assets/common/images/Preorder image/Preorder Keyboard.png"

const Preorder = () => {
  return (
    <>
     <div className="preorder-section">
        <div className="container">
          <div className="row" id="wrap-preorder">
            <div className="col-12 col-sm-12 col-md-6">
              <div className="preorder-text">
                <div className="preorder-sub-title ">
                  <i className="fa-solid fa-bookmark" />
                  <p>Hot Preorder</p>
                </div>
                <h1>
                  Enhance your <br /> Gaming Experience
                </h1>
                <div className="preorder-timer">
                  <span className="timer" id="hour">
                    00
                  </span>
                  <span className="timer" id="minute">
                    00
                  </span>
                  <span className="timer" id="second">
                    00
                  </span>
                </div>
                <button className="preorder-button">Check Now!</button>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 wrap-preorder-image">
              <div className="preorder-image">
                <img
                  src={preorderImage}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Preorder