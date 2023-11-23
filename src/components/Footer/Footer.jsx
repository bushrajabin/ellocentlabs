import { socialImage } from "../../apiData/Social"

const Footer = () => {
    return (
        <div className=" bg-red-700  sm:bg-pink-400 md:bg-yellow-200 lg:bg-green-400  xl:bg-teal-300 ">
            <div className="  bg-yellow-700 cursor-pointer md:bg-red-200 lg:bg-blue-500 xl:bg-pink-600 flex flex-col ">
                <div className="bg-red-950  md:bg-red-200 text-sm text-yellow-950  lg:bg-blue-500 xl:bg-pink-600 flex flex-col  ">
                    <h2 className="text-4xl pt-5 px-5">About Company</h2>
                    <p className=" pt-2 px-5 tracking-wide text-pink-500 text-lg  md:text-2xl   sm:text-red-600 text-sm  lg:text-yellow-300 ">We at Ellocent Labs IT Solutions Pvt. Ltd. use Scrum, the most popular Agile Framework in our software development process. This is an iterative approach that has at its core the sprint — the scrum term for iteration.</p>
                </div>
                <div className=" w-96 pt-10  flex flex-col gap-4 text-center">
                    <h3 className="text-2xl ">Useful Links</h3>
                    <button className=" text-xl ">Contact US</button>
                </div>
                <div className="pt-10 px-10 flex flex-col gap-4 xl: bg-white">
                    <h2 className="text-4xl">Reach Us</h2>
                    <i class="fa-solid fa-location-dot"><h3> Plot No. C-184 Industrial Area, Phase VIIIA, Sector 75, Sahibzada Ajit Singh Nagar, Punjab 160071</h3></i>
                    <i class="fa fa-regular fa-envelope"><button>hr@ellocentlabs.com</button></i>
                    <h2>+91 7499677200</h2>
                </div>
            </div>

            <div className=" flex flex-col ">
                <div className=" flex flex-row p-10 justify-center">
                    {
                        socialImage.map((data, index, arr) => {
                            const { image, title, links } = data;
                            return (
                                <div className="w-20  ">
                                    <a href={links} target="_blank"><img src={image} alt="" className="w-10 h-10 object-cover bg-white rounded-full " /></a>

                                </div>
                            )
                        })
                    }
                </div>
                <div className=" flex justify-center items-center text-lg p-2">
                    <h2>copyright © 2023 </h2>
                    <a href="https://ellocentlabs.com/" className="">Ellocent Labs IT Solutions Pvt.Ltd</a>
                </div>
            </div>
        </div>


    )
}

export default Footer