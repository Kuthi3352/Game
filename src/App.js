import './App.css';
import './font/font.css';
import GameTaiXiu from './GameTaiXiu/GameTaiXiu';
import ResultGameModal from './GameTaiXiu/ResultGameModal';

function App() {
    return (
        <div className='App'>
            <GameTaiXiu />

            {/* // ResultGameModal */}
            <ResultGameModal />
        </div>
    );
}

export default App;
