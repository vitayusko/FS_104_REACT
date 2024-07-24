import React, { useState, useEffect } from "react";
import Footer from "./Footer/Footer";
import Message from "./Message/Message";
import Checklist from "./Checklist/Checklist";
import UncontrolledForms from "./Forms/UncontrolledForms";
import ControlledForms from "./Forms/CcontrolledForms";
import UserForm from "./UserForm/UserForm";
import List from "./List/List";
import axios from "axios";

const App = () => {
  const [hits, setHits] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://hn.algolia.com/api/v1/search?query=react"
        );
        setHits(res.data.hits);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  // const register = (data) => {
  //   console.log("Data register in progress");
  //   setTimeout(() => {
  //     console.log("register done");
  //     console.log(data);
  //   }, 3000);
  // };

  return (
    <main>
      {/* <Header />
          <Message author='petro' message='find a job' />
          <Footer /> */}
      {/* <Checklist /> */}
      {/* <UncontrolledForms /> */}
      {/* <ControlledForms register={register} /> */}
      {/* <UserForm /> */}
      <List items={hits} />
    </main>
  );
};

export default App;
