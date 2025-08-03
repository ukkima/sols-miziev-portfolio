import { Footer, Header, AppRoutes, ScrollToAnchor } from "./components";

function App() {
  return (
    <>
      <Header />
      <ScrollToAnchor />
      <main className="main">
        <AppRoutes />
      </main>

      <Footer />
    </>
  );
}

export default App;
