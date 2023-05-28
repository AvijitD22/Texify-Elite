import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="test">
      <Header
        brandName="Texify Elite"
        firstLinkName="About"
        firstLinkRedirectTo="#"
        secondLinkName="Contact"
        secondLinkRedirectTo="#"
      />
      <Main />
      <Footer
        year="2023"
        brandName="Texify Elite"
        buttonName="Texify Elite Github Repo"
        hrefLink="https://github.com/AvijitD22/Texify-Elite"
      />
    </div>
  );
}

export default App;
