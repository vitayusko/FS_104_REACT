import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Message from "./Message/Message";
import Checklist from "./Checklist/Checklist";
import UncontrolledForms from "./Forms/UncontrolledForms";
import ControlledForms from "./Forms/CcontrolledForms";

const App = () => {
  const register = (data) => {
    console.log("Data register in progres");
    setTimeout(() => {
      console.log("register done");
      console.log(data);
    }, 3000);
  };
  return (
    <main>
      {/* <Header />
          <Message author='petro' message='find a job' />
          <Footer /> */}
      {/* <Checklist /> */}
      {/* <UncontrolledForms /> */}
      <ControlledForms register={register} />
    </main>
  );
};

export default App;
