import Footer from "@/app/(marketing)/_components/footer";
import Heading from "@/app/(marketing)/_components/heading";
import Heroes from "@/app/(marketing)/_components/heroes";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div
        className="flex flex-col items-center justify-center dark:bg-[#1f1f1f]
        md:justify-start text-center gap-y-8 flex-1 px-6 pb-10"
      >
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
