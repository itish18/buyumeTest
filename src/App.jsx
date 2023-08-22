import axios from "axios";

import { useEffect, useState } from "react";
import Post from "./components/Post";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const func = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(res?.data);
        setFilteredData(res?.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    func();
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const filteredData =
      input !== ""
        ? data?.filter((item) =>
            item?.title?.toLowerCase().includes(input.toLowerCase())
          )
        : data;
    setFilteredData(filteredData);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Find</button>
      </form>
      {isLoading ? (
        "Loading...."
      ) : (
        <>
          {filteredData.length > 0 ? (
            <Post postList={filteredData} />
          ) : (
            "Not Matched"
          )}
        </>
      )}
    </div>
  );
}

export default App;
