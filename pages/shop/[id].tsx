import { useRouter } from "next/router"

const Shop = ()=>{

  const router = useRouter()
  const {id} = router.query
  return (
    <>
   {id}
    </>
  )
}

export default Shop