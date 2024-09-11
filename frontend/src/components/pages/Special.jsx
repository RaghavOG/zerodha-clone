import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../../redux/themeSlice.js'; // adjust the import path according to your file structure

const Special = () => {
  const themeState = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(setTheme(themeState === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      className={`w-full h-screen flex justify-center items-center text-5xl ${
        themeState === 'light' ? 'bg-white text-black' : 'bg-black text-white'
      }`}
    >
      <button
        onClick={toggleTheme}
        className={`px-6 py-2 text-xl rounded ${
          themeState === 'light' ? 'bg-black text-white' : 'bg-white text-black'
        }`}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Special;
