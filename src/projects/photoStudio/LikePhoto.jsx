import React, {useState} from 'react'
import Title from '../components/components/Title'
import { AiFillSmile, AiFillHeart, AiOutlineHeart, AiOutlineComment } from 'react-icons/ai'
import dog from './img/english-bulldog-7258124_1920.jpg'

export default function LikePhoto() {
    
    const [Like, setLike] = useState(false);
    const [count, setCount] = useState(0);

    const toggleLike =()=>{
        if(!Like){
            setLike(true);
            setCount(count +1+1);
        } else{
            setLike(false);
            setCount(count-1);
        }
    }
  return (
    <div className='container text-center'>
      <h3>Photo Studio</h3>
      <Title text={"Like Photo App"} />
      <Title classes={"subtitle"} text={`Likes ${count}`} />
      <div className="card card-dark m-auto shadow-md" 
        style={{width:300, cursor: "pointer"}}>
            <div className="card-header fs-xl">
                <AiFillSmile className="mr-2"/>
                <small>Doggydog</small>
            </div>
            <img src={dog} alt="" style={{ height: "fit-content"}} 
                onClick={toggleLike}></img>
            <div className="card-footer fs-xl d-flex"
               style={{justifyContent: "space-between"}}
               onDoubleClick={toggleLike}>
                <AiOutlineComment/>{""}
                {Like ? <AiFillHeart className="text-danger" onClick={toggleLike} />:
                <AiOutlineHeart onClick={toggleLike}/>}   
            </div>
      </div>
    </div>
  )
}
