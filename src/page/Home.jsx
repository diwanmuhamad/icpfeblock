import styles from "../style";
import { useEffect, useState } from "react";
import {
  Chat
} from "../page";
import axios from "axios";

const Home = () => {
  const location = window.location;
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
  }, []);

  return (
    <Chat/>
  );
};

export default Home;
