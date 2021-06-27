import { Fragment } from 'react';

function LengthSlider(props) {
  const { length, setLength } = props;
  return (
    <Fragment>
      <h1 className="text-true-gray-100 mb-2">Length: {length}</h1>
      <div className="w-full bg-true-gray-700 p-5 rounded shadow flex items-center text-white text-xl">
        <p className="text-white mr-3">4</p>
        <input
          type="range"
          min="4"
          value={length}
          max="32"
          onChange={setLength}
          className="mr-3 w-full"
        />
        <p>32</p>
      </div>
    </Fragment>
  );
}

export default LengthSlider;
