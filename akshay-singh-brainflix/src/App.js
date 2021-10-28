import React from 'react';
import Header from './components/Header';
import Video from './components/Video';
import VideoDetails from './components/Video-details';
import NewComments from './components/NewComments';
import Comments from './components/Comments';
import Footer from './components/Footer';




function App() {
  return (
    <div>
      <Header />
      <main>
        <Video />
        <VideoDetails />
        <NewComments />
        <Comments />
      </main>
      <Footer />
    </div>
  );
}

export default App;
