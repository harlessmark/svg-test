import "./App.css";
import mergeImages from "merge-images";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import body from "./assets/body.png";
import face from "./assets/face.png";
import head from "./assets/head.png";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/bleeblu'>
          <img
            src={mergeImages([body, face, head]).then(
              b64 => (document.querySelector("img").src = b64)
            )}
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
