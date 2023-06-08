import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const handleClick = (e) => {
    //let text = e.target.value;
    //console.log(input);
    setResult(input);

  }

  const handleChange = ({target}) => {
    const { value } = target;
    //console.log(value);
    setInput(value);
  }
  return (
    
    <div className="home">

      <textarea id='srcText' placeholder='הכנס את הטקסט' onChange={handleChange}></textarea>
      <textarea id='destText' value={result}>{result}</textarea>
      <button onClick={handleClick}>הפשט</button>
    </div>
  );
}


export default Home;

// function TranslateComponent() {
//   const [text, setText] = useState('');
//   const [translatedText, setTranslatedText] = useState('');
  
//   const translateText = () => {
//     axios
//       .post(
//         'https://translation.googleapis.com/language/translate/v2',
//         {},
//         {
//           params: {
//             q: text,
//             target: 'en', // Target language (e.g., 'en' for English)
//             key: 'YOUR_API_KEY', // Replace with your actual API key
//           },
//         }
//       )
//       .then((response) => {
//         const translation = response.data.data.translations[0].translatedText;
//         setTranslatedText(translation);
//       })
//       .catch((error) => {
//         console.error('Translation error:', error);
//       });
//   };
  
//   // Rest of the component code
// }

// function TranslateComponent() {
//   const [text, setText] = useState('');
//   const [translatedText, setTranslatedText] = useState('');
  
//   const translateText = () => {
//     // Translation request code
//     axios
//       .post(
//         'https://translation.googleapis.com/language/translate/v2',
//         {},
//         {
//           params: {
//             q: text,
//             target: 'en', // Target language (e.g., 'en' for English)
//             key: 'YOUR_API_KEY', // Replace with your actual API key
//           },
//         }
//       )
//       .then((response) => {
//         const translation = response.data.data.translations[0].translatedText;
//         setTranslatedText(translation);
//       })
//       .catch((error) => {
//         console.error('Translation error:', error);
//   };
  
//   return (
//     <div>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button onClick={translateText}>Translate</button>
//       <p>{translatedText}</p>
//     </div>
//   );
// }




