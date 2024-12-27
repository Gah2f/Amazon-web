import React from 'react'

function Cart() {
    const [{ basket, user }, dispatch] = useContext(DataContext);
  return (
    <div>
    <Layout>
    </Layout>
    </div>
  )
}

export default Cart