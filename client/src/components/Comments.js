import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { addComment } from "../actions/property";

const Comment  = (props) => {
    console.log(props.props._id);
    const id = props.props._id;
    const location  = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();

    const  [message , setMessage] = useState('');
    const  [messageTitle , setMessageTitle] = useState('');
    const onChangeMessageTitle = (e) => {
        const title = e.target.value;
        setMessageTitle(title);
      };
    
      const onChangeMessageBody = (e) => {
        const messageBody = e.target.value;
        setMessage(messageBody);
      };

      const handleAddComment = (e) => {
        e.preventDefault();
        console.log('test');
        dispatch(addComment(messageTitle, message , props.props._id))
        .then(() => {
          console.log('success');
        })
        .catch((e) => {
          console.log(e);
        });

    }


    return (
        <div className="property_block_wrap style-2">
          
        <div className="property_block_wrap_header">
          <a data-bs-toggle="collapse" data-parent="#comment" data-bs-target="#clTen" aria-controls="clTen" href="javascript:void(0);" aria-expanded="true"><h4 className="property_block_title">Write a Review</h4></a>
        </div>
        
        <div id="clTen" className="panel-collapse collapse show">
          <div className="block-body">
            <form className="simple-form">
              <div className="row">
                
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <textarea onChange={onChangeMessageBody} className="form-control ht-80" placeholder="Messages"></textarea>
                  </div>
                </div>
                
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <input onChange={onChangeMessageTitle} type="text" className="form-control" placeholder="Property Title"/>
                  </div>
                </div>
                
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <button onClick={handleAddComment} className="btn btn-theme-light-2 rounded">Submit Review</button>
                  </div>
                </div>
                
              </div>
            </form>
          </div>
        </div>
        
      </div>
    )
};
export default Comment;
