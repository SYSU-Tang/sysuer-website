import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '界面美观，体积简洁',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        中大儿遵循Google官方的Material Design 3 界面设计，基于原生Java开发，摆脱了官方网页臃肿的界面，提供了更加简洁更为美观的操作界面，同时维持较小的占用储存。
      </>
    ),
  },
  {
    title: '功能完善，操作简单',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        中大儿提供了丰富的功能，包括但不限于：课程表、考试表、成绩查询、选课、评教等。同时，操作简单易上手，适合日常使用。
      </>
    ),
  },
  {
    title: '开源免费，安全开放',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        中大儿是一个开源项目，所有的代码都在GitHub上开源，用户可以自由地查看、修改和分发。同时，中大儿是免费的，用户无需支付任何费用即可使用。
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
        <Heading as="h3">{title}</Heading>
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
