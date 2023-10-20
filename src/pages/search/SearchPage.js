import React from 'react'
import Loading from '../../components/Loading';
import { useNavigate, useParams } from 'react-router';
import ErrorPage from '../../components/ErrorPage';
import { Image, Shimmer } from 'react-shimmer';
import { useMovieByCategoryQuery } from '../../features/movieApi';

const SearchPage = () => {

  const { category } = useParams();
  const nav = useNavigate();


  const { isLoading, isError, error, data } = useMovieByCategoryQuery(category ?? 'now_playing');
  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <ErrorPage error={error} />
  }

  return (
    <div>
      <div className='grid grid-cols-3 p-5 gap-5'>
        {data && data.results.map((movie) => {
          return <div key={movie.id} className='cursor-pointer hover:scale-105 duration-75 ease-in' onClick={() => nav(`/movie/detail/${movie.id}`)}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              fallback={<Shimmer width={300} height={350} />}
            />

            <h1>{movie.overview.substring(0, 100) + '....'}</h1>
          </div>
        })}

      </div>
    </div>
  )
}

export default SearchPage
