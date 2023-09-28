import "./App.css";
import Feed from "./components/Feed";
import { Routes, Route, useNavigate, Switch } from "react-router-dom";
import CreateNewPost from "./components/CreateNewPost";

const mock = [
  {
    id: 1,
    userid: 101,
    title: "Exploring the Mysteries of Deep Space",
    author: "Mark Star",
    body: "Embark on a journey through the cosmos as we delve into the mysteries of deep space. From the enigmatic black holes that swallow everything in their path to the dazzling beauty of distant galaxies, the universe never ceases to amaze us. Join us in unraveling the secrets of the cosmos.",
    tags: ["space", "science", "exploration"],
  },
  {
    id: 2,
    userid: 202,
    title: "The Art of Culinary Fusion",
    author: "Mark Star",
    body: "In the world of gastronomy, culinary fusion has emerged as a creative and delectable trend. From the fusion of Asian and Latin flavors to the harmonious blend of traditional and modern techniques, chefs are pushing the boundaries of taste. Discover the artistry behind culinary fusion and savor the unique flavors it brings to the table.",
    tags: ["food", "cooking", "fusion"],
  },
  {
    id: 3,
    userid: 303,
    title: "The Intriguing World of Cryptocurrencies",
    author: "Mark Star",
    body: "Cryptocurrencies have taken the financial world by storm, offering new possibilities and challenges. From the rise of Bitcoin to the innovative applications of blockchain technology, this article explores the intriguing world of cryptocurrencies and their potential impact on the future of finance.",
    tags: ["cryptocurrency", "blockchain", "finance"],
  },
  {
    id: 4,
    userid: 404,
    title: "Rediscovering Ancient Wisdom: Meditation and Mindfulness",
    author: "Sharon Stone",
    body: "In today's fast-paced world, many are turning to ancient practices like meditation and mindfulness to find peace and clarity. This article delves into the benefits of these practices, their origins in ancient traditions, and how they can help us navigate the complexities of modern life.",
    tags: ["meditation", "mindfulness", "wellness"],
  },
  {
    id: 5,
    userid: 505,
    title: "The Thriving Ecosystem of Urban Wildlife",
    author: "Sharon Stone",
    body: "Amidst the concrete jungles of our cities, a thriving ecosystem of urban wildlife exists. From squirrels and birds to unexpected guests like coyotes and raccoons, this article celebrates the adaptability of nature and the coexistence of wildlife in our urban environments.",
    tags: ["wildlife", "urban", "environment"],
  },
  {
    id: 6,
    userid: 606,
    title: "The Resurgence of Vinyl Records",
    author: "Hila Fr",
    body: "In an age dominated by digital music, vinyl records are making a surprising comeback. Collectors and music enthusiasts are rediscovering the warmth and authenticity of analog sound. Explore the resurgence of vinyl records, their enduring appeal, and the vinyl revival sweeping the music industry.",
    tags: ["music", "vinyl", "retro"],
  },
  {
    id: 7,
    userid: 707,
    title: "The Future of Artificial Intelligence in Healthcare",
    author: "Andrew git",
    body: "Artificial intelligence is transforming healthcare in remarkable ways, from early disease detection to personalized treatment plans. This article delves into the cutting-edge AI technologies revolutionizing the medical field and their potential to improve patient outcomes and healthcare efficiency.",
    tags: ["AI", "healthcare", "technology"],
  },
  {
    id: 8,
    userid: 808,
    title: "Journey to the Bottom of the Ocean",
    author: "Andrew git",
    body: "Descend into the abyss as we embark on a daring journey to the bottom of the ocean. Discover the wonders of the deep sea, from bizarre and otherworldly creatures to hydrothermal vents teeming with life. Dive into the mysteries of the world's least explored frontier.",
    tags: ["ocean", "exploration", "marine"],
  },
  {
    id: 9,
    userid: 909,
    title: "The Fascinating World of Insects",
    author: "Andrew git",
    body: "Insects make up a staggering majority of Earth's species, yet they often go unnoticed. This article sheds light on the fascinating and diverse world of insects, from the intricate social structures of ants to the dazzling colors of butterflies. Explore the incredible lives of Earth's tiny but essential inhabitants.",
    tags: ["insects", "nature", "biodiversity"],
  },
];

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Feed data={mock} />} />
        <Route path="/CreateNewPost" element={<CreateNewPost />} />
      </Routes>
    </div>
  );
}

export default App;
