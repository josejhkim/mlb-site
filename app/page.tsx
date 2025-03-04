import Link from "next/link";
import Picture from "./components/home/picture";
import FeatureParagraph from "./components/home/featureparagraph";
import ReviewCard from "./components/home/reviewcard";

export default function Home() {
  return (
    <>
      <div className="
        flex 
        justify-center lg:justify-between
      ">

        <div className="
          flex flex-col 
          text-white
          items-center lg:items-start
        ">

          <h1 className="
            font-black 
            text-5xl sm:text-6xl md:text-7xl
            mb-4
          ">
            Lorem Ipsum
          </h1>

          <p className="
            font-medium
            text-center lg:text-left 
            text-lg sm:text-xl md:text-2xl 
            leading-8 sm:leading-9 md:leading-10 
            mb-8
          ">
            Neque porro quisquam est qui
            <br />
            
            dolorem ipsum quia dolor sit amet,
            <br />

            consectetur, adipisci velit...
          </p>

          <div className="
            flex w-full justify-between
          ">

            <Link 
              href="/guide" 
              className="
              w-[42%] 
              px-1 lg:px-0
              py-2 sm:py-3 lg-px-4
              rounded-md  
              flex items-center justify-center  
              bg-[#EBF0EB] 
              text-center
              text-base sm:text-lg md:text-xl lg:text-2xl
              font-extrabold 
              text-black 
            ">
              Watch a demo
            </Link>

            <Link 
              href="/pricing" 
              className="
                w-[42%] 
                px-1 lg:px-0
                py-2 sm:py-3 lg:py-4
                flex items-center justify-center
                rounded-md  
                bg-[#EBF0EB] 
                text-center 
                text-base sm:text-lg md:text-xl lg:text-2xl
                font-extrabold 
                text-black 
            ">
              View pricing
            </Link>
          </div>
        </div>

        <div className="
          hidden lg:block 
          relative
        ">
          <Picture 
              pos={'relative right-10'} 
              dim={[80, 72]} 
              rotation={-7} 
              img={"https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"} 
          />

          <Picture 
            pos={'absolute top-32 left-20'} 
            dim={[80, 72]} 
            rotation={17} 
            img={"https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"} 
          />
        </div>
      </div>

      <div className="
        mt-32 lg:mt-64
        flex flex-col items-center 
      ">

        <h2 className="
          text-center
          text-3xl sm:text-4xl md:text-5xl
          font-bold
          text-white 
        ">
          Neque porro quisquam est qui
        </h2>

        <div className="
          mt-16 lg:mt-28
          flex flex-col lg:flex-row 
          items-center` justify-between 
          gap-14
        ">

          <FeatureParagraph 
            heading="dolorem ipsum" 
            body="Ut dictum, tellus ut elementum faucibus, orci ipsum aliquet tortor, quis convallis erat erat eget libero. Duis eu mattis urna. Sed vestibulum lorem neque, non placerat urna sollicitudin ut." 
          />

          <FeatureParagraph 
            heading="dolorem ipsum" 
            body="Ut dictum, tellus ut elementum faucibus, orci ipsum aliquet tortor, quis convallis erat erat eget libero. Duis eu mattis urna. Sed vestibulum lorem neque, non placerat urna sollicitudin ut." 
          />

          <FeatureParagraph 
            heading="dolorem ipsum" 
            body="Ut dictum, tellus ut elementum faucibus, orci ipsum aliquet tortor, quis convallis erat erat eget libero. Duis eu mattis urna. Sed vestibulum lorem neque, non placerat urna sollicitudin ut." 
          />
        </div>
      </div>

      <div className="
        mt-28 lg:mt-44
        flex flex-col items-center 
      ">

        <h2 className="
          text-center 
          text-3xl sm:text-4xl md:text-5xl
          font-bold
        text-white 
        ">
          Reviews from our customers
        </h2>

        <div className="
          w-fit lg:w-full
          mt-12 lg:mt-28 
          mb-12 
          flex
          flex-col lg:flex-row 
          gap-10 
          justify-between items-center
        ">

          <ReviewCard 
            reviewerImageURL="https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww" 
            reviewText="Ut dictum, tellus ut elementum faucibus, orci ipsum aliquet tortor, quis convallis erat erat eget libero. Duis eu mattis urna. Sed vestibulum lorem neque, non placerat urna sollicitudin ut." 
            stars={5}
          />

          <ReviewCard 
            reviewerImageURL="https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww" 
            reviewText="Ut dictum, tellus ut elementum faucibus, orci ipsum aliquet tortor, quis convallis erat erat eget libero. Duis eu mattis urna. Sed vestibulum lorem neque, non placerat urna sollicitudin ut." 
            stars={5}
          />

          <ReviewCard 
            reviewerImageURL="https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww" 
            reviewText="Ut dictum, tellus ut elementum faucibus, orci ipsum aliquet tortor, quis convallis erat erat eget libero. Duis eu mattis urna. Sed vestibulum lorem neque, non placerat urna sollicitudin ut." 
            stars={5}
          />
        </div>
      </div>
    </>
  );
}
