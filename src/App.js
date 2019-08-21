import React from 'react';
import Container from '@material-ui/core/Container';

import './App.css';
import TopNav from './components/TopNav'
import ItemList from './components/ItemList'


function App() {
  const tileData = [
    {
      img: 'images/image1.jpg',
      title: 'Image',
      author: 'author',
      cols: 1,
    },
    {
      img: 'images/image2.jpg',
      title: 'Image',
      author: 'author',
      cols: 1,
    },
    {
      img: 'images/image3.jpg',
      title: 'Image',
      author: 'author',
      cols: 1,
    },
    {
      img: 'images/image4.jpg',
      title: 'Image',
      author: 'author',
      cols: 1,
    },
  ];

  return (
    <Container fixed>
      <TopNav />
      <ItemList tileData={tileData}/>
    </Container>
  )
}

export default App;
