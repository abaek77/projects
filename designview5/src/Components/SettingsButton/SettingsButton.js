import React from 'react';
import './SettingsButton.css'

function SettingsButton () {
    return (
        <div className="rightnav">
         <button className="settings"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png" alt="" className="gear"/></button>
         <button className="notifications"><img src="https://img.icons8.com/ios/452/appointment-reminders--v1.png" alt="" className="noti" /> </button>
          </div>
    )
}

export default SettingsButton;