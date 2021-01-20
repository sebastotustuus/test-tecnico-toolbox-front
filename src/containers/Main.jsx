import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/main.css';

// Components
import DataTable from '../components/DataTable';

const Main = () => {
  const { words } = useSelector((state) => state.wordsReducer);
  return (
    <div className="container">
      <h1 className="title-main">Tabla de datos</h1>
      <DataTable words={words} />
    </div>
  );
};

export default Main;
