import Add from "./Components/Add";
import Subtract from "./Components/Subtract";

const Childgame = () => {
  return (
    <div role="tablist" className="tabs max-w-screen-xl mx-auto py-5 tabs-lifted">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab text-2xl"
        aria-label="Addition"
        checked
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <Add/>
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab text-2xl"
        aria-label="Substract"
        
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <Subtract/>
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab text-2xl"
        aria-label="Multiply"
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        Tab content 3
      </div>
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab text-2xl"
        aria-label="Divition"
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        Tab content 3
      </div>
    </div>
  );
};

export default Childgame;
