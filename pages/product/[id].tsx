import { useRouter } from "next/router"

const Product = ()=>{

  const router = useRouter()
  return (
    <>
    {router.query}
    </>
  )
}

export default Product