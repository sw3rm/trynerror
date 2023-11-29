import * as React from 'react'
import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const App = () => ( 
  <DynamicContextProvider 
    settings={{ 
      environmentId: '2a351052-8d5d-40e4-a436-a6ce7d7a6207',
      walletConnectors: [ EthereumWalletConnectors ],
    }}> 
    <DynamicWidget /> 
  </DynamicContextProvider> 
)

export default App;
