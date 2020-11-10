import "./App.css";
import mergeImages from "merge-images";

function App() {
  return (
    <img
      src={mergeImages([
        process.env.PUBLIC_URL + "body.png",
        process.env.PUBLIC_URL + "face.png",
        process.env.PUBLIC_URL + "head.png",
      ]).then(b64 => (document.querySelector("img").src = b64))}
      alt='bleeblu'
    />
  );
}

export default App;

// import "./App.css";
// import mergeImages from "merge-images";

// import { ReactComponent as Body } from "./svg/body.svg";
// import { ReactComponent as Face } from "./svg/face.svg";
// import { ReactComponent as Head } from "./svg/head.svg";

// function App() {
//   return (
//     <svg height='100%' width='100%'>
//       <Body />
//       <Head />
//     </svg>
//   );
// }

// export default App;
