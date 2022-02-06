function Navbar() {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <form className="d-flex">
                        <input required id="searchField" className="form-control me-2" type="text" placeholder="Buscar" aria-label="Search" onChange={(event) => { localStorage.setItem('keyword', event.target.value) }} />
                        <button id="buttonSearch" type="button" className="btn btn-success">Buscar</button>
                    </form>
                </div>
            </nav>
        </>
    );
}

export default Navbar;