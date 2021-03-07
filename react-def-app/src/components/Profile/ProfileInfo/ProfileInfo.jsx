import React from 'react';
import style from './ProfileInfo.module.css';

export default function ProfileInfo() {
  return (
    <div>
      <div>
        <img src="https://www.muralswallpaper.com/app/uploads/Green-Tropical-Plant-Wallpaper-Mural-Plain-820x532.jpg" />
      </div>
      <div className={style.descriptionBlock}>ava + descr</div>
    </div>
  );
}
