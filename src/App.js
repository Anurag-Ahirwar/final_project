// import React, { useState } from 'react';
// import './App.css';
// import axios from 'axios';

// function App() {
//     const [comicText, setComicText] = useState(Array(10).fill(''));

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log("Form submitted!");
//         console.log("Comic Text:", comicText);

//         // Call function to handle API integration and display comic panels
//         await handleAPIIntegration(comicText);
//     };

//     const handleAPIIntegration = async (comicText) => {
//       try {
//           const apiUrl = "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud";
  
//           const images = await Promise.all(
//               comicText.map(async (text) => {
//                   const response = await fetch(apiUrl, {
//                       headers: {
//                           "Accept": "image/png",
//                           "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
//                           "Content-Type": "application/json"
//                       },
//                       method: "POST",
//                       body: JSON.stringify({ "inputs": text }),
//                   });
  
//                   const blob = await response.blob();
//                   return URL.createObjectURL(blob);
//               })
//           );
  
//           console.log("Generated Images:", images);
  
//           // Update the state with the generated images
//           setGeneratedImages(images);
//       } catch (error) {
//           console.error('Error during API integration:', error.message);
//           // Handle errors gracefully (e.g., show an error message to the user)
//       }
//   };
  
// // Add a state to store generated images
// const [generatedImages, setGeneratedImages] = useState([]);

// // Update the rendering part to use React components
// return (
//     <div className="App">
//         <form onSubmit={handleSubmit}>
//             {/* Input fields for 10 comic panels */}
//             {comicText.map((text, index) => (
//                 <input
//                     key={index}
//                     type="text"
//                     placeholder={`Panel ${index + 1}`}
//                     value={text}
//                     onChange={(e) => {
//                         const newText = e.target.value;
//                         setComicText((prevText) =>
//                             prevText.map((item, i) => (i === index ? newText : item))
//                         );
//                     }}
//                 />
//             ))}
//             <button type="submit">Generate Comic</button>
//         </form>
//         <div id="comicDisplay">
//             {/* Render generated images */}
//             {generatedImages.map((imageUrl, index) => (
//                 <img key={index} src={imageUrl} alt={`Comic Panel ${index + 1}`} />
//             ))}
//         </div>
//     </div>
// );
// }

// export default App;

// part 2 with loader 


// import React, { useState } from 'react';
// import './App.css';
// // import axios from 'axios';
// // ... (other imports and code)

// function App() {
//   const [comicText, setComicText] = useState(Array(10).fill(''));
//   const [loading, setLoading] = useState(false);
//   const [generatedImages, setGeneratedImages] = useState([]);

//   const handleSubmit = async (e) => {
//       e.preventDefault();
//       setLoading(true);

//       // Call function to handle API integration and display comic panels
//       await handleAPIIntegration(comicText);

//       setLoading(false);
//   };

//   const handleAPIIntegration = async (comicText) => {
//       try {
//           const apiUrl = "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud";

//           const images = await Promise.all(
//               comicText.map(async (text) => {
//                   const response = await fetch(apiUrl, {
//                       headers: {
//                           "Accept": "image/png",
//                           "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
//                           "Content-Type": "application/json"
//                       },
//                       method: "POST",
//                       body: JSON.stringify({ "inputs": text }),
//                   });

//                   const blob = await response.blob();
//                   return URL.createObjectURL(blob);
//               })
//           );

//           setGeneratedImages(images);
//       } catch (error) {
//           console.error('Error during API integration:', error.message);
//       }
//   };

//   return (
//       <div className="App">
//           <form onSubmit={handleSubmit}>
//               {comicText.map((text, index) => (
//                   <input
//                       key={index}
//                       type="text"
//                       placeholder={`Panel ${index + 1}`}
//                       value={text}
//                       onChange={(e) => {
//                           const newText = e.target.value;
//                           setComicText((prevText) =>
//                               prevText.map((item, i) => (i === index ? newText : item))
//                           );
//                       }}
//                   />
//               ))}
//               <button type="submit">Generate Comic</button>
//           </form>
//           <div id="comicDisplay">
//               {loading && <div className="loading-spinner"></div>}
//               {generatedImages.map((imageUrl, index) => (
//                   <img key={index} src={imageUrl} alt={`Comic Panel ${index + 1}`} />
//               ))}
//               {/* Render "Generate Another Comic" button when images are visible */}
//               {!loading && generatedImages.length > 0 && (
//                   <button
//                       onClick={() => {
//                           setComicText(Array(10).fill('')); // Clear the input fields
//                           setGeneratedImages([]); // Clear the generated images
//                       }}
//                   >
//                       Generate Another Comic
//                   </button>
//               )}
//           </div>
//       </div> 
//   );
// }

// export default App;

///// part 3 header and footer

// import React, { useState } from 'react';
// import './App.css';
// // import axios from 'axios';
// // ... (other imports and code)

// function App() {
//   const [comicText, setComicText] = useState(Array(10).fill(''));
//   const [loading, setLoading] = useState(false);
//   const [generatedImages, setGeneratedImages] = useState([]);

//   const handleSubmit = async (e) => {
//       e.preventDefault();
//       setLoading(true);

//       // Call function to handle API integration and display comic panels
//       await handleAPIIntegration(comicText);

//       setLoading(false);
//   };

//   const handleAPIIntegration = async (comicText) => {
//       try {
//           const apiUrl = "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud";

//           const images = await Promise.all(
//               comicText.map(async (text) => {
//                   const response = await fetch(apiUrl, {
//                       headers: {
//                           "Accept": "image/png",
//                           "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
//                           "Content-Type": "application/json"
//                       },
//                       method: "POST",
//                       body: JSON.stringify({ "inputs": text }),
//                   });

//                   const blob = await response.blob();
//                   return URL.createObjectURL(blob);
//               })
//           );

//           setGeneratedImages(images);
//       } catch (error) {
//           console.error('Error during API integration:', error.message);
//       }
//   };

//   return (
//       <div className="App">
//           <header>
//               <h1>Dashtoon Product Engineer Assignment</h1>
//               <p>IIT Guwahati</p>
//           </header>
//           <form onSubmit={handleSubmit}>
//               {comicText.map((text, index) => (
//                   <input
//                       key={index}
//                       type="text"
//                       placeholder={`Panel ${index + 1}`}
//                       value={text}
//                       onChange={(e) => {
//                           const newText = e.target.value;
//                           setComicText((prevText) =>
//                               prevText.map((item, i) => (i === index ? newText : item))
//                           );
//                       }}
//                   />
//               ))}
//               <button type="submit">Generate Comic</button>
//           </form>
//           <div id="comicDisplay">
//               {loading && <div className="loading-spinner"></div>}
//               {generatedImages.map((imageUrl, index) => (
//                   <img key={index} src={imageUrl} alt={`Comic Panel ${index + 1}`} />
//               ))}
//               {/* Render "Generate Another Comic" button when images are visible */}
//               {!loading && generatedImages.length > 0 && (
//                   <button
//                       onClick={() => {
//                           setComicText(Array(10).fill('')); // Clear the input fields
//                           setGeneratedImages([]); // Clear the generated images
//                       }}
//                   >
//                       Generate Another Comic
//                   </button>
//               )}
//           </div>
//           <footer>
//               <p>By Anurag Ahirwar - 200123009</p>
//               <p>IIT Guwahati</p>
//           </footer>
//       </div> 
//   );
// }

// export default App;

//// part 4 with image annotation 
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [comicText, setComicText] = useState(Array(10).fill(''));
  const [loading, setLoading] = useState(false);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [annotations, setAnnotations] = useState(Array(10).fill(''));

  const getRandomImage = async () => {
    try {
      const response = await fetch('https://api.unsplash.com/photos/random?query=anime', {
        headers: {
          Authorization: 'Client-ID XclTCyYDjN2eRu0wTgElXyyPU6l2ilvRnPFCvQ82VQg', // Replace with your Unsplash API key
        },
      });
  
      const data = await response.json();
  
      console.log('API Response:', data);  // Log the API response
  
      if (data.urls && data.urls.regular) {
        return data.urls.regular;
      } else {
        console.error('Empty or unexpected API response:', data);
        return null;
      }
    } catch (error) {
      console.error('Error fetching image from Unsplash:', error.message);
      return null;
    }
  };
  
  

  useEffect(() => {
    const setBackgroundImage = async () => {
      try {
        const imageUrl = await getRandomImage();
        if (imageUrl) {
          document.body.style.backgroundImage = `url("${imageUrl}")`;
        } else {
          console.error('Received empty image URL');
        }
      } catch (error) {
        console.error('Error setting background image:', error.message);
      }
    };
  
    // Set a random background image when the component is mounted
    setBackgroundImage();
  
    // Clear the background image when the component is unmounted
    return () => {
      document.body.style.backgroundImage = 'none';
    };
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Call function to handle API integration and display comic panels
    await handleAPIIntegration(comicText);

    setLoading(false);
  };

  const handleAPIIntegration = async (comicText) => {
    try {
      const apiUrl = "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud";

      const images = await Promise.all(
        comicText.map(async (text) => {
          const response = await fetch(apiUrl, {
            headers: {
              "Accept": "image/png",
              "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
              "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ "inputs": text }),
          });

          const blob = await response.blob();
          return URL.createObjectURL(blob);
        })
      );

      setGeneratedImages(images);
    } catch (error) {
      console.error('Error during API integration:', error.message);
      // console.log('Error during API integration:', error.message);
    }
  };

  const handleAnnotationChange = (index, text) => {
    setAnnotations((prevAnnotations) => {
      const newAnnotations = [...prevAnnotations];
      newAnnotations[index] = text;
      return newAnnotations;
    });
  };

  return (
    <div className="App">
      <header>
        <h1>ComicScribbler</h1>
        <h2>Dashtoon Product Engineer Assignment</h2>
      </header>
      <form onSubmit={handleSubmit}>
        {comicText.map((text, index) => (
          <div key={index} className="input-container">
            <input
              type="text"
              placeholder={`Panel ${index + 1}`}
              value={text}
              onChange={(e) => {
                const newText = e.target.value;
                setComicText((prevText) =>
                  prevText.map((item, i) => (i === index ? newText : item))
                );
              }}
            />
            <input
              type="text"
              placeholder={`Annotation ${index + 1}`}
              value={annotations[index]}
              onChange={(e) => {
                const newText = e.target.value;
                handleAnnotationChange(index, newText);
              }}
            />
          </div>
        ))}
        <button type="submit">Generate Comic</button>
      </form>
      <div id="comic-wrapper">
  <div id="comicDisplay">
    {loading && <div className="loading-spinner"></div>}

    {generatedImages.map((imageUrl, index) => (
      <div key={index} className="comic-panel">
        <img src={imageUrl} alt={`Comic Panel ${index + 1}`} />
        <div className="annotation">{annotations[index]}</div>
      </div>
    ))}
  </div>

  {generatedImages.length > 0 && (
    <div className="generate-another-comic-container">
      <button
        className="generate-another-comic-btn"
        onClick={() => {
          setComicText(Array(10).fill("")); // Clear the input fields
          setGeneratedImages([]); // Clear the generated images
          setAnnotations(Array(10).fill("")); // Clear the annotations
        }}
      >
        Generate Another Comic
      </button>
    </div>
  )}
</div>

      

      <footer>
        <p>By Anurag Ahirwar - 200123009</p>
        <p>IIT Guwahati</p>
      </footer>
    </div>
  );
}

export default App;


// // part 5 with queue addition 
// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [comicText, setComicText] = useState(Array(10).fill(''));
//   const [loading, setLoading] = useState(false);
//   const [generatedImages, setGeneratedImages] = useState([]);
//   const [annotations, setAnnotations] = useState(Array(10).fill(''));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // Call function to handle API integration and display comic panels
//     await handleAPIIntegration(comicText);

//     setLoading(false);
//   };

//   const handleAPIIntegration = async (texts) => {
//     const apiUrl = "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud";
//     const queue = [];

//     // Function to process the queue
//     const processQueue = async () => {
//       for (const text of queue) {
//         const images = await Promise.all(
//           text.map(async (panelText) => {
//             const response = await fetch(apiUrl, {
//               headers: {
//                 "Accept": "image/png",
//                 "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
//                 "Content-Type": "application/json"
//               },
//               method: "POST",
//               body: JSON.stringify({ "inputs": panelText }),
//             });

//             const blob = await response.blob();
//             return URL.createObjectURL(blob);
//           })
//         );

//         setGeneratedImages((prevImages) => [...prevImages, ...images]);
//       }
//     };

//     // Add current texts to the queue
//     queue.push([...texts]);

//     // Process the queue after a delay (adjust the timeout as needed)
//     setTimeout(async () => {
//       await processQueue();
//     }, 5000); // Example: 5 seconds timeout

//     // Clear the annotations after processing
//     setAnnotations(Array(10).fill(''));
//   };

//   const handleAnnotationChange = (index, text) => {
//     setAnnotations((prevAnnotations) => {
//       const newAnnotations = [...prevAnnotations];
//       newAnnotations[index] = text;
//       return newAnnotations;
//     });
//   };

//   useEffect(() => {
//     // Update to handle automatic form submission based on comicText changes
//     if (comicText.filter((text) => text.trim() !== '').length > 0) {
//       handleSubmit({ preventDefault: () => {} });
//     }
//   }, [comicText]);

//   return (
//     <div className="App">
//       <header>
//         <h1>Dashtoon Product Engineer Assignment</h1>
//         <p>IIT Guwahati</p>
//       </header>
//       <form onSubmit={handleSubmit}>
//         {comicText.map((text, index) => (
//           <div key={index} className="input-container">
//             <input
//               type="text"
//               placeholder={`Panel ${index + 1}`}
//               value={text}
//               onChange={(e) => {
//                 const newText = e.target.value;
//                 setComicText((prevText) =>
//                   prevText.map((item, i) => (i === index ? newText : item))
//                 );
//               }}
//             />
//             <input
//               type="text"
//               placeholder={`Annotation ${index + 1}`}
//               value={annotations[index]}
//               onChange={(e) => {
//                 const newText = e.target.value;
//                 handleAnnotationChange(index, newText);
//               }}
//             />
//           </div>
//         ))}
//         <button type="submit" disabled={loading}>
//           Generate Comic
//         </button>
//       </form>
//       <div id="comicDisplay">
//         {loading && <div className="loading-spinner"></div>}
//         {generatedImages.map((imageUrl, index) => (
//           <div key={index} className="comic-panel">
//             <img src={imageUrl} alt={`Comic Panel ${index + 1}`} />
//             <div className="annotation">{annotations[index]}</div>
//           </div>
//         ))}
//         {/* Render "Generate Another Comic" button when images are visible */}
//         {!loading && generatedImages.length > 0 && (
//           <button
//             onClick={() => {
//               setComicText(Array(10).fill('')); // Clear the input fields
//               setGeneratedImages([]); // Clear the generated images
//             }}
//           >
//             Generate Another Comic
//           </button>
//         )}
//       </div>
//       <footer>
//         <p>By Anurag Ahirwar - 200123009</p>
//         <p>IIT Guwahati</p>
//       </footer>
//     </div>
//   );
// }

// export default App;


