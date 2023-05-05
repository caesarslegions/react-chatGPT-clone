
const App = () => {
  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history">
          <li>BLUGH</li>
        </ul>
        <nav>
          <p>Made by Jonah</p>
        </nav>
      </section>
      <section className="main">
        <h1>LennyGPT</h1>
        <ul className="feed">

        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input/>
            <div id="submit">➢</div>
          </div>
          <p className="info">ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT May 3 Version</p>
        </div>
      </section>
    </div>
  );
}

export default App;
