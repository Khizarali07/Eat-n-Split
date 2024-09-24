import "../index.css";

function Friendlist({
  friends,
  onselectfriend,
  showsplitbill,
  selectedfriend,
}) {
  return (
    <>
      <div className="centering">
        <ul>
          {friends.map((element) => {
            return (
              <li
                className={
                  showsplitbill && selectedfriend.id === element.id
                    ? "selected"
                    : ""
                }
              >
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>

                {element.balance < 0 && (
                  <p>
                    You owe {element.name} {Math.abs(element.balance)}PKR
                  </p>
                )}
                {element.balance > 0 && (
                  <p>
                    {element.name} owe you {Math.abs(element.balance)}PKR
                  </p>
                )}
                {element.balance === 0 && (
                  <p>{element.name} and you are even</p>
                )}

                <button
                  className="button"
                  onClick={() => onselectfriend(element)}
                >
                  {showsplitbill && selectedfriend.id === element.id
                    ? "Close"
                    : "Select"}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Friendlist;
