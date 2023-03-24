
import * as React from 'react';
import Button1 from '../components/Button1';
import Typography1 from '../components/Typography1';
import ProductHeroLayout from './ProductHeroLayout';
import yellow from ".";
 const backgroundImage =
  'https://img.freepik.com/free-vector/hand-drawn-question-mark-pattern_23-2149416649.jpg?w=826&t=st=1679680281~exp=1679680881~hmac=6a69290f12e888217a25cf41fb34a2a24dc9013aac098d6879c9d66aa8db9d27';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography1 color="inherit" align="center" variant="h2" marked="center">
        Create your own Trivia
      </Typography1>
      <Typography1
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Play your own trivia with friends!
      </Typography1>
      <Button1
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/game"
        sx={{ minWidth: 200 }}
      >
        PLAY
      </Button1>
      <Typography1 variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography1>
    </ProductHeroLayout>
  );
}