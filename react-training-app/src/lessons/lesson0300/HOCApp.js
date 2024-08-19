import { Todos, Photos, Albums } from "./products";

export default function HOCApp() {
  return (
    <div className="App">
      <Todos />
      <Photos />
      <Albums />
    </div>
  );
}
