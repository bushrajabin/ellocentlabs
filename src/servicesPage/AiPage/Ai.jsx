import { aiData } from "../../apiData/Ai"
const aiImage = "./Images/ai.png"
const chatBotImage = "./Images/chat-bot.png"


const Ai = () => {
    return (
        <div>
            <div className=" bg-teal-300 flex flex-row justify-between cursor-pointer  ">
                <div className=" px-10 pt-36 w-2/3 text-5xl -tracking-tighter">
                    <h2 className="">Artificial Intelligence</h2>
                    <button>Home</button>
                </div>
                <div className="ai-image">
                    <img src={aiImage} alt="" />
                </div>
            </div>

            <div className="flex flex-row">
                <div className=" px-8 pt-7  ">
                    <h2 className="text-5xl font-bold tracking-wider">What Is Artificial Intelligence?</h2>
                    <p className="text-lg pt-5 tracking-wider">Ellocent Labs IT Solutions Pvt. Ltd. is a trusted, highly reputable software development company. We build scalable, robust software solutions for web, mobile, cloud and data. With our proactive approach, we are always ready to tackle your most important initiatives in business. Additionally, our vetted teams of developers provide state-of-the-art technologies for startups, enterprises and entrepreneurs as we are ready to support your vision and growth with our world-class expertise.
                        AI stands for Artificial Intelligence, and it’s a branch of computer science. The Artificial Intelligence Development Service aims to build smart machines or computers that have the intelligence power for decision making just like humans do. Let’s understand this concept more with some examples.</p><br></br>
                    <h3 className="font-semibold text-2xl tracking-wide px-2 cursor-pointer"> • Chatbots are the new trend in the market which use the AI concept for understanding the customers problems and based on their decision making power and chatbots provide efficient solutions</h3><br></br>
                    <h3 className="font-semibold text-2xl tracking-wide px-2 pb-6 cursor-pointer ">  •Recommendation engines can provide an automatic recommendation to the users based on their interests & behavior.
                    </h3>

                </div>
                <div className=" px-10 pt-10" >
                    <img src={chatBotImage} alt="" className="max-w-xl max-h-full px-9" />
                </div>
            </div>

            <div>
                <div className="text-center ">
                    <h2 className="text-4xl font-bold text-slate-800 pt-6" >Applications</h2>
                    <h3 className="text-2xl pb-5 pt-3">Artificial Intelligence Applications</h3>
                </div>
                <div className="flex flex-row flex-wrap  justify-between  p-20 w-auto">
                    {

                        aiData.map((data, index, arr) => {
                            const { title, image,number } = data
                            return (
                                <div className=" bg-slate-200 flex flex-row flex-row-reverse m-7 p-6 w-96  h-auto rounded-br-3xl">
                                    <img src={number} alt=""  className=" w-12  relative right-80 pr-2 mr-3 "/>
                                    <img src={image} alt="" className=" w-16  h-16 relative bottom-14 left-28 m-4" />
                                    <h2 className="text-2xl ml-3">{title}</h2>
                                </div>
                            )
                        })

                    }
                </div>

            </div>
        </div>

    )
}

export default Ai;