function Setting(props) {
  const { name, setting, setter } = props;

  return (
    <div className="w-full bg-true-gray-700 p-5 rounded shadow flex items-center text-white text-xl mb-4 justify-between">
      <p>{name}</p>
      <label class="switch">
        <input
          type="checkbox"
          checked={setting}
          onChange={() => {
            setter(name.toLowerCase());
          }}
        />
        <span class="slider round bg-true-gray-300"></span>
      </label>
    </div>
  );
}

export default Setting;
