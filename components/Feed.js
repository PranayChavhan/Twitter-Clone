import { SparklesIcon } from "@heroicons/react/outline"
import Input from "./Input"

const Feed = () => {
    return (
        <div className="text-white min-h-screen flex-grow sm:border-l sm:border-r md:ml-16 sm:ml-20  border-gray-700 max-w-2xl xl:ml-[340px]">
            <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
                <h2 className="text-lg  font-bold">Home</h2>
                <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
                    <SparklesIcon className="h-5 text-white" />
                </div>
            </div>
            <Input />
        </div>
    )
}

export default Feed
