import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReducerExample from "./reducerExample";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/reducer">Use Reducer</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Router path="/reducer">
            <ReducerExample />
          </Router>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return (<>
    <h2>About</h2>
    <h3>Hello kunal a link can be happened from inside of any component and it will trigger a new navigation</h3>
    <Link to="/">Home</Link>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at amet voluptatum asperiores, neque minima minus necessitatibus qui aut maiores magnam dolor magni, sequi soluta culpa saepe tempora! Laboriosam, perspiciatis?
    </p>
  </>);
}

function Users() {
  return <h2>Users</h2>;
}