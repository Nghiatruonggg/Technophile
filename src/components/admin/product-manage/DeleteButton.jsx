import React from 'react'

const DeleteButton = ({deleteProduct, id}) => {
  return (
    <button onClick={() => deleteProduct(id)} className='delete-button'>
        Delete
    </button>
  )
}

export default DeleteButton