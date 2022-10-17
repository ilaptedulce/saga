import Header from "./components/header/header";

const App = ({ children }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
  </>
);

export default App;
