import { Stack } from 'react-bootstrap';
import { MyInput } from '../../../components/UI/MyInput';
import { MySelect } from '../../../components/UI/MySelect';

type Filter = {
  sort: string;
  query: string;
};

type PostFilterProps = {
  filter: Filter;
  setFilter: (arg0: Filter) => void;
};

export const PostFilter = ({ filter, setFilter }: PostFilterProps) => {
  return (
    <Stack
      direction="horizontal"
      className="justify-content-between flex-wrap filters__container"
      gap={2}
      style={{ marginBottom: '2rem' }}
    >
      <MyInput
        value={filter.query}
        onChange={(query) => setFilter({ ...filter, query })}
        placeholder="Искать пост"
      />

      <MySelect
        value={filter.sort}
        onChange={(sort) => setFilter({ ...filter, sort })}
        defaultValue="Сортировать по"
        options={[
          { value: 'titleAZ', name: 'Заголовку(A-Я)' },
          { value: 'titleZA', name: 'Заголовку(Я-A)' },
        ]}
      />
    </Stack>
  );
};
