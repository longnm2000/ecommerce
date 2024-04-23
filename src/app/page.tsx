import Footer from "../components/layouts/footer/footer";
import Header from "../components/layouts/header/header";
import PopularProduct from "../components/ui/popular-products";
import Article from "../components/ui/article";
import BannerSlider from "../components/ui/banner-slider";
import FeaturedCategory from "../components/ui/featured-category";
import MultipleItems from "../components/ui/mt";
import CategoryCard from "../components/common/category-card";
import DefaultButton from "../components/common/default-button";
import CustomRangeInput from "../components/common/custom-range-input";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-1">
        <BannerSlider />
        {/* <FeaturedCategory /> */}

        <div className="flex flex-col gap-10 py-10">
          <div className="">
            <div className="flex items-center justify-between mb-6">
              <h1 className=" font-bold text-3xl">Featured Category</h1>
              <DefaultButton content="View Detail" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div>
                <CategoryCard />
              </div>
              <div>
                <CategoryCard />
              </div>
              <div>
                <CategoryCard />
              </div>
              <div>
                <CategoryCard />
              </div>
              <div>
                <CategoryCard />
              </div>
              <div>
                <CategoryCard />
              </div>
            </div>
            <div className="mt-4">
              <CustomRangeInput />
            </div>
          </div>
          <PopularProduct />
          <Article />
        </div>
      </main>
      <Footer />
    </>
  );
}
