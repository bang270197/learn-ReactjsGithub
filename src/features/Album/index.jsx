import React from 'react';
import PropTypes from 'prop-types';
import AlbumList  from './components/AlbumList';
AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhac hot 2021',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/4/0/c/740ce847c01a21c904193bf748bd58c9.jpg'
        
        },
        {
            id: 2,
            name: 'Nhac ngoai',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/7/8/5/9785c17b2916f068858cb3f7543cf5d9.jpg'
        },
        {
            id: 3,
            name: 'Nhac rap',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/c/1/4/0c145f070587bba2c714ed69d912ecac.jpg'
        },
    ]
    return (
        <div>
            <h3>List Album</h3>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;