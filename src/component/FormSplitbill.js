import { useState } from "react";

function FormSplitbill({ selectedfriend, splitbill }) {
  const [bill, setbill] = useState("");
  const [yours, setyours] = useState("");
  const [whoispaying, setwhoispaying] = useState("you");
  const friendexpense =
    bill && yours ? (bill - yours < 0 ? 0 : bill - yours) : "";

  const handlesubmit = (evt) => {
    evt.preventDefault();

    splitbill(whoispaying === "you" ? -friendexpense : friendexpense);
  };

  return (
    <>
      <form
        className="form-split-bill d-flex flex-column justify-content-center"
        onSubmit={handlesubmit}
      >
        <h3>Form Split Bill of {selectedfriend.name}</h3>
        <div className="d-flex flex-column justify-content-center align-items-center my-5">
          <label className="labelposition">Bill Value</label>
          <input
            type="text"
            className="border-danger inputposition"
            value={bill}
            onChange={(evt) => Number(setbill(evt.target.value))}
            required
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center my-5">
          <label className="labelposition">Your Expense</label>
          <input
            type="text"
            className="border-danger inputposition"
            value={yours}
            onChange={(evt) => Number(setyours(evt.target.value))}
            required
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center my-5">
          <label className="labelposition">
            {selectedfriend.name}'s Expense
          </label>
          <input
            type="text"
            className="inputposition"
            disabled
            value={friendexpense}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center my-5">
          <label className="labelposition">Who is paying the bill 😃</label>
          <select
            className="inputposition"
            value={whoispaying}
            onChange={(evt) => setwhoispaying(evt.target.value)}
          >
            <option value="you">You</option>
            <option value="friend">{selectedfriend.name}</option>
          </select>
        </div>

        <button className="button">Split Bill</button>
      </form>
    </>
  );
}

export default FormSplitbill;
