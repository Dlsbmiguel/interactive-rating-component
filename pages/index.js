import Head from "next/head";
import StarComponent from "../components/icons/StarComponent";
import CircleComponent from "../components/circleComponent";

const numbersArray = ["1", "2", "3", "4", "5"];

export default function Home() {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <main className="bg-blackish flex items-center h-screen">
        <div className="text-white max-w-xs mx-auto bg-gradient-to-b from-darkBlue to-gradientBlue py-7 px-6 rounded-lg">
          <div className="bg-darkBlue inline-block rounded-full p-2 mb-3 shadow-black">
            <StarComponent />
          </div>
          <div>
            <h2 className="font-bold">How did we do?</h2>
            <p className="my-3 text-lightGrey font-normal">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <div className="flex">
            {numbersArray.map((element, index) => (
              <CircleComponent element={element} key={index} />
            ))}
          </div>
          <button className="bg-primaryColor py-2 px-24 rounded-full max-w-xs mt-5 tracking-widest">
            SUBMIT
          </button>
        </div>
      </main>
    </>
  );
}
