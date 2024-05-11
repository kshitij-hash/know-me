import Accordion from "./components/Accordion/Accordion";
import SearchableList from "./components/SearchableList/SearchableList";
import Place from "./Place";
import { motion } from "framer-motion";

import guitarImg from './assets/guitar.jpg'
import bookImg from './assets/book-reading.jpg'
import cricketImg from './assets/cricket.jpg'
import writingImg from './assets/writing.jpg'
import sudokuImg from './assets/sudoku.jpg'
import rubixImg from './assets/rubix-cube.jpg'
import runningImg from './assets/running.jpg'
import { useState } from "react";

const HOBBIES = [
  {
    id: 'guitar',
    image: guitarImg,
    title: 'Guitar',
  },
  {
    id: 'book-reading',
    image: bookImg,
    title: 'Book Reading',
  },
  {
    id: 'cricket',
    image: cricketImg,
    title: 'Cricket',
  },
  {
    id: 'writing',
    image: writingImg,
    title: 'Writing',
  },
  {
    id: 'sudoku',
    image: sudokuImg,
    title: 'Solving Sudoku',
  },
  {
    id: 'rubix-cube',
    image: rubixImg,
    title: 'Solving Rubik\'s Cube',
  },
  {
    id: 'running',
    image: runningImg,
    title: 'Running'
  }
];

function App() {
  const [openExperience, setOpenExperience] = useState(false);
  const [openLocalGuides, setOpenLocalGuides] = useState(false);

  const accordionItemVariants = {
    open: { height: 200 },
    closed: { height: 50 }
  }
  return (
    <main>
      <section>
        <h2>Why work with me?</h2>
        <Accordion className="accordion">
          <motion.div 
            variants={accordionItemVariants}
            animate={openExperience ? 'open' : 'closed'}
            onClick={() => setOpenExperience(!openExperience)}
          >
            <Accordion.Item id="experience" className="accordion-item">
              <Accordion.Title className="accordion-item-title">
                I don&apos;t have 20 years of experience
              </Accordion.Title>
              <Accordion.Content className="accordion-item-content">
                <article>
                  <p>You can go wrong with me.</p>
                  <p>We can fail upon multiple ideas, might even leave them just as you leave all your previous projects, because I somehow find new ideas every single day.</p>
                </article>
              </Accordion.Content>
            </Accordion.Item>
          </motion.div>
          <motion.div 
            variants={accordionItemVariants}
            animate={openLocalGuides ? 'open' : 'closed'}
            onClick={() => setOpenLocalGuides(!openLocalGuides)}
          >
            <Accordion.Item id="local-guides" className="accordion-item">
              <Accordion.Title className="accordion-item-title">
                I'm working with local businesses
              </Accordion.Title>
              <Accordion.Content className="accordion-item-content">
                <article>
                  <p>
                    I'm not going to do this by sitting in that room.
                  </p>
                  <p>
                    Instead, I'm going out there and helping small businesses have their online presence and try to automate their day to day problems.
                  </p>
                </article>
              </Accordion.Content>
            </Accordion.Item>
          </motion.div>
        </Accordion>
      </section>
      <section>
        <h2>What do I do except coding?</h2>
        <SearchableList 
          items={HOBBIES} 
          itemKeyFn={(item) => item.id}
        >
          {(item) => <Place item={item}/>}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
