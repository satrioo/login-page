import Left from "../components/Left";
import Right from "../components/Right";

function Home() {
  return (
    <div className=" flex  w-screen h-screen">
        <div className=" lg:w-7/12 md:w-6/12 hidden bg-purples md:flex items-center">{Left()}</div>
        <div className=" p-6 md:p-0 w-screen lg:w-5/12 md:w-6/12 md:flex items-center justify-center">{Right()}</div>
    </div>
  );
}

export default Home;
