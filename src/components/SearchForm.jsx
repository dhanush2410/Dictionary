import { useState } from 'react';

const SearchForm = ({ onSearch, theme }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      marginBottom: '2rem',
      boxShadow: `0 2px 8px rgba(0,0,0,0.1)`,
      borderRadius: '8px',
      overflow: 'hidden'
    }}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a word..."
        style={{
          flex: 1,
          padding: '1rem',
          border: 'none',
          fontSize: '1rem',
          backgroundColor: theme.card,
          color: theme.text
        }}
      />
      <button
        type="submit"
        style={{
          padding: '0 1.5rem',
          backgroundColor: theme.accent,
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: 'bold',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#3a5a8a'}
        onMouseOut={(e) => e.target.style.backgroundColor = theme.accent}
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;