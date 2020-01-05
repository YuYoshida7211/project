import React from 'react';
import '../../../css/postbox.css';
import { imageUrl } from '../const/imageUrl'

export const Postbox = () => {
    return (
        <div className="flexitem item1">
            <a href="#modal-01">
                <div className="box">
                    <div className='left-box'>
                        <img src={imageUrl.defaultIcon} className='icon' />
                    </div>
                    <div className='right-box'>
                        <p className="user-name"><b>Yoshida</b></p>
                        <p className="user-id">@yoshida7211</p>
                        <div className='textwrap'>
                            テキスト表示
                            長ければhiddenにする
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}