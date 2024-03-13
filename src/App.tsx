import React from "react";
import MainLayout from "components/MainLayout";
import Home from "pages/Home";
import "./App.css";
import JobList from "pages/Jobs";

function App() {
  return (
    <MainLayout>
      {/* <Home /> */}
      <JobList />
    </MainLayout>
  );
}

export default App;
