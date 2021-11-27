import { Dropzone } from '@components/Dropzone/Dropzone';
import { SubTitle } from '@components/SubTitle/SubTitle';
import { Tabs } from '@components/Tabs/Tabs';

const CarouselImages = () => {
  return (
    <div>
      <Dropzone />
    </div>
  );
};

const Tab1 = () => {
  return <div>There will be an title, text editor and dnd section here</div>;
};

export const CreateRecipe = () => {
  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
      `}
    >
      <SubTitle>Make A New Recipe</SubTitle>
      <Tabs
        tabs={[
          {
            id: 'tab1',
            title: 'Method',
            content: <Tab1 />,
          },
          {
            id: 'tab2',
            title: 'Carousel Images',
            content: <CarouselImages />,
          },
        ]}
      />
    </div>
  );
};
