import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";
import { Post } from "./components/";
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
      <Button>Login</Button>
      <Button>Click</Button>
      <Button>Hello</Button>
      <Modal myBestTitleEver="{holodylnyk}">
        <h2>prodam holodylnyk</h2>
        <h3>harnogo stanu</h3>
        <button>Kupyty!</button>
      </Modal>
      <Modal myBestTitleEver="Post">
        <Post />
      </Modal>
    </div>
  );
}

export default App;
