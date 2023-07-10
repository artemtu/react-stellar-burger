import styles from "./app.module.css";
import { data } from "../../utils/data";
import Header from "../appheader/appheader";
import Main from "../main/main";
import Modal from "../modal/modal";
import Overlay from "../overlay/overlay";


function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main/>
      <Modal/>
      <Overlay/>
    </div>
  );
}

export default App;


















// import styles from "./app.module.css";
// import { data } from "../../utils/data";

// function App() {
//   return (
//     <div className={styles.app}>
//       <pre style={{
//       	margin: "auto",
//       	fontSize: "1.5rem"
//       }}>
//       	Изменил
//       </pre>
//     </div>
//   );
// }

// export default App;
