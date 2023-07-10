import React, {useState} from "react";
import styles from "./app.module.css";
import { data } from "../../utils/data";
import Header from "../appheader/appheader";
import Main from "../main/main";
import Modal from "../modal/modal";
import Overlay from "../overlay/overlay";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={styles.app}>
      <Header />
      <Main setIsModalOpen={setIsModalOpen}/>
      {isModalOpen && (
        <>
<Modal setIsModalOpen={setIsModalOpen}/>
<Overlay setIsModalOpen={setIsModalOpen}/>

        </>
      )}
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
