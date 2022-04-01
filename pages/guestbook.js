import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Header from "components/Header";

const Guestbook = () => {
  const [message, setMessages] = useState([]);

  useEffect(() => {
    async function getMessages() {
      const results = await axios.get("/api");
      console.log(results);
    }

    getMessages();
  }, []);

  return (
    <>
      <Header />
    </>
  );
};

export default Guestbook;
