import React, { useState } from "react";

function CreateArea(props) {
  const [ip, setIp] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setIp((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleAdd(event) {
    props.onAdd(ip); //This is sending the ip to the handleAdd function in App.jsx file

    setIp({
      title: "",
      content: "",
    }); // seting the input feild back to normal i.e empty

    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={ip.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={ip.content}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
