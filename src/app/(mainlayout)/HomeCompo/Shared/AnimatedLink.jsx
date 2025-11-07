




'use client';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { goToSHOPS, goToPRODUCTS, goToBLOG, goToPAGES, returnHome } from '../../REDUX/SLICE/pageTransitionSlice';
import { showCurtain } from '../../REDUX/SLICE/showCurtainSlice';

const AnimatedLink = ({ href, children }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(showCurtain());

        if (href === '/shops') {
            dispatch(goToSHOPS());
        } else if (href === '/') {
            dispatch(returnHome());
        }

        if (href === '/products') {
            dispatch(goToPRODUCTS());
        } else if (href === '/') {
            dispatch(returnHome());
        }

        if (href === '/blog') {
            dispatch(goToBLOG());
        } else if (href === '/') {
            dispatch(returnHome());
        }


        if (href === '/pages') {
            dispatch(goToPAGES());
        } else if (href === '/') {
            dispatch(returnHome());
        }

        setTimeout(() => {
            router.push(href);
        }, 800);
    };

    return (
        <button
            onClick={handleClick}
            className=" px-2 py-1 sm:px-3 sm:py-2 
        hover:underline hover:text-green-400 transition-colors duration-300 
        w-full text-left sm:text-center"
        >
            {children}
        </button>
    );
};

export default AnimatedLink;
