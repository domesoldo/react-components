import Skeleton from "../components/Skeleton"

const SkeletonPage = () => {
  return (
    <div className="bg-white p-6">
      <Skeleton times={10} className="h-10 w-full" />
    </div>
  )
}

export default SkeletonPage
