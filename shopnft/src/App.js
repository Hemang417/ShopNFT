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
        'https://testnets.opensea.io/0x4463a5d91fd8fc0257157663e09285390d124165'
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
