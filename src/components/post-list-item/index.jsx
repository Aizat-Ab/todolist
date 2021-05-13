import React from 'react';
import './index.scss';


const PostListItem = ({label, onDelete}) => {
    return (
        <div>
            <li className='postItem'>
                <span className='postItem__span'>{label}</span>
            <div className='postItem__button'>
            <button className = 'postItem__star'>
                <i>
                <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.8364 12.3245L24.0443 10.7277L19.22 0.770296C19.0882 0.497669 18.8714 0.276971 18.6037 0.142821C17.9321 -0.194718 17.116 0.0865644 16.7802 0.770296L11.9558 10.7277L1.16373 12.3245C0.866192 12.3678 0.594158 12.5106 0.385882 12.7269C0.134088 12.9904 -0.00466244 13.3449 0.000119635 13.7125C0.00490171 14.0801 0.152825 14.4307 0.411385 14.6873L8.21961 22.4377L6.37488 33.3817C6.33162 33.6363 6.35929 33.8981 6.45476 34.1375C6.55022 34.3769 6.70966 34.5842 6.91499 34.7361C7.12032 34.8879 7.36333 34.9781 7.61646 34.9965C7.86959 35.0149 8.12271 34.9607 8.34713 34.84L18.0001 29.6731L27.653 34.84C27.9166 34.9828 28.2226 35.0304 28.5159 34.9785C29.2555 34.8487 29.7528 34.1347 29.6253 33.3817L27.7806 22.4377L35.5888 14.6873C35.8013 14.4752 35.9416 14.1983 35.9841 13.8953C36.0989 13.1381 35.5803 12.437 34.8364 12.3245V12.3245Z" fill="#CB08E2"/>
</svg>
                </i>
            </button>

            <button onClick={onDelete} className= 'postItem__trash'>
                <i>
                <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 4L4.4545 25.114C4.63345 26.2079 5.11194 27.2309 5.83689 28.0695C6.56184 28.908 7.50492 29.5293 8.5615 29.8645L9.0535 30.0205C12.5974 31.1455 16.4026 31.1455 19.9465 30.0205L20.4385 29.8645C21.4949 29.5294 22.4378 28.9083 23.1628 28.0701C23.8877 27.2318 24.3663 26.2092 24.5455 25.1155L28 4" stroke="#CB08E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 7C21.9558 7 28 5.65685 28 4C28 2.34315 21.9558 1 14.5 1C7.04416 1 1 2.34315 1 4C1 5.65685 7.04416 7 14.5 7Z" stroke="#CB08E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                </i>
            </button>

            <button className= 'postItem__heart'>
                <i>
                <svg width="38" height="35" viewBox="0 0 38 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.2599 6.36668C38.9858 11.7288 37.5414 17.185 34.4976 21.2961C32.4884 24.0839 30.0873 26.4866 27.6324 28.5871C25.3738 30.7011 20.3195 34.8838 18.9797 35C17.7956 34.7724 16.4669 33.426 15.5268 32.733C10.2443 28.6953 4.55778 23.7851 1.67447 18.4164C-0.742964 13.2622 -0.747398 6.88715 3.01501 2.93558C7.89358 -1.48676 15.2485 -0.622629 18.9797 3.99761C19.9818 2.69053 21.214 1.66254 22.6764 0.913703C28.6048 -1.46572 34.7722 0.958854 37.2599 6.36668V6.36668Z" fill="#CB08E2"/>
</svg>
                </i>
            </button>
            </div>
            </li>
        </div>
    )
}

export default PostListItem
