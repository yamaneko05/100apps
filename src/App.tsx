import { Container } from "@mui/material";
import Profile from "./components/Profile";
import React from "react";
import Weather from "./components/Weather";

const Section: React.FC<{children: React.ReactNode, title: string}> = ({ children, title }) => {
  return <>
    <div style={{marginBottom: 32}}>
      <h2>{title}</h2>
      {children}
    </div>
  </>
}

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Section title="天気" children={<Weather />} />
        <Section title="プロフィール" children={<Profile />} />
      </Container>
    </div>
  );
}

export default App;
