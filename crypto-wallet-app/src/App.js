import React, { useState } from 'react';
import './App.css';
import CryptoSelector from './CryptoSelector';
import ConnectButton from './ConnectButton';
import Dashboard from './Dashboard';
function App() {
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [walletConnected, setWalletConnected] = useState(false);

  const handleCryptoSelect = (crypto) => {
    setSelectedCrypto(crypto);
  };

  const handleConnectWallet = () => {
    // Implement the wallet connection logic here (e.g., using MetaMask)
    // Set 'walletConnected' to true if wallet is successfully connected
    // After connecting, you can populate the dashboard based on the selected cryptocurrency
    // For example, set the selected cryptocurrency in the state and render the dashboard accordingly
    setWalletConnected(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Crypto Wallet</h1>
        <p>Select a cryptocurrency:</p>
        <CryptoSelector onSelect={handleCryptoSelect} selectedCrypto={selectedCrypto} />

        {/* Add the Connect to Wallet button */}
        {!walletConnected ? (
          <ConnectButton onClick={handleConnectWallet} />
        ) : null /* Render null if wallet is connected */}
        
        {walletConnected && (
          <Dashboard selectedCrypto={selectedCrypto} />
        )}
      </header>
    </div>
  );
}

export default App;