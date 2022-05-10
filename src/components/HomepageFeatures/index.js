import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Why and where?',
    Svg: require('@site/static/img/imgs/1200px-USA_Flag_Map.svg').default,
    description: (
      <>
        The aim of this project is to explore factors related to obesity.
        Are people in areas with a higher number of fastfood restaurents more susceptible to being obese? 
        And what other causes could be related to obesity.
      </>
    ),
  },
  {
    title: 'Green challenge',
    Svg: require('@site/static/img/imgs/goal3.svg').default,
    description: (
      <>
      This project adheres primarily to the 3rd Sustainable Development Goal provided by the United Nations. 
      </>
    ),
  },
  {
    title: 'Why food and health? ',
    Svg: require('@site/static/img/imgs/food.svg').default,
    description: (
      <>
       Food is vitle; what affects our choises?
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
