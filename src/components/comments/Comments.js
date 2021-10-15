import React, { useState, useEffect } from 'react';
import { HiStar } from 'react-icons/hi'
import '../../css/comment.css'
import { MdDelete } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'
import Rating from '../../components/rating'
import { useParams } from 'react-router-dom';
import { getCommentByProductId, addComment, updateComment } from '../../actions/ActionWithProduct'
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Icon} from '../../assets/img/svg/emptybox.svg'


const Comments = () => {
  const [comments, setComments] = useState([])
  const { id } = useParams()
  const [loading, setLoading] = useState(false)

  const users = useSelector(state => state.lo.users)
  const login = useSelector(state => state.lo.isLogin)
  const commentGlobal = useSelector(state => state.comment.comments)
  const isExist = useSelector(state => state.comment.isExist)

  const [isLogin, setIsLogin] = useState(false)
  const [CustomerId, setCustomerId] = useState('')
  const userCurrent = JSON.parse(localStorage.getItem('login'))

  const [existComment, setExistComment] = useState(true)
  const [commentContent, setCommentContent] = useState('')
  const [ratings, setRatings] = useState(0)
  const [editId, setEditId] = useState('')

  const dispatch = useDispatch()


  useEffect(() =>{
    setLoading(true)
    dispatch(getCommentByProductId(id,(res) =>{
      if(res) setLoading(false)
    }))
  },[id,dispatch])

  useEffect(() =>{
    const getUsersById = (usersId, users) => {
      const arr = users.filter(user => usersId.includes(user.idUser))
      return arr
    }
  
    const generate = (data) =>{
      const commentList = data.commentList
      let usersList = []
      for (let comment of commentList) {
        if (usersList.includes(comment.userId) === false) {
          usersList.push(comment.userId)
        }
      }
      const Users = getUsersById(usersList,users)

      const obj =  {
        usersList: Users,
        comments: commentList
      }
  
      const arr = obj.comments.map(comment => {
        let userInfo = obj.usersList.find(user => user.idUser === comment.userId)
        return {
          ...comment,
          name: userInfo.name,
          image: userInfo.img,
          email: userInfo.email
        }
      })
      setComments(arr)
    }

    if(JSON.stringify(commentGlobal) !== '[]' && JSON.stringify(commentGlobal) !== '{}'){
      generate(commentGlobal)
    }

    return () => setComments([])
  },[commentGlobal, users])


  useEffect(() => {
    setIsLogin(login)
  }, [login]);

  useEffect(() =>{
    setExistComment(isExist)
  },[isExist])


  useEffect(() => {
    if(userCurrent !== null){
      setCustomerId(userCurrent.id)
    }
  }, [userCurrent]);


  const handleClick = () =>{
    if(ratings){
      if(commentContent){
        if(existComment){
          const newArr = comments.map((item) =>{
            return {
              id: item.id,
              userId: item.userId,
              ratings: item.ratings,
              content: item.content
            }
          })

          const comment = {
            id:id,
            productId:id,
            commentList:[
              ...newArr,
              {
                id:newArr[newArr.length - 1].id + 1,
                userId:userCurrent.id,
                ratings:ratings,
                content:commentContent
              }
            ]
          }

          dispatch(updateComment(id, comment))
          setCommentContent('')
          setRatings(0)
        }else{
          const comment = {
            id:id,
            productId:id,
            commentList:[
              {
                id:1,
                userId:userCurrent.id,
                ratings:ratings,
                content:commentContent
              }
            ]
          }
          dispatch(addComment(comment))
          setCommentContent('')
          setRatings(0)
        }
      }else{
        alert('Vui lòng nhập comment')
      }
    }else{
      alert('Vui lòng đánh giá sản phẩm bằng số sao')
    }
  }


  const handleDelete = (idDelete) =>{
    const isdelete = window.confirm("xóa bình luận");
    if(isdelete){
      const newArr = commentGlobal.commentList.filter(item => item.id !== idDelete)
  
      const comment = {
        id:id,
        productId:id,
        commentList:newArr
      }

      dispatch(updateComment(id, comment))
    }
  }


  const handleEdit = (idEdit) =>{
    setEditId(idEdit)
    const item = commentGlobal.commentList.find(item => item.id === idEdit)
    setCommentContent(item.content)
    setRatings(item.ratings)
  }

  const handleSave = () =>{
    const newArr = commentGlobal.commentList.map(item =>{
      if(item.id === editId){
        return {
          id:editId,
          userId:userCurrent.id,
          ratings:ratings,
          content:commentContent
        }
      }
      return item
    })
    const comment = {
      id:id,
      productId:id,
      commentList:newArr
    }
    dispatch(updateComment(id, comment))
    setCommentContent('')
    setRatings(0)
  }


  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className='comment'>
      <h1 className='comment-title'>Đánh giá sản phẩm</h1>
      {
        comments.length === 0 && (<div style={{textAlign: 'center', marginTop: '50px'}}>
        <Icon/>
        <h1 style={{margin: '10px 0', fontSize: '16px'}}>Chưa có đánh giá :((</h1>
      </div>)
      }
      <ul className='comment-list'>
        {
          comments.map((comment, index) => {
            const { id, userId, name, image, email, content, ratings } = comment
            return (
              <li key={index} className='comment-item'>
                <img className='comment-user__avata' src={image} alt="" />
                <div className='comment-item__content'>
                  <div className='comment-item__content-first'>
                    <span className="comment-item__content-name">{name === '' ? email : name}</span>
                    <span className='comment-label'>{index} giờ trước</span>

                    {
                      isLogin && userId === CustomerId &&
                      <div className='comment-item__content-first__buttons'>
                        <button onClick={ e => handleDelete(id)}><MdDelete /></button>
                        <button onClick={ e => handleEdit(id)}><FaRegEdit /></button>
                      </div>
                    }
                  </div>
                  <div className="comment-item__rate">
                    {
                      [...Array(ratings)].map((star, i) => {
                        if (i + 1 === ratings && i + 1 < 5) {
                          return (
                            <span key={i}>
                              <i key={i}><HiStar size='15px' color='#ffc107' /></i>
                              {
                                [...Array(5 - ratings)].map((star2, index) => {
                                  return <i key={index}><HiStar size='15px' color='#e4e5e9' /></i>
                                })
                              }
                            </span>
                          )
                        }
                        return <i key={i}><HiStar size='15px' color='#ffc107' /></i>
                      })
                    }
                  </div>
                  <div className="comment-item__content-main">{content}</div>
                </div>
              </li>
            )
          })
        }
      </ul>

      {
        isLogin &&
        <div className='comment-box'>
          <img className='comment-user__avata'
            src={userCurrent.img} alt="" />
          <div className='comment-box__content'>
            <div className='comment-box__content-first'>
              <span className="comment-item__rate">
                <Rating setRatings={setRatings} ratings={ratings} />
              </span>
              <span className='comment-label'>(Vui lòng đánh giá chất lượng sản phẩm)</span>
            </div>
            <div className='comment-box__content-second'>
              <textarea onChange={e => setCommentContent(e.target.value)} 
              className='comment-box__content-area' value={commentContent} name="" 
              placeholder="Nhập nhận xét..." id="" cols="50" rows="5"></textarea>
              {
                editId ? (<button onClick={handleSave}  className='btn btn--primary'>Chỉnh sửa</button>) : (<button onClick={handleClick}  className='btn btn--primary'>Bình luận</button>)
              }
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Comments;