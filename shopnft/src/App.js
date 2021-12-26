import './App.css';
import CollectionCard from './components/CollectionCard.js'
import Header from './components/Header'
import {useState, useEffect} from 'react';
import PunkList from './components/PunkList'
import axios from 'axios';

function App() {
  const [punkListData, setpunkListData] = useState([])

  useEffect(() =>{
    const getMyNfts = async() => {
      const openseaData = await axios.get(
        'Access-Control-Allow-Origin: https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x82dB810E06cd5936D467F43Ef6E8A686cFfE5aE9&format=api&order_direction=ascending'
        )
      console.log(openseaData.data.assets)
      setpunkListData(openseaData.data.assets)
    }
    
    return getMyNfts()
  }, [])

  return (
    <div className='app'>
      <Header />
      <CollectionCard 
      id={0} 
      name={'Stylish Art'} 
      traits={[{'value': 8}]} 
      image={'https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu'}
      />
      <PunkList punkListData={punkListData}/>
     </div>

  )
}

export default App;
