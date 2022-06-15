import React from "react";
import { ReadData } from "../components/firebase/db/actions";

// export async function getServerSideProps() {
//     const posts = [""]
//     return {
//         props: { posts }, // will be passed to the page component as props
//     };
// }

// const Gallery:React.FC = ({posts}) => {

//     return <div>

//     </div>
// }

const Gallery = () => {
    React.useEffect(() => {
        ReadData();
    }, []);
    return <div></div>;
};

export default Gallery;
