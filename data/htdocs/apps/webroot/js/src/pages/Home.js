import React from 'react';
import { imageUrl } from '../const/imageUrl';
import { getResultJson } from '../fetch/FetchJson'
import '../../../css/home.css';
export default class Home extends React.Component {
    /** 
     * ①componentDidMountで非同期関数実行
     * ②store保存
     **/
    render() {
        return (
            <div className='wrapper'>
                <div className='top-image'>
                    <img className="logo-image" src={imageUrl.logo} alt="ロゴ" />
                    <p className="user-name">HELLO GUEST！</p>
                    <p className="top-text">Check out the latest popular posts！</p>
                </div>
            </div>
        );
    }
}
