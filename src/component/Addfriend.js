import { useState } from "react";

function Addfriend({ onAddfriend }) {
  const [name, setname] = useState("");
  const [image, setimage] = useState("https://i.pravatar.cc/48");

  const handlesubmit = (evt) => {
    evt.preventDefault();

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image,
      balance: 0,
    };

    onAddfriend(newFriend);

    setname("");
    setimage("https://i.pravatar.cc/48");
  };

  return (
    <>
      <form className=".form-add-friend" onSubmit={handlesubmit}>
        <label>Friend Name</label>
        <input
          type="text"
          className="border-danger"
          required
          value={name}
          onChange={(evt) => setname(evt.target.value)}
        />
        <label>Image Url</label>
        <input
          type="text"
          className="border-danger"
          value={image}
          onChange={(evt) => setimage(evt.target.value)}
        />

        <button className="button">ADD</button>
      </form>
    </>
  );
}

export default Addfriend;
