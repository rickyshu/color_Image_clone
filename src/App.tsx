// react components
import Square from "./components/largeSquare/Square";

// css
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="box">
            <Square>
              <div className="quadrant">
                <Square />
                <Square bgColor="#f91aff" />
                <Square bgColor="#f91aff" />
              </div>
            </Square>
            <Square bgColor="black">
              <div className="quadrant">
                <Square bgColor="#001fff" position="absolute" top="50%" left="50%" translate="-50% -50% " zIndex="1" />
                <Square bgColor="#3fffff" position="absolute" bottom="0" right="0" />
              </div>
            </Square>
            <Square bgColor="black">
              <div className="quadrant">
                <Square bgColor="white" position="absolute" top="50%" left="50%" translate="-50% -50%" zIndex="1" />
              </div>
            </Square>
            <Square bgColor="#fffe00">
              <div className="quadrant"></div>
            </Square>
          </div>
          <div>
            <Square width={289} height={289} bgColor="#40fe00" position="absolute" top="50%" left="50%" translate="-50% -50%">
              <div className="quadrant">
                <Square bgColor="#f90000" position="absolute" top="25%" left="0" />
                <Square bgColor="white" position="absolute" bottom="0" left="24%" />
              </div>
            </Square>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
