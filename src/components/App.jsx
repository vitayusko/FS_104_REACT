import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Message from "./Message/Message";


const App = () => {
  return (
      <main>
          <Header />
          <Message author = 'petro' message = 'find a job'/>
          <Footer/>
          
  </main>
  );
}

export default App;