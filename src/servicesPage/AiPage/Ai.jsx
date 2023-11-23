const aiImage = "./Images/ai.png"

const Ai = () => {
    return (
        <div className=" bg-teal-300 flex flex-row justify-between cursor-pointer  ">
            <div className=" px-10 pt-36 w-2/3 text-5xl -tracking-tighter">
                <h2 className="">Artificial Intelligence</h2>
                <button>Home</button>
            </div>
            <div className="ai-image">
                <img src={aiImage} alt="" />
            </div>


        </div>
    )
}

export default Ai;