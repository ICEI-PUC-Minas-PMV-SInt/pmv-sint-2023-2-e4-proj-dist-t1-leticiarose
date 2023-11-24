import { ReactComponent as MainImage } from 'C:/Users/l.lopes/Downloads/PUC2/pmv-sint-2023-2-e4-proj-dist-t1-gestao-coworkings/src/it-collabora-front-end/src/assets/images/home-image.svg';
import ButtonIcon from '../../components/ButtonIcon';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>Bem-vindo à Nova Era da Produtividade</h1>
            <p>Explore nosso catálogo de espaços que transformarão sua experiência de trabalho.</p>
            <div>
              <Link to="/catalog">
                <ButtonIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
    </div>
  );
};

export default Home;