import React from 'react';
import { imageUrl } from '../const/imageUrl'
import '../../../css/home.css';
export default class Home extends React.Component {

    render() {
        return (
            <div className='wrapper'>
                <div className='top-image'>
                    <img src={imageUrl.top} alt='TOP画面' className='top-image' />
                </div>
            </div>
        );
    }
}
