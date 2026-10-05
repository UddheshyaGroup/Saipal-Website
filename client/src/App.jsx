// import AppRouter from "./router/AppRouter";

// function App() {
//   return <AppRouter />;
// }

// export default App;

// Website Down Code
function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: "90px",
            margin: "0 0 10px",
            color: "#111",
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontSize: "28px",
            marginBottom: "15px",
            color: "#222",
          }}
        >
          This website doesn't exist.
        </h2>

        <p
          style={{
            fontSize: "16px",
            color: "#777",
          }}
        >
          The website you're looking for is currently unavailable.
        </p>
      </div>
    </div>
  );
}

export default App;