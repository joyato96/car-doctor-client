import { GrLinkNext} from 'react-icons/gr';

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div>
            <div className="card w-[364px] h-[348px] bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Price:${price}</p>
                    <button className='text-[#FF3811]'>
                        {GrLinkNext}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;