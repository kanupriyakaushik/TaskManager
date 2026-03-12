function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <nav style={styles.nav}>
      <h2>Task Manager</h2>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#282c34",
    color: "white",
  },
};

export default Navbar;