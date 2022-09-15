import  QRCode  from 'react-qr-code'
import { useState } from 'react'
import QRCodeLink from 'qrcode';
import './App.css'

function App(){
  const [link, setLink] = useState('');
  const [qrCodeLink, setQrCodeLink] = useState('')

  function handleGeneration(link_url){
    QRCodeLink.toDataURL(link_url,{
      width:600,
      margin: 3,
    },function(err, url){
      setQrCodeLink(url);
    })
  }

  function handleQrcode(e){
    setLink(e.target.value);
    handleGeneration(e.target.value)
  }

  return (
    <div className='container'>
      <h1>Gerador QRCode</h1>

      <QRCode 
        value={link}/>

      <input
      className='input' 
      type="text" 
      placeholder='Digite seu link...'
      value={link}
      onChange={ (e) => handleQrcode(e)}
      />

      <a href={qrCodeLink} download={`qrcode.png`}>Baixar QrCode</a>

    </div>
  );
}

export default App;
