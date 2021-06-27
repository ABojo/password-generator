import PasswordBox from './components/PasswordBox';
import SettingsBox from './components/SettingsBox';
import { useState, useEffect } from 'react';

function App() {
  const lowerString = 'abcdefghijklmnopqrstuvwxyz';
  const upperString = lowerString.toUpperCase();
  const numsString = '0123456789';
  const symbolsString = '!@#$%^&*';

  const [settings, setSettings] = useState({
    length: 12,
    uppercase: true,
    numbers: true,
    symbols: true,
  });
  const [password, setPassword] = useState('');

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

  useEffect(() => {
    generatePassword();
  }, []);

  return (
    <div className="bg-true-gray-100 min-h-screen py-12">
      <div className="mx-auto max-w-4xl w-11/12 bg-true-gray-900 p-8 rounded shadow">
        <h1 className="mb-8 mb-2 text-white font-bold text-xl">
          Password Generator
        </h1>

        <PasswordBox password={password} />
        <SettingsBox />
      </div>
    </div>
  );
}

export default App;
