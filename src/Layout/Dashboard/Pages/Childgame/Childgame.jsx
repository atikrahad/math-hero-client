import Add from "./Components/Add";
import Divide from "./Components/Divide";
import Multiply from "./Components/Multiply";
import Subtract from "./Components/Subtract";

const Childgame = () => {
  return (
    <div>
        <h1 className="text-center mt-5">Double click to switch another tab</h1>
      <div
        role="tablist"
        className="tabs max-w-screen-xl mx-auto py-5 tabs-lifted"
      >
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
          <Add />
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
          <Subtract />
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
          <Multiply />
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
          <Divide />
        </div>
      </div>
    </div>
  );
};

export default Childgame;
