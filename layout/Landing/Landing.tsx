import { PillButton } from '@components/Buttons/PillButton/PillButton';
import { PillCard } from '@components/Cards/PillCard/PillCard.styled';
import { SearchContainer } from '@components/Containers/Search/Search.styled';
import { PillTextField } from '@components/Fields/Text/PillTextField/PillTextField.styled';

export const LandingPage = () => {
  return (
    <>
      <SearchContainer>
        <PillCard>
          <PillTextField /> <PillButton label='Search' />
        </PillCard>
      </SearchContainer>
    </>
  );
};
