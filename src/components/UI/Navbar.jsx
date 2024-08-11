export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="collapse navbar-collapse flex-row justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav m-1 d-flex ">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
