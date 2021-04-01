import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from './../../Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

export default function ProfileInfo(props) {
  // if (!props.profile) {
  //   return <Preloader />;
  // }

  return (
    <div>
      <div className={style.descriptionBlock}>
        <img
          src={
            'https://www.muralswallpaper.com/app/uploads/Green-Tropical-Plant-Wallpaper-Mural-Plain-820x532.jpg'
          }
        />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  );
}
