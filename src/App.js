import PasswordBox from './components/PasswordBox';
import SettingsBox from './components/SettingsBox';
import LengthSlider from './components/LengthSlider';
import GenerateButton from './components/GenerateButton';
import SuccessMessage from './components/SuccessMessage';
import { useState, useEffect } from 'react';

function App() {
  const lowerString = 'abcdefghijklmnopqrstuvwxyz';
  const upperString = lowerString.toUpperCase();
  const numsString = '0123456789';
  const symbolsString = '!@#$%^&*';

  const [settings, setSettings] = useState({
    length: 16,
    uppercase: true,
    numbers: true,
    symbols: true,
  });
  const [password, setPassword] = useState('');
  const [popUpMessage, setPopUpMessage] = useState('');

  //Uses short circuting to build the string that random characters will be chosen from
  const buildCharsString = () => {
    const { uppercase, numbers, symbols } = settings;

    return `${lowerString}${uppercase && upperString}${numbers && numsString}${
      symbols && symbolsString
    }`;
  };

  const generatePassword = () => {
    const chars = buildCharsString();
    let newPassword = '';

    for (let i = 0; i < settings.length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(newPassword);
  };

  const setLength = (e) => {
    const newSettings = { ...settings };
    newSettings.length = e.currentTarget.value;
    setSettings(newSettings);
  };

  const bindCopyListener = () => {
    const passInput = document.getElementById('passInput');
    const copyButton = document.getElementById('copyButton');

    const copyToClipBoard = () => {
      passInput.select();
      document.execCommand('copy');
      passInput.blur();
    };

    copyButton.addEventListener('click', copyToClipBoard);

    return () => {
      copyButton.removeEventListener('click', copyToClipBoard);
    };
  };

  useEffect(bindCopyListener, []);

  useEffect(() => {
    generatePassword();
  }, []);

  return (
    <div className="bg-true-gray-800 min-h-screen py-12">
      {popUpMessage && <SuccessMessage message={popUpMessage} />}

      <div className="mx-auto max-w-xl w-11/12 bg-true-gray-900 p-8 rounded shadow">
        <h1 className="mb-8 mb-2 text-white font-bold text-xl">
          Password Generator
        </h1>
        <PasswordBox password={password} setPopUpMessage={setPopUpMessage} />
        <LengthSlider length={settings.length} setLength={setLength} />
        <SettingsBox settings={settings} setSettings={setSettings} />
        <GenerateButton generate={generatePassword} />
      </div>
    </div>
  );
}

export default App;
