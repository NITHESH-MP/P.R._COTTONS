
import MainLayout from '@/components/layout/MainLayout';
import HeroBanner from '@/components/home/HeroBanner';
import IntroSection from '@/components/home/IntroSection';
import FeaturedCategories from '@/components/home/FeaturedCategories';

const Index = () => {
  return (
    <MainLayout>
      <HeroBanner />
      <IntroSection />
      <FeaturedCategories />
    </MainLayout>
  );
};

export default Index;
