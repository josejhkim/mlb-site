import Link from "next/link";
import Picture from "./components/home/picture";
import FeatureParagraph from "./components/home/featureparagraph";
import ReviewCard from "./components/home/reviewcard";

export default function Home() {
  return (
    <>
      <div className="flex justify-between">
        <div className="text-white">
          <h1 className="font-black text-7xl mb-4">
            Lorem Ipsum
          </h1>
          <p className="font-medium text-2xl leading-10 mb-8">
            Neque porro quisquam est qui
            <br />
            dolorem ipsum quia dolor sit amet,
            <br />
            consectetur, adipisci velit...
          </p>
          <div className="flex justify-between">
            <Link href="/guide" className="font-extrabold bg-[#EBF0EB] text-black rounded-md text-2xl w-[42%] text-center py-3">
              Watch a demo
            </Link>
            <Link href="/pricing" className="font-extrabold bg-[#EBF0EB] text-black rounded-md text-2xl w-[42%] text-center py-3">
              View pricing
            </Link>
          </div>
        </div>
        <div className="hidden md:block relative">
          <Picture pos={'relative right-10'} dim={[80, 72]} rotation={-7} img={"null"} />
          <Picture pos={'absolute top-32 left-20'} dim={[80, 72]} rotation={17} img={"null"} />
        </div>
      </div>
      <div className="flex flex-col items-center mt-64">
        <h2 className="text-white font-extralight text-5xl">
          Neque porro quisquam est qui
        </h2>
        <div className="flex justify-between mt-28">
          <FeatureParagraph heading="dolorem ipsum" body="Ut dictum, tellus ut elementum faucibus, orci ipsum aliquet tortor, quis convallis erat erat eget libero. Duis eu mattis urna. Sed vestibulum lorem neque, non placerat urna sollicitudin ut." />
          <FeatureParagraph heading="dolorem ipsum" body="Ut dictum, tellus ut elementum faucibus, orci ipsum aliquet tortor, quis convallis erat erat eget libero. Duis eu mattis urna. Sed vestibulum lorem neque, non placerat urna sollicitudin ut." />
          <FeatureParagraph heading="dolorem ipsum" body="Ut dictum, tellus ut elementum faucibus, orci ipsum aliquet tortor, quis convallis erat erat eget libero. Duis eu mattis urna. Sed vestibulum lorem neque, non placerat urna sollicitudin ut." />
        </div>
      </div>
      <div className="flex flex-col items-center mt-44">
        <h2 className="text-white font-extralight text-5xl">
          Reviews from our customers
        </h2>
        <div className="flex mt-28 mb-12 w-full justify-between">
          <ReviewCard reviewerImage="null" reviewText="Ut dictum, tellus ut elementum faucibus, orci ipsum aliquet tortor, quis convallis erat erat eget libero. Duis eu mattis urna. Sed vestibulum lorem neque, non placerat urna sollicitudin ut. " stars={5}/>
          <ReviewCard reviewerImage="null" reviewText="Ut dictum, tellus ut elementum faucibus, orci ipsum aliquet tortor, quis convallis erat erat eget libero. Duis eu mattis urna. Sed vestibulum lorem neque, non placerat urna sollicitudin ut. " stars={5}/>
          <ReviewCard reviewerImage="null" reviewText="Ut dictum, tellus ut elementum faucibus, orci ipsum aliquet tortor, quis convallis erat erat eget libero. Duis eu mattis urna. Sed vestibulum lorem neque, non placerat urna sollicitudin ut. " stars={5}/>
        </div>
      </div>
    </>
  );
}
