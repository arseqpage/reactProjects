import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from './../../Preloader/Preloader';

export default function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img src="https://www.muralswallpaper.com/app/uploads/Green-Tropical-Plant-Wallpaper-Mural-Plain-820x532.jpg" />
      </div>
      <div className={style.descriptionBlock}>
        <img src={props.profile.photos.large} />+ descr
      </div>
    </div>
  );
}
