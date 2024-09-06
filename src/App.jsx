import { useState, createContext, useContext } from 'react';
import './App.css';

const PreferencesContext = createContext();

function App() {
    const [preferences, setPreferences] = useState({ theme: 'light', language: 'en' });

    const toggleTheme = () => {
        setPreferences(prev => ({
            ...prev,
            theme: prev.theme === 'light' ? 'dark' : 'light'
        }));
    };

    const changeLanguage = (language) => {
        setPreferences(prev => ({
            ...prev,
            language
        }));
    };

    return (
        <PreferencesContext.Provider value={{ preferences, toggleTheme, changeLanguage }}>
            <div>
                <Toolbar />
                <button onClick={toggleTheme}>Trocar o tema</button>
                <button onClick={() => changeLanguage('pt-br')}>PT-BR</button>
                <button onClick={() => changeLanguage('en')}>EN</button>
            </div>
        </PreferencesContext.Provider>
    );
}

function Toolbar() {
    const { preferences } = useContext(PreferencesContext);

    return (
        <div style={{
            background: preferences.theme === 'dark' ? 'grey' : 'blue',
            color: 'white'
        }}>
            Tema utilizado - {preferences.theme}, Idioma: {preferences.language}
        </div>
    );
}

export default App;
