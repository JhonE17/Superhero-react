import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroesById } from '../helpers';
import { useMemo } from 'react';

export const HeroPage = () => {
  const { id, ...rest } = useParams();

  const navigate = useNavigate();

  const hero = useMemo(() => getHeroesById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) return <Navigate to={'/marvel'} />; // Tambien puedo retornar otra vista de 404 en caso el heroe no exista
  const heroImageUrl = `/heroes/${id}.jpg`;

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          src={heroImageUrl}
          alt={hero.superhero}
          className='img-thumbnail animate__animated animate__slideInLeft'
        />
      </div>
      <div className='col-8'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className='list-group-item'>
            <b>First Appearance:</b> {hero.first_appearance}
          </li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>
        <button className='btn btn-outline-primary' onClick={onNavigateBack}>
          Back
        </button>
      </div>
    </div>
  );
};
