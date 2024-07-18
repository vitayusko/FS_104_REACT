import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Message from "./Message/Message";
import Checklist from "./Checklist/Checklist";
import UncontrolledForms from "./Forms/UncontrolledForms";
import ControlledForms from "./Forms/CcontrolledForms";

const App = () => {
  return (
    <main>
      {/* <Header />
          <Message author='petro' message='find a job' />
          <Footer /> */}
      {/* <Checklist /> */}
      {/* <UncontrolledForms /> */}
      <ControlledForms />
    </main>
  );
};

export default App;
