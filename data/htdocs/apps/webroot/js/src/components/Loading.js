import React from 'react';
import '../../../css/loading.css';
import { imageUrl } from '../const/imageUrl'

export const Loading = () => {
    return (
        <div className="loading_box">
            <img className="loading" src={imageUrl.loading} />
        </div>

    )
}