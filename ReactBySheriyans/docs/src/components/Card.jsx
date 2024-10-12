import PropTypes from 'prop-types';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data, reference }) {
    const { desc = '', filesize = '', close = false, tag = {}, } = data;
    return (
        <>
            <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={.1} dragTransition={{bounceStiffness: 100, bounceDamping: 30}} className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden p-5">
                <FaRegFileAlt />
                <p className="text-x5 leading-tight mt-5 font-semibold">{desc}</p>
                <div className="footer absolute bottom-0 w-full left-0">

                    <div className="flex items.center justify-between px-8 py-3 mb-3">
                        <h5>{filesize}</h5>
                        <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
                            {close ? <IoClose /> : <LuDownload size=".7em" color="#fff" />}

                        </span>
                    </div>
                    {tag.isOpen && (


                        <div className={`tag w-full py-4 ${tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                            <h3 className="text-sm font-semibold">
                                {tag.tagTitle}
                            </h3>
                        </div>

                    )
                    }
                </div>
            </motion.div>
        </>
    );
}

Card.propTypes = {
    data: PropTypes.shape({
        desc: PropTypes.string.isRequired,
        filesize: PropTypes.string.isRequired,
        close: PropTypes.bool.isRequired,
        tag: PropTypes.shape({
            isOpen: PropTypes.bool.isRequired,
            tagTitle: PropTypes.string.isRequired,
            tagColor: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    reference: PropTypes.object,
};
export default Card
