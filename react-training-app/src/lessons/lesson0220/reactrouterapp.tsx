import React from "react";
import { useParams } from "react-router";

import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

export default function ReactRouterApp() {
  const name = "John Doe";
  const id = "A1001";
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={`/about/${name}/${id}`}>About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/:name/:id" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FakeTextThree />
      </main>
    </Router>
  );
}
// Home Page
const Home = () => (
  <>
    <h1>Home</h1>
    <FakeTextOne />
  </>
);

// About Page
const About = () => {
  const { name, id } = useParams();
  return (
    <>
      <h1>
        About {name}/{id}
      </h1>
      <FakeTextTwo />
    </>
  );
};

// Contact Page
const Contact = () => (
  <>
    <h1>Contact</h1>
    <FakeTextThree />
  </>
);

const FakeTextOne = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
);

const FakeTextTwo = () => (
  <p>
    It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of using
    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
    opposed to using 'Content here, content here', making it look like readable
    English. Many desktop publishing packages and web page editors now use Lorem
    Ipsum as their default model text, and a search for 'lorem ipsum' will
    uncover many web sites still in their infancy. Various versions have evolved
    over the years, sometimes by accident, sometimes on purpose (injected humour
    and the like).{" "}
  </p>
);

const FakeTextThree = () => (
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
);
