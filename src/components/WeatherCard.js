import { withStyles, Card, CardContent, Slide } from '@material-ui/core';

const StyledCard = withStyles({
  root: {
    maxHeight: '13rem',
    position: 'relative',
    background: '#00000033',
    color: '#fff',
  },
})(Card);

const StyledSlide = withStyles({
  root: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '0',
    backgroundColor: 'rgba(255, 255, 255, 0.900)',
    padding: '1rem',
    color: '#636363',
    backdropFilter: 'blur(10px)',
  },
})(Slide);

function WeatherCard({ index: i, slide, children, childrenSlide }) {
  return (
    <StyledCard>
      <CardContent>{children}</CardContent>
      <StyledSlide
        direction="up"
        in={slide[i]}
        mountOnEnter
        unmountOnExit
        children={childrenSlide}
      >
        <CardContent>{childrenSlide}</CardContent>
      </StyledSlide>
    </StyledCard>
  );
}

export default WeatherCard;
