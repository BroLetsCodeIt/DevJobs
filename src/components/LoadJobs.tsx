/* eslint-disable no-undef */
export const LoadingCard = () => {
    return (
        <div className="w-[30rem] max-w-sm  overflow-hidden shadow-lg mt-2 h-[25rem] rounded-lg">
            <div className="w-full h-64 bg-gray-300 animate-pulse"></div>
            <div className="px-6 py-4 items-center">
                <div className="font-regular text-xl mb-2 w-20 h-4 bg-gray-300 animate-pulse"></div>
            </div>
        </div>
    );
}

export const LoadingPosts = () => {
    const loadPages = [1, 2, 3, 4, 5, 6];
    return (
        <div className="flex flex-wrap container mx-auto gap-[10rem] items-center justify-center w-full">
        {loadPages.map((num,i) => {return <LoadingCard key={i}/>})}
        </div>
    );
}