import Setting from './Setting';

function SettingsBox(props) {
  const { settings, setSettings } = props;

  const setter = (name) => {
    const newSettings = { ...settings };
    newSettings[name] = !settings[name];
    setSettings(newSettings);
  };

  return (
    <div className="w-full mb-8">
      <h1 className="text-true-gray-100 mb-2">Settings</h1>
      <Setting name="Uppercase" setting={settings.uppercase} setter={setter} />
      <Setting name="Numbers" setting={settings.numbers} setter={setter} />
      <Setting name="Symbols" setting={settings.symbols} setter={setter} />
    </div>
  );
}

export default SettingsBox;
