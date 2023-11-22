import "./Footer.css"
const Footer = () => {
    return (
        <div className="flex cursor-pointer">
           <div className=" pt-9 px-10 w-1/2 text-lg flex flex-col gap-4 ">
                <h2 className="text-4xl">About Company</h2>
                <p className="text-l tracking-wide">We at Ellocent Labs IT Solutions Pvt. Ltd. use Scrum, the most popular Agile Framework in our software development process. This is an iterative approach that has at its core the sprint — the scrum term for iteration.</p>
            </div>
            <div className=" w-96 pt-10  flex flex-col gap-4 text-center">
                <h3 className="text-2xl ">Useful Links</h3>
                <button className=" text-xl ">Contact US</button>
            </div>
            <div className="pt-10 px-10 flex flex-col gap-4">
                <h2 className="text-4xl">Reach Us</h2>
                <i class="fa-solid fa-location-dot"><h3> Plot No. C-184 Industrial Area, Phase VIIIA, Sector 75, Sahibzada Ajit Singh Nagar, Punjab 160071</h3></i>
                <i class="fa fa-regular fa-envelope"><button>hr@ellocentlabs.com</button></i>
             <h2>+91 7499677200</h2>
            </div>
        </div>
    )
}

export default Footer