import "./App.css";
import { AnimatePresence, motion } from "framer-motion";
import { Home } from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial="initialState"
          animate="animateState"
          exit="exitState"
          variants={{
            initialState: {
              opacity: 0.5,
              transition: {
                duration: 1,
              },
            },
            animateState: {
              opacity: 1,
              transition: {
                duration: 1,
              },
            },
            exitState: {},
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;
