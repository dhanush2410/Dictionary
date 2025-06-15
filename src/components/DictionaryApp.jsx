import { useState } from 'react';
import SearchForm from './SearchForm';
import WordDefinition from './WordDefinition';

const DictionaryApp = () => {
  const [wordData, setWordData] = useState(null);
  const [fontStyle, setFontStyle] = useState('sans-serif');
  const [theme, setTheme] = useState('light');
  const [error, setError] = useState(null);

  const themes = {
    light: {
      background: '#f8f9fa',
      text: '#212529',
      accent: '#4a6fa5',
      card: '#ffffff'
    },
    dark: {
      background: '#212529',
      text: '#f8f9fa',
      accent: '#6c8fc7',
      card: '#343a40'
    },
    sepia: {
      background: '#f4ecd8',
      text: '#5b4636',
      accent: '#986841',
      card: '#e3d5b8'
    }
  };

  const handleSearch = async (word) => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!response.ok) throw new Error('Word not found');
      const data = await response.json();
      setWordData(data[0]);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWordData(null);
    }
  };

  return (
    <div style={{
      backgroundColor: themes[theme].background,
      color: themes[theme].text,
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: fontStyle,
      transition: 'all 0.3s ease'
    }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        borderBottom: `2px solid ${themes[theme].accent}`,
        paddingBottom: '1rem'
      }}>
        <h1 style={{ color: themes[theme].accent }}>Dictionary App</h1>
        <div>
          <select 
            value={fontStyle} 
            onChange={(e) => setFontStyle(e.target.value)}
            style={{
              marginRight: '1rem',
              padding: '0.5rem',
              backgroundColor: themes[theme].card,
              border: `1px solid ${themes[theme].accent}`
            }}
          >
            <option value="sans-serif">Sans-serif</option>
            <option value="serif">Serif</option>
            <option value="monospace">Monospace</option>
          </select>
          <select 
            value={theme} 
            onChange={(e) => setTheme(e.target.value)}
            style={{
              padding: '0.5rem',
              backgroundColor: themes[theme].card,
              border: `1px solid ${themes[theme].accent}`
            }}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="sepia">Sepia</option>
          </select>
        </div>
      </header>

      <SearchForm onSearch={handleSearch} theme={themes[theme]} />
      
      {error && (
        <div style={{
          backgroundColor: '#ffebee',
          color: '#c62828',
          padding: '1rem',
          borderRadius: '4px',
          margin: '1rem 0'
        }}>
          {error}
        </div>
      )}

      {wordData && <WordDefinition data={wordData} theme={themes[theme]} />}
    </div>
  );
};

export default DictionaryApp;