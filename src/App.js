import "./App.css";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Pets from "./Pets";
import Players from "./Players";

function App() {
  return (
    <>
      {" "}
      {/* EX2 */}
      <Navigation></Navigation>
      <Pets></Pets>
      <Footer></Footer>
      {/* EX3  */}
      {/* <Players></Players> */}
      {/* EX4 */}
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <div className="text-content">
    //       <h2>Hello</h2>
    //       <h2>React</h2>
    //     </div>
    //     <button><a href="/DesignImage">Design image</a></button>
    //   </header>
    // </div>
  );
}

export default App;
