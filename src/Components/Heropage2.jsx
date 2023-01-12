import React, {useRef} from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Spinner from "./utils/Spinner";
import Mediacard2 from '../Components/Mediacard2';
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";

export default function Heropage2({data, error, loading}) {
    const scrollRef = useRef();
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 1000;
    } else {
      current.scrollLeft += 1000;
    }
  };
  const findshow = data.filter(
    (accessShow) => accessShow.rating.average >=  8
  );
  console.log(findshow)

  return (
    <>
      <div className="container-lg mt-5 py-3 text-uppercase">
        <Link to='top rated' target='_Blank' className="fw-2">Top rated</Link>
      </div>
      <div className="position-relative p-3">
          <div ref={scrollRef} className="d-flex Hero">
            {loading && <Spinner />}
            {error ||
              (findshow && (
                <>
                  {error && <p>Currently Unavailable</p>}
                  {findshow.map((scriptedtv) => (
                    <Mediacard2 key={scriptedtv.id} {...scriptedtv} />
                  ))}
                </>
              ))}
          </div>
          <div className="d-none d-md-flex  align-items-center justify-content-between w-100 position-absolute" style={{top: '40%'}}>
            <IoMdArrowDropleftCircle
              className="text-white"
              size="3.2rem"
              style={{ cursor: "pointer" }}
              onClick={() => scroll("left")}
            />
            <IoMdArrowDroprightCircle
              className="text-white"
              size="3.2rem"
              style={{ cursor: "pointer" }}
              onClick={() => scroll("right")}
            />
          </div>
        </div>

    </>
  );
}
