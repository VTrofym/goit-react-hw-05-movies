import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Button = () => {
  const goBackOnClick = () => {};

  const location = useLocation();

  // useEffect(() => {
  //   Analytics.send(location);
  // }, [location]);

  return (
    <>
      <button onClick={goBackOnClick} type="button">
        Go back
      </button>
    </>
  );
};
