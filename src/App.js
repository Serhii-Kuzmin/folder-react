import { Header } from "./components/Header";
import { Section } from "./components/Section";

function App() {
  const moviesData = [
    { title: "Terminator", id: "1" },
    { title: "Taxi", id: "2" },
    { title: "Got", id: "3" },
  ];
  return (
    <div>
      <Header title="React Project" />
      <Section
        sectionsTitle="Movies"
        data={[{ title: "Teminator", id: "1" }]}
      />
      <Section sectionsTitle="Goods" data={[]} />
    </div>
  );
}

export default App;
