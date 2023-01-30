import "./App.css";
import Job from "./components/Job";

function App() {
  return (
    <div>
      <header>
        <h1>The Job Board</h1>
      </header>
      <div className="Jobs">
        <div className="job red">
          <Job
            title="Full Time Sales Asoociate - Sydney Boutique"
            contractType="CDI"
            country="Australie"
            city="Sydney"
          />
        </div>
        <div className="job green">
          <Job
            title="Agent de Sécurité - Pantin"
            contractType="CDI"
            country="France"
            city="Pantin"
          />
        </div>
        <div className="job yellow">
          <Job
            title="Responsable d'Atelier (H/F)"
            contractType="CDD"
            country="France"
            city="Paris"
          />
        </div>
        <div className="job blue">
          <Job
            title="Chef de Projets"
            contractType="CDD"
            country="France"
            city="Paris"
          />
        </div>
        <div className="job beige">
          <Job
            title="Développeur React.js"
            contractType="CDI"
            country="France"
            city="Paris"
          />
        </div>
        <div className="job red">
          <Job
            title="Sales Associate Stockholm"
            contractType="CDI"
            country="Suéde"
            city="Stockholm"
          />
        </div>
        <div className="job green">
          <Job
            title="Vendeur/se - Crans Montana"
            contractType="CDI"
            country="Suisse"
            city="Crans Montana"
          />
        </div>
        <div className="job yellow">
          <Job
            title="CRM & Data Quality Analyst"
            contractType="CDI"
            country="USA"
            city="New York"
          />
        </div>
        <div className="job blue">
          <Job
            title="Infirmier (H/F)"
            contractType="CDI"
            country="France"
            city="Pantin"
          />
        </div>
      </div>
      <footer>
        <p>
          Made with <span className="bold">React</span> at{" "}
          <span className="bold">Le Reacteur</span> by{" "}
          <span className="bold">Maxence Valvason</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
