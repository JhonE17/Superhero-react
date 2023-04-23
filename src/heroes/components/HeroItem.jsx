import { Link } from "react-router-dom";

const CharactersByHero = ({characters, alter_ego})=>{
  if(characters === alter_ego) return (<></>);
  return (<p>{characters}</p>);
}


export const HeroItem = ({
  superhero,
  alter_ego,
  publisher,
  first_appearance,
  characters,
  id,
}) => {
  const heroImageUrl = `/heroes/${id}.jpg`;
  
  return (
    <div className='col animate__animated animate__fadeIn'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4 '>
            <img src={heroImageUrl} className='card-img' alt={superhero} />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>{superhero}</h5>
              <p className='card-text'>{alter_ego}</p>
              <CharactersByHero characters={characters} alter_ego={alter_ego}/>
              {/* <p>{characters != alter_ego ? characters : ""}</p> */}
              <p className='card-text'>
                <small className='text-muted'>{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
