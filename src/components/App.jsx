import React, { useState, useEffect } from "react";
import { fetchNews } from "../services/api";
import List from "./List/List";
import { SearchBar } from "./SearchBar/SearchBar";
import { RotatingLines } from "react-loader-spinner";
import Loader from "./Loader/Loader";

const App = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true); // Устанавливаем isLoading в true перед началом загрузки данных
      try {
        const data = await fetchNews(query, 25);
        setHits(data.hits);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false); // Устанавливаем isLoading в false после завершения загрузки данных
      }
    };
    getData();
  }, [query]);

  return (
    <main>
      <SearchBar setQuery={setQuery} /> {/* Передаем setQuery в SearchBar */}
      {isLoading && <Loader />}
      <List items={hits} />
    </main>
  );
};

export default App;

// import React, { useState, useEffect } from "react";
// import Footer from "./Footer/Footer";
// import Message from "./Message/Message";
// import Checklist from "./Checklist/Checklist";
// import UncontrolledForms from "./Forms/UncontrolledForms";
// import ControlledForms from "./Forms/CcontrolledForms";
// import UserForm from "./UserForm/UserForm";
// import List from "./List/List";
// import { fetchNews } from "../services/api";
// import { SearchBar } from "./SearchBar/SearchBar";

// const App = () => {
//   const [hits, setHits] = useState([]);
//   const [query, setQuery] = useState("react");

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await fetchNews(query, 25);
//         setHits(response.hits);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getData();
//   }, []);

//   // const register = (data) => {
//   //   console.log("Data register in progress");
//   //   setTimeout(() => {
//   //     console.log("register done");
//   //     console.log(data);
//   //   }, 3000);
//   // };

//   return (
//     <main>
//       {/* <Header />
//           <Message author='petro' message='find a job' />
//           <Footer /> */}
//       {/* <Checklist /> */}
//       {/* <UncontrolledForms /> */}
//       {/* <ControlledForms register={register} /> */}
//       {/* <UserForm /> */}
//       <SearchBar setQuery={setQuery} />
//       <List items={hits} />
//     </main>
//   );
// };

// export default App;
