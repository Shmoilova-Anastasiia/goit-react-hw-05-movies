import { ThreeCircles } from 'react-loader-spinner';
import { LoaderStyle } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStyle>
      <ThreeCircles
        height="100"
        width="100"
        color="rgba(0, 255, 0, 1)"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </LoaderStyle>
  );
};
