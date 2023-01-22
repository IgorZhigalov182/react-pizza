import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="129" cy="126" r="125" />
    <rect x="0" y="273" rx="5" ry="5" width="280" height="20" />
    <rect x="150" y="304" rx="0" ry="0" width="25" height="1" />
    <rect x="0" y="314" rx="5" ry="5" width="280" height="63" />
    <rect x="1" y="400" rx="10" ry="10" width="95" height="30" />
    <rect x="124" y="400" rx="20" ry="20" width="152" height="40" />
  </ContentLoader>
);

export default Skeleton;
