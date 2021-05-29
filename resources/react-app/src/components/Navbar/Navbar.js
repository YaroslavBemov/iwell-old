import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <aside>
      <div className=" mb-7 ">
        <img src={"http://placehold.it/260x260"} style={{ width: 260, height: 260 }}/>
        <p className="text-base">Наталия Барсенева</p>
      </div>
      <nav className="mt-40">
        <Link to="/clients">Мои клиенты</Link>
        <Link to="/classes">Мои занятия</Link>
        
        <Link to="/active" 
       // onClick={toggleVisibility}
        onClick={() => setVisible(true)}
        >
          Мое расписание
        </Link>
        {visible && (
          <div className="flex flex-col items-start ml-40">
            <NavLink to="/active" activeClassName="selected">Активное</NavLink>
            <NavLink to="/notactive" activeClassName="selected">Неактивное</NavLink>
            <NavLink to="/calendar" activeClassName="selected">Календарь</NavLink>
          </div>
        )}
        <Link to="/info">Информация</Link>
      </nav>
    </aside>
  );
};

export default Navbar;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams,
//   useRouteMatch
// } from "react-router-dom";

// // Since routes are regular React components, they
// // may be rendered anywhere in the app, including in
// // child elements.
// //
// // This helps when it's time to code-split your app
// // into multiple bundles because code-splitting a
// // React Router app is the same as code-splitting
// // any other React app.

// export default function NestingExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>

//         <hr />

//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/topics">
//             <Topics />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function Topics() {
//   // The `path` lets us build <Route> paths that are
//   // relative to the parent route, while the `url` lets
//   // us build relative links.
//   let { path, url } = useRouteMatch();

//   return (
//     <div>
//       {/* <h2>Topics</h2> */}
//       <ul>
//         <li>
//           <Link to={`${url}/rendering`}>Rendering with React</Link>
//         </li>
//         <li>
//           <Link to={`${url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>

//       <Switch>
//         <Route exact path={path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//         <Route path={`${path}/:topicId`}>
//           <Topic />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   // The <Route> that rendered this component has a
//   // path of `/topics/:topicId`. The `:topicId` portion
//   // of the URL indicates a placeholder that we can
//   // get from `useParams()`.
//   let { topicId } = useParams();

//   return (
//     <div>
//       <h3>{topicId}</h3>
//     </div>
//   );
// }