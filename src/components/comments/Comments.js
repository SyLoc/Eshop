import React from 'react';
import { HiStar } from 'react-icons/hi'
import '../../css/comment.css'
import {MdDelete} from 'react-icons/md'
import {FaRegEdit} from 'react-icons/fa'
import Rating from '../../components/rating'

const Comments = () => {


  const handleChange = () =>{
    
  }

  return (
    <div className='comment'>
      <h1 className='comment-title'>Đánh giá sản phẩm</h1>
      <ul className='comment-list'>
        <li className='comment-item'>
          <img className='comment-user__avata' src="http://res.cloudinary.com/dy8145o0x/image/upload/v1628693190/newFolders/ysdkmtpekusqgy4ddlmp.jpg" alt="" />
          <div className='comment-item__content'>
            <div className='comment-item__content-first'>
              <span className="comment-item__content-name">Quỳnh Nguyễn</span>
              <span className='comment-label'>2 giờ trước</span>

              <div className='comment-item__content-first__buttons'>
                <button><MdDelete/></button>
                <button><FaRegEdit/></button>
              </div>
            </div>
            <div className="comment-item__rate">
              <HiStar size='15px' color='#ffc107' />
              <HiStar size='15px' color='#ffc107' />
              <HiStar size='15px' color='#ffc107' />
              <HiStar size='15px' color='#e4e5e9' />
              <HiStar size='15px' color='#e4e5e9' />
            </div>
            <div className="comment-item__content-main">
              sản phẩm tốt
            </div>
          </div>
        </li>

        <li className='comment-item'>
          <img className='comment-user__avata' src="http://res.cloudinary.com/dy8145o0x/image/upload/v1628693190/newFolders/ysdkmtpekusqgy4ddlmp.jpg" alt="" />
          <div className='comment-item__content'>
            <div className='comment-item__content-first'>
              <span className="comment-item__content-name">Thanh Nhã</span>
              <span className='comment-label'>3 ngày trước</span>
            </div>
            <div className="comment-item__rate">
              <HiStar size='15px' color='#ffc107' />
              <HiStar size='15px' color='#ffc107' />
              <HiStar size='15px' color='#ffc107' />
              <HiStar size='15px' color='#ffc107' />
              <HiStar size='15px' color='#ffc107' />
            </div>
            <div className="comment-item__content-main">
              dùng rất sướng
            </div>
          </div>
        </li>
      </ul>

      <div className='comment-box'>
        <img className='comment-user__avata'
          src="http://res.cloudinary.com/dy8145o0x/image/upload/v1628693190/newFolders/ysdkmtpekusqgy4ddlmp.jpg" alt="" />
        <div className='comment-box__content'>
          <div className='comment-box__content-first'>
            <span className="comment-item__rate">
              {/* <HiStar size='20px' color='#ffc107' />
              <HiStar size='20px' color='#ffc107' />
              <HiStar size='20px' color='#ffc107' />
              <HiStar size='20px' color='#ffc107' />
              <HiStar size='20px' color='#ffc107' /> */}
              <Rating/>
            </span>
            <span className='comment-label'>(Vui lòng đánh giá chất lượng sản phẩm)</span>
          </div>
          <div className='comment-box__content-second'>
            <textarea onChange={handleChange} className='comment-box__content-area' value=''  name="" placeholder="nhập nhận xét..." id="" cols="50" rows="5"></textarea>
            <button className='btn btn--primary'>Bình luận</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;