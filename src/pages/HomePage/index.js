import * as React from 'react';
import {ProductCategories,ProductSmokingHero,ProductHero,ProductHowItWorks,ProductValues,ProductCTA} from '../../views/index';
import {Navbar} from '../../components'

function HomPage() {
  return (
    <React.Fragment>
      <Navbar/>
      <ProductHero />
      <ProductValues />
      
    </React.Fragment>
  );
}

export default HomPage;
