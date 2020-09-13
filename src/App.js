import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow';

export default () => {

  const [movieList, setMovieList] = useState ([]);

  useEffect (() => {
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
          {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))}
      </section>
    </div>
  );
}