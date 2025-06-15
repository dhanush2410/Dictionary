const WordDefinition = ({ data, theme }) => {
  return (
    <div style={{
      backgroundColor: theme.card,
      borderRadius: '8px',
      padding: '2rem',
      boxShadow: `0 2px 12px rgba(0,0,0,0.1)`,
      marginBottom: '2rem'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem'
      }}>
        <div>
          <h2 style={{ 
            margin: 0,
            color: theme.accent,
            fontSize: '2rem'
          }}>
            {data.word}
          </h2>
          <p style={{ 
            margin: '0.5rem 0 0',
            color: '#6c757d',
            fontStyle: 'italic'
          }}>
            {data.phonetic}
          </p>
        </div>
        <button style={{
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.5rem',
          color: theme.accent
        }}>
          🔊
        </button>
      </div>

      {data.meanings.map((meaning, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <h3 style={{
            margin: '0 0 1rem',
            color: theme.accent,
            fontStyle: 'italic',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              backgroundColor: theme.accent,
              borderRadius: '50%',
              marginRight: '0.5rem'
            }}></span>
            {meaning.partOfSpeech}
          </h3>
          
          <h4 style={{ margin: '1rem 0 0.5rem', color: theme.text }}>Definitions:</h4>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            {meaning.definitions.slice(0, 3).map((def, defIndex) => (
              <li key={defIndex} style={{ marginBottom: '0.5rem' }}>
                {def.definition}
                {def.example && (
                  <p style={{
                    margin: '0.25rem 0 0 1rem',
                    color: '#6c757d',
                    fontStyle: 'italic'
                  }}>Example: "{def.example}"</p>
                )}
              </li>
            ))}
          </ul>

          {meaning.synonyms.length > 0 && (
            <>
              <h4 style={{ margin: '1rem 0 0.5rem', color: theme.text }}>Synonyms:</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {meaning.synonyms.slice(0, 5).map((synonym, synIndex) => (
                  <span key={synIndex} style={{
                    backgroundColor: theme.background,
                    color: theme.accent,
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}>
                    {synonym}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default WordDefinition;