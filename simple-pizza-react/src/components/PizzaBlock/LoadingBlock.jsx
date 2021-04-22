import React from 'react';
import ContentLoader from 'react-content-loader';

export default function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="140" cy="140" r="140" />
      <rect x="0" y="300" rx="3" ry="3" width="280" height="26" />
      <rect x="0" y="340" rx="6" ry="6" width="280" height="54" />
      <rect x="-3" y="404" rx="3" ry="3" width="72" height="33" />
      <rect x="141" y="404" rx="20" ry="20" width="134" height="33" />
    </ContentLoader>
  );
}
