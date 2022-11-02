import { useNavigate } from 'react-router-dom';
import css from './Button.module.css';

export const Button = () => {
  // const goBackOnClick = () => {};

  const navigate = useNavigate();

  // useEffect(() => {
  //   Analytics.send(location);
  // }, [location]);

  return (
    <>
      <button className={css.button} onClick={() => navigate(-1)} type="button">
        Go back
      </button>
    </>
  );
};
