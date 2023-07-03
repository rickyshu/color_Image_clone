// react components
import Square from "./components/largeSquare/Square";

// css
import "./App.css";

//constants
import { BORDER, SIZE } from "./constants";

function App() {
  const { borderLine } = BORDER;
  const { innerSquareSize, outterSquareSize } = SIZE;

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="box">
            <Square>
              <div className="quadrant">
                <Square borderBottom={borderLine} />
                <Square bgColor="#f91aff" borderLeft={borderLine} borderRight={borderLine} />
                <Square bgColor="#f91aff" borderBottom={borderLine} />
              </div>
            </Square>
            <Square bgColor="black">
              <div className="quadrant">
                <Square bgColor="#001fff" position="absolute" top="50%" left="50%" translate="-50% -50% " zIndex="1" borderBottom={borderLine} borderLeft={borderLine} borderRight={borderLine} borderTop={borderLine} />
                <Square bgColor="#3fffff" position="absolute" bottom="0" right="0" borderBottom={borderLine} />
              </div>
            </Square>
            <Square bgColor="black">
              <div className="quadrant">
                <Square bgColor="white" position="absolute" top="50%" left="50%" translate="-49% -51.8%" zIndex="1" borderRight={borderLine} borderTop={borderLine} />
              </div>
            </Square>
            <Square bgColor="#fffe00">
              <div className="quadrant"></div>
            </Square>
          </div>
          <div>
            <Square width={outterSquareSize} height={outterSquareSize} bgColor="#40fe00" position="absolute" top="50%" left="50%" translate="-49% -50%" borderTop={borderLine} borderRight={borderLine} borderLeft={borderLine} borderBottom={borderLine}>
              <div className="quadrant">
                <Square width={innerSquareSize} height={innerSquareSize} bgColor="#f90000" position="absolute" top="25%" left="0" borderTop={borderLine} borderRight={borderLine} />
                <Square width={innerSquareSize} height={innerSquareSize} bgColor="white" position="absolute" bottom="0" left="24%" borderLeft={borderLine} borderTop={borderLine} borderRight={borderLine} />
              </div>
            </Square>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
