const DeleteButton = ({deleteProduct, id, styles}) => {
  return (
    <button onClick={() => deleteProduct(id)} className={styles.deleteButton}>
        Delete
    </button>
  )
}

export default DeleteButton