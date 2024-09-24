import { useState } from "react";
import Addfriend from "./component/Addfriend";
import FormSplitbill from "./component/FormSplitbill";
import Friendlist from "./component/Friendlist";
import "./index.css";

function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];

  const [friends, setfriends] = useState(initialFriends);
  const [showaddfriend, setshowaddfriend] = useState(false);
  const [showsplitbill, setshowsplitbill] = useState(false);
  const [selectedfriend, setselectedfriend] = useState([]);

  const handlefriendform = () => {
    setshowaddfriend(!showaddfriend);
    setshowsplitbill(false);
  };

  const handlesplitform = (friend) => {
    if (selectedfriend.id === friend.id) {
      setshowsplitbill(!showsplitbill);
    } else {
      setshowsplitbill(true);
    }
    setshowaddfriend(false);
    setselectedfriend(friend);
  };

  const addfriends = (addfriend) => {
    setfriends((friend) => [...friend, addfriend]);
    setshowaddfriend(false);
  };

  const handlesuplit = (val) => {
    console.log(val);

    setfriends((fri) =>
      fri.map((element) =>
        element.id === selectedfriend.id
          ? { ...element, balance: element.balance + val }
          : element
      )
    );
    setshowsplitbill(false);
  };

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <Friendlist
            friends={friends}
            onselectfriend={handlesplitform}
            showsplitbill={showsplitbill}
            selectedfriend={selectedfriend}
          />
          {showaddfriend && <Addfriend onAddfriend={addfriends} />}
          <button className="button my-3 last" onClick={handlefriendform}>
            {showaddfriend ? "Close" : "Add Friends"}
          </button>
        </div>
        {showsplitbill && (
          <FormSplitbill
            selectedfriend={selectedfriend}
            splitbill={handlesuplit}
            key={selectedfriend.id}
          />
        )}
      </div>
    </>
  );
}

export default App;
