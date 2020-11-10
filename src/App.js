import "./App.css";
import mergeImages from "merge-images";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/bleeblu'>
          <img
            src={mergeImages([
              process.env.PUBLIC_URL + "assets/body.png",
              process.env.PUBLIC_URL + "assets/face.png",
              process.env.PUBLIC_URL + "assets/head.png",
            ]).then(b64 => (document.querySelector("img").src = b64))}
            alt='bleeblu'
          />
        </Route>
      </Switch>
    </Router>
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
