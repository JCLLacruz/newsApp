import React from 'react'
import './Newnew.scss'

const Newnew = () => {
  return (
    <form>
    <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">Email address</label>
      <input type="text" className="form-control" id="newTitle" placeholder="New Title" />
    </div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Article</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
</form>
  )
}

export default Newnew