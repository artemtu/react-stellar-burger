import styles from "./app.module.css";
import { data } from "../../utils/data";
import Header from "../header/header";
import Main from "../main/main";


function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main/>
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
