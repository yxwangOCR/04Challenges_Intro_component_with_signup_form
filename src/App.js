import Intro from "./components/Intro";
import CalltoAction from "./components/CalltoAction";
import Form from "./components/Form";
function App() {
  return (
    <div className='App'>
      <Intro />
      <div className="desktop-right-block">
        <CalltoAction />
        <Form />
      </div>
    </div>
  );
}

export default App;
