import { Manrope } from "next/font/google";
import Link from "next/link";

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

// SomethingWentWrong;
const SomethingWentWrong = () => {
  return (
    <div className={`${manrope.className}`}>
      <div className="screenHeight d-flex jc-center a-center">
        <div className="d-flex jc-center a-center d-column boxMaxWidth">
          <div className="icon404Wrap"></div>
          <h1 className="font22 font500 mb-10 darkText">
            Something went wrong!
          </h1>
          <p className="mb-20">
            Some error has occured , we suggest you to back home
          </p>
          <div>
            <Link href="/" className="primaryBtn btnInline2">
              Take me home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SomethingWentWrong;
